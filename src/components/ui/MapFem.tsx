import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    initMap: () => void;
  }
}

interface MapProps {
  onMapClick?: (coords: { lat: number; lng: number }) => void;
}

export default function Map({ onMapClick }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Leer última posición y zoom guardados de forma segura
    let lastMapState = null;
    try {
      const raw = localStorage.getItem("lastMapState");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (
          parsed &&
          typeof parsed.lat === "number" &&
          typeof parsed.lng === "number" &&
          typeof parsed.zoom === "number"
        ) {
          lastMapState = parsed;
        }
      }
    } catch (e) {
      
      localStorage.removeItem("lastMapState");
    }
    if (window.google && window.google.maps) {
      initMap(lastMapState);
      return;
    }
    window.initMap = () => initMap(lastMapState);
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAVd09JQ6OipUm5jCopr98-icuDrCVbQH4&libraries=places&callback=initMap";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      if ((window as any).initMap) {
        delete (window as any).initMap;
      }
    };
  }, []);

  function initMap(lastMapState?: { lat: number; lng: number; zoom: number }) {
    if (!mapRef.current) return;
    const map = new google.maps.Map(mapRef.current, {
      center: lastMapState ? { lat: lastMapState.lat, lng: lastMapState.lng } : { lat: 9.990692, lng: -84.667374 },
      zoom: lastMapState ? lastMapState.zoom : 15,
      zoomControl: true,
      gestureHandling: "auto",
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
    });

    // Guardar posición y zoom cada vez que el usuario mueve el mapa
    map.addListener("idle", () => {
      const center = map.getCenter();
      if (center) {
        localStorage.setItem(
          "lastMapState",
          JSON.stringify({ lat: center.lat(), lng: center.lng(), zoom: map.getZoom() })
        );
      }
    });

    // Barra de búsqueda con Autocomplete
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Buscar lugar...";
    input.style.position = "absolute";
    input.style.top = "80px";
    input.style.left = "50%";
    input.style.transform = "translateX(-50%)";
    input.style.zIndex = "100";
    input.style.width = "300px";
    input.style.padding = "8px";
    input.style.borderRadius = "8px";
    input.style.border = "2px solid #7c3aed";
    input.style.fontSize = "16px";
    input.style.outline = "none";
    input.style.background = "#fff";
    input.style.color = "#7c3aed";
    input.style.boxShadow = "0 2px 8px rgba(124, 58, 237, 0.1)";
    mapRef.current?.appendChild(input);

    const autocomplete = new window.google.maps.places.Autocomplete(input);
    autocomplete.bindTo("bounds", map);
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place && place.geometry && place.geometry.location) {
        map.panTo(place.geometry.location);
        map.setZoom(17);
        input.value = "";
      }
    });

   
    const dangerZones = JSON.parse(localStorage.getItem("dangerZones") || "[]");
    dangerZones.forEach((zone: { lat: number; lng: number; comment?: string }, index: number) => {
      const circle = new window.google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: { lat: zone.lat, lng: zone.lng },
        radius: 300,
      });
      const infowindow = new window.google.maps.InfoWindow({
        content: `
          <div style='font-family:sans-serif;font-size:14px;max-width:200px;'>
            <p>${zone.comment || "Zona peligrosa"}</p>
            <button id="delete-danger-zone-${index}" style="margin-top: 8px; padding: 6px 12px; font-size: 14px; background-color: #dc2626; color: white; border: none; border-radius: 4px; cursor: pointer;">
              Eliminar
            </button>
          </div>
        `
      });
      circle.addListener("click", () => {
        infowindow.setPosition({ lat: zone.lat, lng: zone.lng });
        infowindow.open(map);
        google.maps.event.addListenerOnce(infowindow, "domready", () => {
          const btn = document.getElementById(`delete-danger-zone-${index}`);
          if (btn) {
            btn.addEventListener("click", () => {
              const confirmed = confirm("¿Querés eliminar esta zona?");
              if (confirmed) {
                const updatedZones = [...dangerZones];
                updatedZones.splice(index, 1);
                localStorage.setItem("dangerZones", JSON.stringify(updatedZones));
                window.location.reload();
              }
            });
          }
        });
      });
    });

    
    const safeZones = JSON.parse(localStorage.getItem("safeZones") || "[]");
    safeZones.forEach((zone: { lat: number; lng: number; comment?: string }, index: number) => {
      const circle = new window.google.maps.Circle({
        strokeColor: "#22c55e",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#22c55e",
        fillOpacity: 0.35,
        map,
        center: { lat: zone.lat, lng: zone.lng },
        radius: 300,
      });
      const infowindow = new window.google.maps.InfoWindow({
        content: `
          <div style='font-family:sans-serif;font-size:14px;max-width:200px;'>
            <p>${zone.comment || "Zona segura"}</p>
            <button id="delete-safe-zone-${index}" style="margin-top: 8px; padding: 6px 12px; font-size: 14px; background-color: #22c55e; color: white; border: none; border-radius: 4px; cursor: pointer;">
              Eliminar
            </button>
          </div>
        `
      });
      circle.addListener("click", () => {
        infowindow.setPosition({ lat: zone.lat, lng: zone.lng });
        infowindow.open(map);
        google.maps.event.addListenerOnce(infowindow, "domready", () => {
          const btn = document.getElementById(`delete-safe-zone-${index}`);
          if (btn) {
            btn.addEventListener("click", () => {
              const confirmed = confirm("¿Querés eliminar esta zona segura?");
              if (confirmed) {
                const updatedZones = [...safeZones];
                updatedZones.splice(index, 1);
                localStorage.setItem("safeZones", JSON.stringify(updatedZones));
                window.location.reload();
              }
            });
          }
        });
      });
    });

   
    // Mostrar centros de ayuda
    const helpCenters = JSON.parse(localStorage.getItem("helpCenters") || "[]");
    helpCenters.forEach((zone: { lat: number; lng: number; comment?: string }, index: number) => {
      // Usar un círculo morado para el centro de ayuda
      const circle = new window.google.maps.Circle({
        strokeColor: "#a21caf", // morado
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#a21caf", // morado
        fillOpacity: 0.35,
        map,
        center: { lat: zone.lat, lng: zone.lng },
        radius: 100, // Más pequeño para centro de ayuda
      });
      const infowindow = new window.google.maps.InfoWindow({
        content: `
          <div style='font-family:sans-serif;font-size:14px;max-width:200px;'>
            <p>${zone.comment || "Centro de ayuda"}</p>
            <button id="delete-help-center-${index}" style="margin-top: 8px; padding: 6px 12px; font-size: 14px; background-color: #a21caf; color: white; border: none; border-radius: 4px; cursor: pointer;">
              Eliminar
            </button>
          </div>
        `
      });
      circle.addListener("click", () => {
        infowindow.setPosition({ lat: zone.lat, lng: zone.lng });
        infowindow.open(map);
        google.maps.event.addListenerOnce(infowindow, "domready", () => {
          const btn = document.getElementById(`delete-help-center-${index}`);
          if (btn) {
            btn.addEventListener("click", () => {
              const confirmed = confirm("¿Querés eliminar este centro de ayuda?");
              if (confirmed) {
                const updatedCenters = [...helpCenters];
                updatedCenters.splice(index, 1);
                localStorage.setItem("helpCenters", JSON.stringify(updatedCenters));
                window.location.reload();
              }
            });
          }
        });
      });
    });

    map.addListener("click", (e: any) => {
      if (onMapClick) {
        onMapClick({ lat: e.latLng.lat(), lng: e.latLng.lng() });
      }
    });
  }

  return (
    <div ref={mapRef} style={{ width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: -10 }} />
  );
}

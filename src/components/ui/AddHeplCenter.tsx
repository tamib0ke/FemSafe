import { Link } from "@tanstack/react-router";
import { useState } from "react";
import Map from "./MapFem";

interface AddHelpCenterProps {}

export default function AddHelpCenter(props: AddHelpCenterProps) {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [comment, setComment] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Cuando el usuario selecciona un punto, mostrar el formulario
  const handleMapClick = (c: { lat: number; lng: number }) => {
    setCoords(c);
    setShowForm(true);
  };

  // Guardar coordenadas y comentario en localStorage al hacer clic en Guardar
  const handleSave = () => {
    if (coords) {
      const prev = JSON.parse(localStorage.getItem("helpCenters") || "[]");
      localStorage.setItem(
        "helpCenters",
        JSON.stringify([...prev, { ...coords, comment }])
      );
      alert(
        `Centro de ayuda guardado en: Lat: ${coords.lat}, Lng: ${coords.lng}\nComentario: ${comment}`
      );
      setShowForm(false);
      setComment("");
      setCoords(null);
      window.location.href = "/chooseOption";
    }
  };

  return (
    <div className="relative font-family-franklin h-screen w-full">
      {/* Mapa como fondo */}
      <div className="absolute inset-0 z-0">
        <Map onMapClick={handleMapClick} />
      </div>

      {/* Botón de inicio encima del mapa */}
      <Link to="/homepage">
        <button className="fixed top-4 left-4 w-12 h-12 bg-white border-2 border-purple-700 rounded-full shadow-md flex items-center justify-center z-50 hover:bg-gray-100">
          <img
            src="/src/assets/home.webp"
            alt="Inicio"
            className="w-6 h-6 object-contain"
          />
        </button>
      </Link>

      {/* CardAdd solo se muestra si ya se seleccionó un punto */}
      {showForm && coords && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 -translate-y-20 font-family-franklin">
          <div className="relative bg-white rounded-2xl shadow-xl max-w-sm p-8">
            <Link to="/chooseOption">
              <button className="absolute top-4 right-4 hover:text-purple-800">
                <img
                  src="/src/assets/Equis-morada.webp"
                  alt="Cerrar"
                  className="h-8 w-8"
                />
              </button>
            </Link>

            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center border-2 border-custom-purple rounded-full">
              <img
                src="/src/assets/Info.png"
                alt="Ícono de centro de ayuda"
                className="h-12 w-12 object-contain"
              />
            </div>

            <div className="text-center text-gray-800 text-xl mb-8">
              <p className="font-family-franklin">
                Estás a punto de marcar un lugar como un centro de ayuda. Puedes dejar una descripción sobre este lugar.
              </p>
            </div>

            <div className="space-y-8">
              <input
                type="text"
                placeholder="Descripción del lugar (opcional)"
                className="w-full border border-purple-700 rounded-full py-3 px-5 text-gray-700 focus:outline-none font-family-franklin"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="w-full bg-purple-700 text-white font-semibold py-3 rounded-3xl hover:bg-purple-800 transition font-family-franklin"
                onClick={handleSave}
              >
                Guardar
              </button>
              <div className="text-xs text-gray-500 text-center">
                Coordenadas seleccionadas: {coords.lat.toFixed(6)}, {coords.lng.toFixed(6)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Panel inferior fijo sobre el mapa */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="bg-white w-full rounded-t-3xl shadow-lg p-6 border border-gray-300">
          <input type="checkbox" id="toggleButtons" className="hidden peer" />
          <label
            htmlFor="toggleButtons"
            className="w-16 h-1.5 bg-purple-700 hover:bg-fuchsia-800 rounded-full mx-auto mb-6 block cursor-pointer transition-colors"
          ></label>

          <p className="text-center text-lg mb-8 text-custom-purple font-family-franklin">
            ¿Qué quieres marcar en el mapa?
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import Header from "./HeaderMenu";

interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  return (
    <div>
      <div className="grid grid-cols-2 py-4 px-4 rounded-lg items-center ">
        <img
          src="./src/assets/LogoFooter.png"
          alt="Logo izquierda"
          className="justify-self-start ml-3 h-auto"
        />
        <Link to="/menu" className="justify-self-end">
          <button>
            <img
              src="./src/assets/Menu.svg"
              alt="Logo derecha"
              className="h-6 w-6"
            />
          </button>
        </Link>
      </div>

      <img src="./src/assets/" alt="" />

      <div className="px-4 mt-4 mb-6">
        <h1 className="text-4xl font-normal font-family-franklin text-black leading-tight">
          Camina de manera segura
        </h1>
      </div>

      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3 mt-10">
          <h2 className="text-lg font-bold font-family-franklin text-black">
            Centros de ayuda
          </h2>
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide pt-6">
          {/* Tarjeta 1 */}
          <div className="min-w-[240px] bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="./src/assets/CasaDeLaMujer.png"
              alt="Casa de la Mujer Esparza"
              className="h-32 w-full object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm font-family-franklin text-gray-900">
                Casa de la Mujer Esparza
              </h3>
              <p className="text-xs text-gray-600 font-family-franklin mt-1">
                Un centro de encuentro para capacitaciones y asesoría.
              </p>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="min-w-[240px] bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="./src/assets/Inamu.webp"
              alt="Casa de la Mujer Alajuela"
              className="h-32 w-full object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm font-family-franklin text-gray-900">
                Punto Violeta en Esparza (INAMU)
              </h3>
              <p className="text-xs text-gray-600 font-family-franklin mt-1">
                Punto de atención, primeros auxilios psicológicos y orientación en casos de acoso/violencia sexual.
              </p>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="min-w-[240px] bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="./src/assets/Delegacióndepolicia.webp"
              alt="Centro de Apoyo San José"
              className="h-32 w-full object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm font-family-franklin text-gray-900">
                Delegación de Policía de Esparza
              </h3>
              <p className="text-xs text-gray-600 font-family-franklin mt-1">
                Atiende denuncias las 24 horas, incluido violencia y trata de personas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purple-100 mx-4 mt-10 mb-30 p-4 rounded-xl shadow-sm flex gap-3 items-start">
        <div>
          <img
            className="w-15 items-center pt-10"
            src="./src/assets/escudo-de-usuario.webp"
            alt=""
          />
        </div>
        <div className="flex-grow p-2">
          <h3 className="text-base font-semibold font-family-franklin text-purple">
            Tu seguridad es nuestra prioridad
          </h3>
          <p className="text-sm text-gray-700 font-family-franklin mt-1">
            Reporta calles solitarias, zonas peligrosas o incidentes que quieras compartir con la comunidad.
          </p>
        </div>
      </div>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-xl shadow-lg px-6 py-2 flex justify-center items-center">
        <Link to="/chooseOption">
          <button className="flex flex-col items-center text-gray-700 hover:text-pink-600 transition">
            <img src="./src/assets/Mapa.png" alt="Mapa" className="h-8 w-auto" />
            <h1 className="text-purple font-md font-family-franklin">
              Ver Mapa
            </h1>
          </button>
        </Link>
      </footer>
    </div>
  );
}

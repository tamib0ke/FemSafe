import { Link } from "@tanstack/react-router";

interface ChooseOptionProps {}

export default function ChooseOption(props: ChooseOptionProps) {
  return (
    

     <>
      {/* Botón de Inicio */}
      <Link to="/homepage">
        <button className="fixed top-4 left-4 w-12 h-12 bg-white border-2 border-purple-700 rounded-full shadow-md flex items-center justify-center z-50 hover:bg-gray-100 transition-colors">
          <img src="/ruta/al/icono-inicio.png" alt="Inicio" className="w-6 h-6 object-contain" />
        </button>
      </Link>

      {/* Panel inferior */}
      <div className="flex items-end h-screen">
        <div className="bg-white w-full rounded-t-3xl shadow-lg p-6 border border-gray-300">
          {/* Toggle desplegable */}
          <input type="checkbox" id="toggleButtons" className="hidden peer" />

          {/* Barra para desplegar */}
          <label
            htmlFor="toggleButtons"
            className="w-16 h-1.5 bg-purple-700 rounded-full mx-auto mb-6 block cursor-pointer hover:bg-fuchsia-800 transition-colors"
          ></label>

          <p className="text-center text-lg text-custom-purple mb-8">
            ¿Qué quieres marcar en el mapa?
          </p>

          {/* Opciones ocultas por defecto, visibles cuando el checkbox está marcado */}
          <div className="max-h-0 overflow-hidden peer-checked:max-h-[500px] transition-all duration-500 ease-in-out flex justify-around items-start text-center">
            {/* Peligro */}
            <div className="flex flex-col items-center">
              <Link to="/addDanger">
                <button className="w-16 h-16 flex items-center justify-center border border-purple-700 rounded-full text-custom-purple hover:bg-purple-100 transition-colors cursor-pointer">
                  <i className="fas fa-exclamation-triangle fa-2x"></i>
                </button>
              </Link>
              <span className="mt-2 text-custom-purple font-medium">Peligro</span>
            </div>

            {/* Centro de ayuda */}
            <div className="flex flex-col items-center">
              <Link to="/addHelpCenter">
                <button className="w-16 h-16 flex items-center justify-center border border-purple-700 rounded-full text-custom-purple hover:bg-purple-100 transition-colors cursor-pointer">
                  <i className="fas fa-hands-helping fa-2x"></i>
                </button>
              </Link>
              <span className="mt-2 text-custom-purple font-medium">Centro de ayuda</span>
            </div>

            {/* Zona segura */}
            <div className="flex flex-col items-center">
              <Link to="/addSafe">
                <button className="w-16 h-16 flex items-center justify-center border border-purple-700 rounded-full text-custom-purple hover:bg-purple-100 transition-colors cursor-pointer">
                  <i className="fas fa-check-circle fa-2x"></i>
                </button>
              </Link>
              <span className="mt-2 text-custom-purple font-medium">Zona segura</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
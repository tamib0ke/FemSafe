import { Link } from "@tanstack/react-router";

interface AddHeplCenterProps {
    
}

export default function  AddHeplCenter  (props: AddHeplCenterProps)  {
    return (
      <div>
        <button
          className="fixed top-4 left-4 w-12 h-12 bg-white border-2 border-purple-700 rounded-full shadow-md flex items-center justify-center z-50 hover:bg-gray-100 transition-colors"
        >
          <img
            src="/ruta/al/icono-inicio.png"
            alt="Inicio"
            className="w-6 h-6 object-contain"
          />
          <Link
            to="/homepage"
            className="text-purple font-medium underline"
          >

          </Link>
        </button>

        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 translate-y-[-80px]">
          <div className="relative bg-white rounded-2xl shadow-xl max-w-sm p-8">
            <button className="absolute top-4 right-4 text-custom-purple hover:text-purple-800 transition-colors cursor-pointer">
              <img
                src="/ruta/al/icono-cerrar.png"
                alt="Cerrar"
                className="h-8 w-8"
              />
              <Link
                to="/chooseOption"
                className="text-purple font-medium underline"
              >
              </Link>
            </button>

            <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center border-2 border-custom-purple rounded-full">
              <img
                src="/ruta/al/icono-alerta.png"
                alt="Ícono de advertencia"
                className="h-12 w-12 object-contain"
              />
            </div>

            <div className="text-center text-gray-800 text-xl mb-8">
              <p>
                This area will be marked as dangerous, you can leave a description
              </p>
            </div>

            <div>
              <input
                type="text"
                placeholder="Write here"
                className="w-full border-1 border-purple-700 rounded-full py-3 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 placeholder-custom"
              />
              <Link 
              to="/signin"
              className="mt-10 bg-purple-700 text-white font-semibold py-2 px-20 rounded-3xl hover:bg-purple-3 transition duration-300"
              >
              Guardar
            </Link>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-50 min-h-screen flex flex-col justify-between">
          <div className="flex-grow pt-8 px-4"></div>

          <div className="bg-white w-full rounded-t-3xl shadow-lg p-6 border border-gray-300">
            <input
              type="checkbox"
              id="toggleButtons"
              className="hidden peer"
            />
            <label
              htmlFor="toggleButtons"
              className="w-16 h-1.5 bg-purple-700 hover:bg-fuchsia-800 rounded-full mx-auto mb-6 block cursor-pointer transition-colors duration-300"
            ></label>

            <p className="text-center text-lg mb-8 text-custom-purple">
              ¿Qué quieres marcar en el mapa?
            </p>

            <div className="peer-checked:max-h-0 max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out grid grid-cols-3 gap-4 justify-items-center text-center">
              <div className="flex flex-col items-center">
                <button className="w-16 h-16 flex  justify-center border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
                  <i className="fas fa-exclamation-triangle fa-2x"></i>
                </button>
                <span className="mt-2 text-custom-purple font-medium">
                  Peligro
                </span>
              </div>

              <div className="flex flex-col items-center">
                <button className="w-16 h-16 flex bg-purple-100 items-center justify-center border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
                  <i className="fas fa-hands-helping fa-2x"></i>
                </button>
                <span className="mt-2 text-custom-purple font-medium">
                  Centro de ayuda
                </span>
              </div>

              <div className="flex flex-col items-center">
                <button className="w-16 h-16 flex items-center justify-center border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
                  <i className="fas fa-check-circle fa-2x"></i>
                </button>
                <span className="mt-2 text-custom-purple font-medium">
                  Zona segura
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
}
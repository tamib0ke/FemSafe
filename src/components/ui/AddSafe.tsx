import { Link } from "@tanstack/react-router";
interface AddSafeProps {
    
}

export default function  AddSafe  (props: AddSafeProps) {
    return (
      <div>
      <Link to="/homepage">
        <button className="fixed top-4 left-4 w-12 h-12 bg-white border-2 border-purple-700 rounded-full shadow-md flex items-center justify-center z-50 hover:bg-gray-100">
          <img src="/ruta/al/icono-inicio.png" alt="Inicio" className="w-6 h-6 object-contain" />
        </button>
      </Link>

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 -translate-y-20">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-sm p-8">
          <Link to="/chooseOption">
            <button className="absolute top-4 right-4 hover:text-purple-800 cursor-pointer">
              <img src="/ruta/al/icono-cerrar.png" alt="Cerrar" className="h-8 w-8" />
            </button>
          </Link>

          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center border-2 border-custom-purple rounded-full">
            <img src="/ruta/al/icono-alerta.png" alt="Warning icon" className="h-12 w-12 object-contain" />
          </div>

          <div className="text-center text-gray-800 text-xl mb-8">
            <p>This area will be marked as a safe zone. You can leave a description.</p>
          </div>

          <div className="space-y-6">
            <input
              type="text"
              placeholder="Escribe aqui"
              className="w-full border border-purple-700 rounded-full py-3 px-5 text-gray-700 focus:outline-none"
            />
            <Link to="/chooseOption">
              <button className="w-full bg-purple-700 text-white py-3 rounded-full hover:bg-purple-800 transition">
                Guardar
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 min-h-screen flex flex-col justify-end">
        <div className="bg-white w-full rounded-t-3xl shadow-lg p-6 border border-gray-300">
          <input type="checkbox" id="toggleButtons" className="hidden peer" />
          <label
            htmlFor="toggleButtons"
            className="w-16 h-1.5 bg-purple-700 hover:bg-fuchsia-800 rounded-full mx-auto mb-6 block cursor-pointer"
          ></label>

          <p className="text-center text-lg mb-8 text-custom-purple">
            ¿Qué quieres marcar en el mapa?
          </p>
        </div>
      </div>
    </div>
  );
}
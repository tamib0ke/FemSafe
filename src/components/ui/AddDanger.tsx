import { Link } from "@tanstack/react-router";
import CardAdd from "./CardAdd";

interface AddDangerProps {}

export default function AddDanger(props: AddDangerProps) {
  return (
    <div className="font-family-franklin">
      <Link to="/homepage">
        <button className="fixed top-4 left-4 w-12 h-12 bg-white border-2 border-purple-700 rounded-full shadow-md flex items-center justify-center z-50 hover:bg-gray-100">
          <img
            src="/src/assets/home.webp"
            alt="Inicio"
            className="w-6 h-6 object-contain"
          />
        </button>
      </Link>

      <CardAdd
        description="Estás a punto de marcar un lugar como peligroso. Puedes dejar una descripción sobre este lugar."
        text="Guardar"
      ></CardAdd>

      <div className="relative bg-gray-50 min-h-screen flex flex-col justify-end">
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

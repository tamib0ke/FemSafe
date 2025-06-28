import { Link } from "@tanstack/react-router";

interface CardAddProps {
  description: string;
  text: string;
}

export default function CardAdd(props: CardAddProps) {
  return (
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
            src="/src/assets/advertencia.png"
            alt="Ícono de advertencia"
            className="h-12 w-12 object-contain"
          />
        </div>

        <div className="text-center text-gray-800 text-xl mb-8">
          <p className="font-family-franklin">{props.description}</p>
        </div>

        <div className="space-y-8">
          <input
            type="text"
            placeholder="Escribe aquí"
            className="w-full border border-purple-700 rounded-full py-3 px-5 text-gray-700 focus:outline-none font-family-franklin"
          />

          <Link to="/chooseOption">
            <button className="w-full bg-purple-700 text-white font-semibold py-3 rounded-3xl hover:bg-purple-800 transition font-family-franklin">
              {props.text}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

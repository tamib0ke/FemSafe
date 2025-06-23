import Button from "./Buttons";
import { Link } from "@tanstack/react-router";
interface sednEmailProps {}

export default function SendEmail(props: sednEmailProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white font-family-franklin">
      <div className="aling-center flex flex-col items-center">
        <h1 className="text-3xl text-purple font-bold mb-20">Correo Enviado</h1>
        <p className="text-purple-2 font-medium text-center">
          Sigue las instrucciones 
        </p>
        <p className="text-purple-2 font-medium text-center mb-10">
          para restablecer tu contraseña.
        </p>

        <Link 
          to="/signin"
          className="mt-10 bg-purple text-white font-semibold py-2 px-20 rounded-3xl hover:bg-purple-3 transition duration-300"
          >
            Iniciar Sesión
          </Link>
      </div>

      {/* Imagen de la flor */}
      <img
        src="src/assets/Flor.png"
        alt=""
        className="absolute bottom-0 right-0 w-40 z-0"
      />
    </div>
  );
}

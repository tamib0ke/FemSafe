import Button from "./Buttons";
import { Link } from "@tanstack/react-router";

interface SignInProps {}

export default function SignIn(props: SignInProps) {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white font-family-franklin">
      {/* Contenedor del formulario */}
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-3xl text-purple font-bold mb-6">Iniciar Sesión</h1>

        <input
          type="text"
          placeholder="Correo Electrónico"
          className="mt-4 p-2 font-bold border-b-purple-4 border-b-2 w-64 text-purple-4 pb-4"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="mt-4 p-2 mb-3 font-bold border-b-purple-4 border-b-2 w-64 text-purple-4 pb-2 pt-8"
        />

        <Button
          text="Iniciar Sesión"
          style="mt-10 bg-purple text-white font-semibold py-2 px-20 rounded-3xl hover:bg-purple-3 transition duration-300"
        />

        <Link to="/recover" className="text-purple-2 font-semibold mt-5">
          ¿Olvidaste la contraseña?
        </Link>

        <div className="flex justify-start items-center mt-4">
          <p className="text-purple-2 font-medium">¿No tienes una cuenta?</p>
          <Link
            to="/signup"
            className="text-purple font-medium underline ml-2"
          >
            Registrarse
          </Link>
        </div>
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

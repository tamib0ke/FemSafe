import Button from "./Buttons";
import { Link } from "@tanstack/react-router";
interface SignUpnProps {}

export default function SignUp(props: SignUpnProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white font-family-franklin">
      <div className="aling-center flex flex-col items-center">
        <h1 className="text-3xl text-purple font-bold mb-10">Registrarse</h1>
        <input
          type="text"
          placeholder="Nombre"
          className="mt-8 p-2  font-bold  border-b-purple-4 border-b-2 w-64 text-purple-4 pb-4 "
        />
        <input
          type="text"
          placeholder="Correo Electrónico"
          className="mt-4 p-2  font-bold  border-b-purple-4 border-b-2 w-64 text-purple-4 pb-4 pt-8 "
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="mt-4  p-2  font-bold border-b-purple-4 border-b-2 w-64 text-purple-4 pb-4 pt-8"
        />
        <Button
          text="Login"
          style="mt-10 bg-purple text-white font-semibold py-2 px-20 rounded-3xl hover:bg-purple-3 transition duration-300"
        />
        <p className="mt-5 text-purple-2 font-medium">
          ¿Ya tienes una cuenta?
        </p>

        <Link
            to="/signin"
            className="text-purple font-medium underline"
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

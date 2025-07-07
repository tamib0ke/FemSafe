import Button from "./Buttons";
import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { preview } from "vite";

interface SignInProps {}

interface SignInData{
  email: string;
  password: string;
}

interface SignInErrors{
  email?: string;
  password?: string;
}

export default function SignIn(props: SignInProps) {
  
  
  const [signData, setSignData] = useState<SignInData>({
    
    email: "",
    password:"",
  });

  const [error, setErrors] = useState <SignInErrors>({})

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const navigate =useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = event.target;
    setSignData((preview)=> ({ ...preview, [id]: value }));
  };


  const handleSubmit = (event?: React.FormEvent) => {
  if (event) event.preventDefault();

  const newErrors: SignInErrors = {};
  let valid = true;

  if (!signData.email) {
    newErrors.email = "Este espacio es obligatorio!";
    valid = false;
  } else if (!emailRegex.test(signData.email)) {
    newErrors.email = "El correo es inválido, vuelva a intentarlo.";
    valid = false;
  }

  if (!signData.password) {
    newErrors.password = "La contraseña es obligatoria.";
    valid = false;
  }

  setErrors(newErrors);

  if (valid) {
    navigate ({to: "/homepage"});
  }
};

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-white font-family-franklin">
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-3xl text-purple font-bold mb-6">
          Iniciar Sesión
        </h1>

        {/* Input de correo */}
        <div className="w-64">
          <input
            id="email"
            type="text"
            placeholder="Correo Electrónico"
            value={signData.email}
            onChange={handleChange}
            aria-invalid={!!error.email}
            aria-describedby="email-error"
            className={`mt-4 p-2 font-bold border-b-2 w-full text-black-text pb-4 ${
              error.email ? "border-red-500" : "border-b-purple-4"
            }`}
          />
          {error.email && (
            <p id="email-error" className="mt-1 text-sm text-red-500">
              {error.email}
            </p>
          )}
        </div>

        {/* Input de contraseña */}
        <div className="w-64">
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={signData.password}
            onChange={handleChange}
            aria-invalid={!!error.password}
            aria-describedby="password-error"
            className={`mt-4 p-2 mb-3 font-bold border-b-2 w-full text-black-text pb-2 pt-8 ${
              error.password ? "border-red-500" : "border-b-purple-4"
            }`}
          />
          {error.password && (
            <p id="password-error" className="mt-1 text-sm text-red-500">
              {error.password}
            </p>
          )}
        </div>

        {/* Aquí se dispara la validación */}
      
           <Button
          text="Iniciar Sesión"
          style="mt-10 bg-purple text-white font-semibold py-2 px-20 rounded-3xl hover:bg-purple-3 transition duration-300"
          onClick= {() => handleSubmit()}
        />
      
     

        <Link to="/recover" className="text-purple-2 font-semibold mt-5">
          ¿Olvidaste la contraseña?
        </Link>

        <div className="flex justify-start items-center mt-4">
          <p className="text-purple-2 font-medium">¿No tienes una cuenta?</p>
          <Link to="/signup" className="text-purple font-medium underline ml-2">
            Registrarse
          </Link>
        </div>
      </div>

      {/* Imagen de la flor */}
      <img
        src="src/assets/Flor.png"
        alt="Flor decorativa"
        className="absolute bottom-0 right-0 w-40 z-0"
      />
    </div>
  );
}

import Button from "./Buttons";
import { Link } from "@tanstack/react-router";
interface SignInProps {}

export default function SignIn(props: SignInProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white font-family-franklin">
      <div className="aling-center flex flex-col items-center">
        <h1 className="text-3xl text-purple font-bold mb-15">Sign In</h1>
        <input
          type="text"
          placeholder="Email"
          className="mt-4 p-2  font-bold  border-b-purple-4 border-b-2 w-64 text-purple-4 pb-4 "
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-4 p-2  font-bold border-b-purple-4 border-b-2 w-64 text-purple-4 pb-4 pt-8"
        />
        <Button
          text="Login"
          style="mt-20 bg-purple text-white font-semibold py-2 px-27 rounded-3xl hover:bg-purple-3 transition duration-300"
        />

          <Link
          to="/recover"
          className="text-purple-2 font-semibold mt-5"
        >
          Forgot Password?
        </Link>

      
        <div className="flex justify-start items-center">
          <p className="mt-4 text-purple-2 font-medium">
          Don't have an account?
        </p>
        
        <Link
          to="/signup"
          className="text-purple font-medium underline mt-4 ml-4"
        >
          Sign Up
        </Link>
        </div>


        <img
          src="src/assets/Flor.png"
          alt=""
          className="absolute bottom-0 right-0 w-40 z-0"
        />
      </div>
    </div>
  );
}

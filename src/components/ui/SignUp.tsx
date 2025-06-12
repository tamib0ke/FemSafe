import Button from "./Buttons";
import { Link } from "@tanstack/react-router";
interface SignUpnProps {}

export default function SignUp(props: SignUpnProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white font-family-franklin">
      <div className="aling-center flex flex-col items-center">
        <h1 className="text-3xl text-purple font-bold mb-15">Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          className="mt-4 p-2  font-bold  border-b-purple-4 border-b-2 w-64 text-purple-4 pb-4 "
        />
        <input
          type="text"
          placeholder="Email"
          className="mt-4 p-2  font-bold  border-b-purple-4 border-b-2 w-64 text-purple-4 pb-4 pt-8 "
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
        <p className="mt-5 text-purple-2 font-medium">
          Already have an account?
        </p>

        <Link
            to="/signin"
            className="text-purple font-medium underline"
          >
            Sign In
          </Link>
          
        <p className="mt-15 text-purple font-medium ">Cancel</p>
        <img
          src="src/assets/Flor.png"
          alt=""
          className="absolute bottom-0 right-0 w-40 z-0"
        />
      </div>
    </div>
  );
}

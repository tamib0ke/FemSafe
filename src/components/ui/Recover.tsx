import { Link } from "@tanstack/react-router";
import Button from "./Buttons";

interface RecoverProps {}

export default function Recover(props: RecoverProps) {
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-white font-family-franklin">
      <div className="aling-center flex flex-col items-center">
        <h1 className="text-3xl text-purple font-bold mb-15">
          Recover Password
        </h1>
        <p className="text-purple-2 font-medium text-center mb-10">
          Enter your email addres to recover your password
        </p>

        <input
          type="text"
          placeholder="Email"
          className="mt-4 p-2  font-bold  border-b-purple-4 border-b-2 w-64 text-purple-4 pb-4 pt-8 "
        />
        <Button
          text="Send"
          style="mt-20 bg-purple text-white font-semibold py-2 px-27 rounded-3xl hover:bg-purple-3 transition duration-300"
        />

        <Link 
          to="/signin"
          className="mt-15 text-purple font-medium "
          >
            Cancel
          </Link>

        <img
          src="src/assets/Flor.png"
          alt=""
          className="absolute bottom-0 right-0 w-40 z-0"
        />
      </div>
    </div>
  );
}

import Button from "./Buttons";
interface sednEmailProps {}

export default function SendEmail(props: sednEmailProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white font-family-franklin">
      <div className="aling-center flex flex-col items-center">
        <h1 className="text-3xl text-purple font-bold mb-20">Email sent</h1>
        <p className="text-purple-2 font-medium text-center mb-10">
          Follow the instructions in the email to recover your password
        </p>
        <Button
          text="Go to Sign In"
          style="mt-20 bg-purple text-white font-semibold py-2 px-27 rounded-3xl hover:bg-purple-3 transition duration-300"
        />
        <p className="mt-35 text-purple font-medium ">Cancel</p>
        <img
          src="src/assets/Flor.png"
          alt=""
          className="absolute bottom-0 right-0 w-40 z-0"
        />
      </div>
    </div>
  );
}

import type React from "react"

interface ChooseOptionProps {
  text: string;
  bottonBar?: React.ReactNode;
}

export default function ChooseOption(props: ChooseOptionProps) {
  return (
    

   <>   
   <button
        className="fixed top-4 left-4 w-12 h-12 bg-white border-2 border-purple-700 rounded-full shadow-md flex items-center justify-center z-50 hover:bg-gray-100 transition-colors">
        <img src="/ruta/al/icono-inicio.png" alt="Inicio" className="w-6 h-6 object-contain" />
      </button>

    <div className="flex items-end h-screen">
      <div className="bg-white w-full rounded-t-3xl shadow-lg p-6 border border-gray-300">
        <input type="checkbox" id="toggleButtons" className="hidden peer" />

        <label
          htmlFor="toggleButtons"
          className="w-16 h-1.5 bg-purple-700 rounded-full mx-auto mb-6 block cursor-pointer hover:bg-fuchsia-800"
        ></label>

        <p className="text-center text-lg text-custom-purple mb-8">
          {props.text}
        </p>

        {props.bottonBar ? props.bottonBar : ""}

      </div>
    </div>
    </>
  );
}
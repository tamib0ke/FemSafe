import type React from "react"

interface ChooseOptionProps {
  text: string;
  bottonBar?: React.ReactNode;
}

export default function ChooseOption(props: ChooseOptionProps) {
  return (
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
  );
}
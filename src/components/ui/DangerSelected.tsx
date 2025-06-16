import type React from "react"

interface DangerSelectedProps {
  text: string;
  title: string;
  bottonBar?: React.ReactNode
}

export default function DangerSelected(props:   DangerSelectedProps) {
  return (
    <div className="relative bg-gray-50 h-screen flex flex-col justify-between">
        
        <div className="flex-grow pt-8 px-4">
             <div className="text-center">
              <h4 className=" inline-block bg-white border-2  font-semibold py-2 px-6 rounded-full shadow-sm  ">{props.title}</h4>
                
            </div>
        </div>

        <div className="bg-white w-full rounded-t-3xl shadow-lg p-6 border-1 border-gray-300">

 
  <input type="checkbox" id="toggleButtons" className="hidden peer" />


  <label htmlFor="toggleButtons" className="w-16 h-1.5 bg-purple-700 rounded-full mx-auto mb-6 block cursor-pointer hover:bg-fuchsia-800"></label>

  <p className="text-center text-lg mb-8">
    {props.text}
  </p>

{props.bottonBar ? props.bottonBar : ""}
 
</div>
    </div>

  );
}
import type React from "react"

interface SafeSelectedProps {
  
}

export default function SafeSelected(props: SafeSelectedProps) {
  return (
    <div className="relative bg-gray-50 h-screen flex flex-col justify-between">
        
        <div className="flex-grow pt-8 px-4">
              <div className="text-center">
              <h4 className=" inline-block bg-white border-2  font-semibold py-2 px-6 rounded-full shadow-sm"> Marca el area en el mapa</h4>
                
            </div>
        </div>

        <div className="bg-white w-full rounded-t-3xl shadow-lg p-6 border-1 border-gray-300">


  <input type="checkbox" id="toggleButtons" className="hidden peer" />


  <label htmlFor="toggleButtons" className="w-16 h-1.5 bg-purple-700 rounded-full mx-auto mb-6 block cursor-pointer hover:bg-fuchsia-800"></label>

  <p className="text-center text-lg mb-8">
        ¿Qué quieres marcar en el mapa?
  </p>

  <div className="peer-checked:max-h-0 max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out flex justify-around items-start text-center">


          <div className="flex flex-col items-center">
            <button className="w-16 h-16 flex items-center justify-center  border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
              <img src=""alt="Icono de peligro" className="w-6 h-6 object-contain" />
            </button>
            <span className="mt-2 text-custom-purple font-medium">Peligro</span>
          </div>

        
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 flex items-center justify-center  border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
              <img src=""alt="Icono de ayuda" className="w-6 h-6 object-contain" />
            </button>
            <span className="mt-2 text-custom-purple font-medium">Centro de ayuda</span>
          </div>

        
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 flex items-center justify-center bg-purple-100 border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
              <img src="" alt="Icono de zona segura" className="w-6 h-6 object-contain" />
            </button>
            <span className="mt-2 text-custom-purple font-medium">Zona segura</span>
          </div>

        </div>


</div>
    </div>

  );
}
interface ChooseOptionProps {}

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
          Qué quieres marcar en el mapa?
        </p>

        <div className="flex flex-col items-center">
            <button className="w-16 h-16 flex items-center justify-center  border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
              <img src=""alt="Icono de peligro" className="w-6 h-6 object-contain" />
            </button>
            <span className="mt-2 text-custom-purple font-medium">Peligro</span>
          </div>

        
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 flex items-center justify-center border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
              <img src=""alt="Icono de ayuda" className="w-6 h-6 object-contain" />
            </button>
            <span className="mt-2 text-custom-purple font-medium">Centro de ayuda</span>
          </div>

        
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 flex items-center justify-center  border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
              <img src="" alt="Icono de zona segura" className="w-6 h-6 object-contain" />
            </button>
            <span className="mt-2 text-custom-purple font-medium">Zona segura</span>
          </div>

        

      </div>
    </div>
    </>
  );
}
interface BottomBarProps {
    
    btnDanger: string
    btnHelp: string
    btnSafe: string
    iconDanger: string
    iconHelp: string
    iconSafe: string
}

export default function BottomBar(props: BottomBarProps) {

    return (
        <div className="peer-checked:max-h-0 max-h-[500px] overflow-hidden transition-all duration-500 ease-in-out flex justify-around items-start text-center">

       
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 flex items-center justify-center bg-purple-100 border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
              <img src={props.iconDanger} alt="Icono de peligro" className="w-6 h-6 object-contain" />
            </button>
            <span className="mt-2 text-custom-purple font-medium">{props.btnDanger}</span>
          </div>

        
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 flex items-center justify-center bg-purple-100 border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
              <img src={props.iconHelp} alt="Icono de ayuda" className="w-6 h-6 object-contain" />
            </button>
            <span className="mt-2 text-custom-purple font-medium">{props.btnHelp}</span>
          </div>

        
          <div className="flex flex-col items-center">
            <button className="w-16 h-16 flex items-center justify-center bg-purple-100 border border-purple-700 rounded-full text-custom-purple hover:bg-purple-200 transition-colors cursor-pointer">
              <img src={props.iconSafe} alt="Icono de zona segura" className="w-6 h-6 object-contain" />
            </button>
            <span className="mt-2 text-custom-purple font-medium">{props.btnSafe}</span>
          </div>

        </div>
    )
    
}
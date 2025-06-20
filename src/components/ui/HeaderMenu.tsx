import { Link } from "@tanstack/react-router";

interface HeaderMenuProps {

    text: string; 
  
   


    

}

export default function Header(props: HeaderMenuProps) {
    return (
        

        <header className="bg-purple text-white  px-4 py-3">
            <div className="grid grid-cols-3 items-center w-full">
            
                <Link to="/menu">
                    <img src="./src/assets/Back.png" alt="back" className="justify-self-start h-3" />
                </Link>
                <h1 className="text-center font-bold text-xl">{props.text}</h1>

                {/* Botón de cerrar */}
                <Link to="/homepage" className="justify-self-end">
                <img src="./src/assets/Equis.png" alt="Cerrar" className="h-3" />
                </Link>
                
            </div>
        </header>

    );
}
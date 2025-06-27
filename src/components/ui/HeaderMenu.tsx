import { Link } from "@tanstack/react-router";

interface HeaderMenuProps {
    
    img: string;
    text: string;
    style: string;
    

   
  
   


    

}

export default function Header(props: HeaderMenuProps) {
    return (
        

        <header className="bg-purple text-white gap-4 p-4 rounded-b-lg ">
            <div className="grid grid-cols-3 items-center w-full">
            
                <Link to="/menu">
                    <img src={props.img} alt="" className={props.style} />
                </Link>
                <h1 className={props.style}>{props.text}</h1>

                {/* Botón de cerrar */}
                <Link to="/homepage" className="justify-self-end">
                <img src="./src/assets/Equis.png" alt="Cerrar" className="h-6" />
                </Link>
                
            </div>
        </header>

    );
}
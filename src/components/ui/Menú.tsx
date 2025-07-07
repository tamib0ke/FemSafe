import { Link } from "@tanstack/react-router";
import Header from "./HeaderMenu";


interface MenuProps {}

export default function Menu(props: MenuProps) {
  return (
    <div className="h-screen bg-white relative flex flex-col font-family-franklin">

      {/* Header */}

        <Header
                img="./src/assets/Logo&text-white.png"
                text=""
                style=" flex items-center ml-3 h-10 "
              />

 
      <div className="p-3  mt-10 mb-10 m-3 flex justify-start items-center">
        <img src="./src/assets/profile.png" alt="Usuario" className="w-15 h-15" />
        <h1 className="mt-2 ml-4 font-bold text-gray-800 text-xl">Nombre del usuario</h1>
      </div>

    
      <nav className=" flex flex-col gap-5 ml-5 font-bold text-xl text-black-text">
        {/*Información */}
        <Link to="/infopage" className=" pt-5 pb-5  flex items-center gap-3 py-2 hover:bg-purple-2  hover:text-white transition-colors duration-300">
          <img className=" px-4 py-3 flex justify-between items-center h-13" src="./src/assets/Info.png" alt="" />
          Información
        </Link>


        {/* Log Out */}
        <Link to="/logout" className="pt-5 pb-5  flex items-center gap-3 py-2 hover:bg-purple-2  hover:text-white transition-colors duration-300">
          <img className="px-4 py-3 flex justify-between items-center h-13" src="./src/assets/Logout.png" alt="" />
          Log Out
        </Link>
      </nav>

      <img src="./src/assets/Flor.png" alt="Flor" className="absolute bottom-0 right-0 w-40" />
    </div>
  );
}

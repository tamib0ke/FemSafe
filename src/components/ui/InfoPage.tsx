import { Link } from "@tanstack/react-router";
import Header from "./HeaderMenu";

interface InfoPageProps {}

export default function InfoPage (props: InfoPageProps){
    return(

    <div className="h-screen bg-white relative flex flex-col font-family-franklin">

      <Header
        img="./src/assets/Back.png"
        text="Información"
        style="h-6 text-center font-bold text-xl "
      />

        <div className="flex flex-col gap-10 mt-10 m-5">
            
            <div>
            <div className="flex items-center gap-3  mb-2">
                <img src="./src/assets/Info.png" alt="Info" className="h-6 w-6" />
                <h3 className="text-black-text font-bold text-xl ">Qué es FemSafe?</h3>
            </div>
            <p className="text-sm text-justify text-black-text border border-gray-300 rounded-lg p-4 transition-colors duration-300 hover:bg-purple-2">
                FemSafe es una aplicación diseñada para proporcionar seguridad y apoyo a las mujeres durante sus desplazamientos diarios.
            </p>
            </div>

        {/* Card 2 */}
        <div >
          <div className="flex items-center gap-3  mb-2">
            <img src="./src/assets/Mapa.png" alt="Map" className="h-6 w-6" />
            <h3 className="text-black-text font-bold text-xl ">Mapa Interactivo</h3>
          </div>
          <ul className="list-disc list-inside text-justify text-sm text-black-text space-y-1 border border-gray-300 rounded-lg p-4 transition-colors duration-300 hover:bg-purple-2">
            <li>Consulte un mapa de seguridad con información sobre calles bien iluminadas, zonas aisladas o zonas inseguras.</li>
            <li>Encuentre centros de ayuda y asistencia cercanos.</li>
            <li>Reciba alertas sobre posibles riesgos cerca de su ubicación.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <img src="./src/assets/Safe.png" alt="Forum" className="h-6 w-6" />
            <h3 className="text-black-text font-bold text-xl ">Centros de Ayuda</h3>
          </div>
          <p className="border border-gray-300 text-justify rounded-lg p-4 transition-colors duration-300 hover:bg-purple-2 text-sm text-black-text">
          Aquí puedes encontrar información sobre 
          espacios seguros que brindan atención especializada 
          a mujeres que enfrentan situaciones de violencia, 
          acoso o cualquier tipo de riesgo. 
          Estos centros pueden ofrecer apoyo psicológico, legal, 
          médico y acompañamiento social, tanto de forma presencial como remota.
          </p>
        </div>
      </div>

      {/* Footer */}

      <footer className="flex justify-center p-5 ">
        <img className="h-10" src="./src/assets/LogoFooter.png" alt="" />
      </footer>
    </div>
  );
}




interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 p-4 rounded-lg items-center">
  <img src="./public/LogoFem.png" alt="Logo izquierda" className="justify-self-start w-16 h-auto" />

  <button className="justify-self-end">
    <img src="./public/LogoFem.png" alt="Logo derecha" className="w-16 h-auto" />
  </button>
</div>

<div className="px-4 mt-4 mb-6">
  <h1 className="text-4xl font-normal text-black leading-tight">
    Camina de manera segura
  </h1>
</div>

<div className="px-4 mt-6">
  <div className="flex items-center justify-between mb-3 mt-10">
    <h2 className="text-lg font-bold text-black">Centros de ayuda</h2>
  </div>

  <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide pt-6">
    {/* Tarjeta 1 */}
    <div className="min-w-[240px] bg-white rounded-xl shadow-md overflow-hidden">
      <img src="./public/casa.png" alt="Casa de la Mujer Esparza" className="h-32 w-full object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-900">Casa de la Mujer Esparza</h3>
        <p className="text-xs text-gray-600 mt-1">Un centro de encuentro para capacitaciones y asesoría.</p>
      </div>
    </div>

    {/* Tarjeta 2 */}
    <div className="min-w-[240px] bg-white rounded-xl shadow-md overflow-hidden">
      <img src="./public/casa.png" alt="Casa de la Mujer Alajuela" className="h-32 w-full object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-900">Casa de la Mujer Alajuela</h3>
        <p className="text-xs text-gray-600 mt-1">Asistencia integral para mujeres en situación vulnerable.</p>
      </div>
    </div>

    {/* Tarjeta 3 */}
    <div className="min-w-[240px] bg-white rounded-xl shadow-md overflow-hidden">
      <img src="./public/casa.png" alt="Centro de Apoyo San José" className="h-32 w-full object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-900">Centro de Apoyo San José</h3>
        <p className="text-xs text-gray-600 mt-1">Capacitación y apoyo psicológico gratuito.</p>
      </div>
    </div>
  </div>
</div>

<div className="bg-pink-50 mx-4 mt-20 p-4 rounded-xl shadow-sm flex gap-3 items-start">
  <div>
    <svg className="w-6 h-6 text-pink-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
      <line x1="12" y1="10" x2="12" y2="14" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="17" r="1" fill="currentColor"/>
    </svg>
  </div>
  <div className="flex-grow p-2">
    <h3 className="text-base font-semibold text-pink-800">
      Tu seguridad es nuestra prioridad
    </h3>
    <p className="text-sm text-gray-700 mt-1">
      Reporta calles solitarias, zonas peligrosas o incidentes que quieras compartir con la comunidad.
    </p>
  </div>
</div>

<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 rounded-t-xl shadow-lg px-6 py-4 flex justify-between items-center z-50 p-10">
  {/* Botón: Inicio */}
  <button className="flex flex-col items-center text-gray-700 hover:text-pink-600 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2h-4a2 2 0 01-2-2H9a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    </svg>
  </button>

  {/* Botón: Ver */}
  <button className="flex flex-col items-center text-gray-700 hover:text-pink-600 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  </button>

  {/* Botón: Mapa */}
  <button className="flex flex-col items-center text-gray-700 hover:text-pink-600 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.894L9 2l6 2 6-2v14l-6 2-6-2z" />
    </svg>
  </button>

  {/* Botón: Ajustes */}
  <button className="flex flex-col items-center text-gray-700 hover:text-pink-600 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 16v-2m8-6h2M4 12H2m15.364-6.364l1.414-1.414M6.343 17.657l-1.414 1.414m0-13.071l1.414 1.414M17.657 17.657l1.414 1.414" />
    </svg>
  </button>
</nav>

        </div>
    )
}
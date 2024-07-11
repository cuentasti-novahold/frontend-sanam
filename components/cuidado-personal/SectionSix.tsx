import "@/styles/cuidado-personal.css";

export default function SectionSix() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center px-8 gap-4 w-full">
        <div className="flex-grow border-t border-[#588157]"></div>
        <span className="text-3xl font-bold flex-shrink sm:text-2xl md:text-3xl lg:text-4xl">
          VENTAJAS
        </span>
        <div className="flex-grow border-t border-[#588157]"></div>
      </div>

      <div className="flex items-center justify-center mx-2 sm:mx-4 md:mx-6 lg:mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* Primera columna */}
          <div className="p-4">
            <div className="m-5 rounded-2xl shadow-lg shadow-blue-300/50 bg-[#2474be80]">
              <h1 className="text-center text-white text-xl sm:text-xl md:text-2xl p-5">
                Fuente sostenible de cereza de café
              </h1>
            </div>

            <div className="m-5 rounded-2xl shadow-lg shadow-blue-300/50 bg-[#2474be80]">
              <h1 className="text-center text-white text-xl sm:text-xl md:text-2xl p-5">
                100% de integridad biológica
              </h1>
            </div>

            <div className="m-5 rounded-2xl shadow-lg shadow-blue-300/50 bg-[#2474be80]">
              <h1 className="text-center text-white text-xl sm:text-xl md:text-2xl p-5">
                Sin pruebas en animales
              </h1>
            </div>
          </div>
          {/* Segunda Columna */}
          <div className="p-4 sm:p-5 md:p-6">
            <div className="m-5 rounded-xl shadow-lg shadow-blue-300/50 bg-[#2474be80]">
              <h1 className="text-center text-white text-xl sm:text-xl md:text-2xl p-5">
                Deseable INCI
              </h1>
            </div>
            <div className="m-5 rounded-full shadow-lg shadow-gray-500 bg-[#5881579c]">
              <h1 className="text-center text-xl sm:text-xl md:text-2xl text-white font-semibold p-5">
                Tecnología patentada de doble acción
              </h1>
            </div>
          </div>
          {/* Tercera columna */}
          <div className="p-4 sm:p-5 md:p-6">
            <div className="m-5 rounded-xl shadow-lg shadow-blue-300/50 bg-[#2474be80]">
              <h1 className="text-center text-white text-xl sm:text-xl md:text-2xl p-5">
                Fácil adaptabilidad
              </h1>
            </div>
            <div className="m-5 rounded-xl shadow-lg shadow-blue-300/50 bg-[#2474be80]">
              <h1 className="text-center text-white text-xl sm:text-xl md:text-2xl p-5">
                Cumplimiento global
              </h1>
            </div>
            <div className="m-5 rounded-xl shadow-lg shadow-blue-300/50 bg-[#2474be80]">
              <h1 className="text-center text-white text-xl sm:text-xl md:text-2xl p-5">
                Antioxidante líder en el mercado
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";

export default function SectionFive() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center px-8 gap-4 w-full">
          <div className="flex-grow border-t border-[#588157]"></div>
          <span className="text-xl font-bold flex-shrink sm:text-lg md:text-3xl lg:text-4xl">
            NUESTRAS FÓRMULAS
          </span>
          <div className="flex-grow border-t border-[#588157]"></div>
        </div>

        <div className="flex w-full">
          <div className="flex flex-wrap justify-center m-10 md:gap-1 2xl:gap-20">
            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] ">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/Serum.jpeg"
                  alt="Serum Antioxidante"
                  width={400}
                  height={200}
                />
              </div>
              <div className="px-4 py-2 flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Serum Antioxidante
                </h5>
                <p className="mb-3 text-black">
                  Reafirmante e hidratante, Crea una barrera protectora en el pH
                  de la piel y reduce la pérdida de humedad, mientras repara las
                  células dérmicas para restaurar la piel joven. Reafirma y
                  ayuda a suavizar la apariencia de las arrugas.
                </p>
                <h1 className="font-bold text-xl">Concentración: 4%.</h1>
              </div>
            </div>

            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] flex flex-col">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/gel-limpiador.jpeg"
                  alt="Gel limpiador"
                  width={400}
                  height={200}
                />
              </div>
              <div className="px-4  flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Gel Limpiador
                </h5>
                <p className="mb-3 text-black">
                  Exfolia suavemente para eliminar impurezas y células muertas
                  mientras ayuda a eliminar oxidantes y regular el acné. Mejora
                  la oxigenación dejando la piel visiblemente más suave.
                </p>
                <h1 className="mt-8 font-bold text-xl">Concentración: 2%</h1>
              </div>
            </div>

            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] flex flex-col">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/mascarilla.jpeg"
                  alt="Mascarilla"
                  width={400}
                  height={200}
                />
              </div>
              <div className="px-4  flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Mascarilla
                </h5>
                <p className="mb-3 text-black">
                  Diseñado para tonificar y ayudar a reactivar el desarrollo
                  enzimático dérmico. Su textura ligera potencia la rápida
                  absorción de los activos botánicos y deja la piel suave y
                  luminosa.
                </p>
                <h1 className="font-bold text-xl">Concentración: 8-10%</h1>
              </div>
            </div>

            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] flex flex-col">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/jabon.png"
                  alt="Jabon"
                  width={900}
                  height={100}
                />
              </div>
              <div className="px-4  flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Jabón Exfoliante
                </h5>
                <p className="mb-3 text-black">
                  Una barra limpiadora nutritiva e hidratante que presenta una
                  mezcla única de activos 100% café arábica. Los activos
                  exfoliantes dejan todo el cuerpo más suave y resplandeciente. 
                </p>
                <h1 className="font-bold text-xl">Concentración: 3,5%</h1>
              </div>
            </div>

            <div className="max-w-sm m-4 border border-gray-200 rounded-xl shadow-lg bg-[#5881573f] flex flex-col">
              <div className="rounded-xl overflow-hidden mx-3 mt-3 mb-2 flex-grow">
                <Image
                  src="/img/cuidado-personal/removedor.png"
                  alt="Removedor"
                  width={400}
                  height={200}
                />
              </div>
              <div className="px-4  flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Removedor de Maquillaje
                </h5>
                <p className="mb-3 text-black">
                  La novedosa fórmula natural de fruta de café con aceite de
                  nuez elimina eficazmente el maquillaje mientras suaviza y
                  nutre la piel. <br /> ¡Simplemente agite y aplique!
                </p>
                <h1 className="font-bold text-xl">Concentración: 1%</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

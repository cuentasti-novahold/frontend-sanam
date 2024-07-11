import Image from "next/image";

export default function SectionTwo() {
    return (
        <>
            <div className="max-w-4xl mx-auto p-5 lg:m-auto">
                <div className="relative flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4  ">
                    <div className="md:absolute md:left-1 md:transform md:-translate-x-[5rem] md:z-10 md:w-2/3 md:h-auto lg:-translate-x-[13rem] ">
                        <Image
                            className="rounded-3xl shadow-2xl"
                            src="/img/cuidado-personal/concentrado-cafe.jpg"
                            width={500}
                            height={300}
                            alt="concetrado de cafe"
                        />
                    </div>

                    <div className="p-4 rounded-xl shadow-md z-0 max-w-full ml-auto md:ml-8 md:p-2 md:max-w-md md:transform md:-translate-x-[-10rem] lg:p-6 lg:-translate-x-[-14rem] lg:ml-[calc(500px+2rem)] lg:max-w-[calc(800px+2rem)] bg-white">
                        <p className="text-2xl p-10 text-justify">Nuestro proceso patentado y limpio garantiza que se mantenga el
                            100% de la integridad biológica: no se agrega ni se quita nada a
                            la fruta. El resultado final, nuestro concentrado Naox® Derma sin
                            GMO y triple antioxidante.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

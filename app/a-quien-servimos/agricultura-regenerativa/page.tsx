import CardAgricultura from "@/components/agricultura/CardAgricultura";
import CardAplicacionesExitosas from "@/components/agricultura/CardAplicacionesExitosas";
import Link from "next/link";

export default function AgriculturaRegenerativa() {

    return (

        <div className="">
            <div className="relative mb-2">
                {/* <div className="absolute inset-0 bg-black opacity-70"></div> */}
                <div className="bg-cover bg-center h-[50vh] relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552346989-e069318e20a5')" }}>
                    <div className="absolute inset-0 flex flex-col  justify-center">
                        {/* <h1 className="text-white text-4xl font-bold">Texto sobre la imagen</h1> */}
                        <p className="text-white font-bold text-4xl px-40 items-center mb-10">
                            Gracias a nuestra composición y tecnología única, generamos un alto aporte energético, aumentando así la productividad y la calidad de su cultivo.
                        </p>

                        <Link className='bg-orange-400 hover:bg-orange-500 rounded-lg w-1/5 p-2 text-white font-bold text-center ml-40 text-2xl' href={'/nuestros-productos/terax'}>
                            Conoce nuestros productos
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full px-40">
                <div className="flex items-start pt-20">
                    <div className="w-1/3 bg-white p-4 pt-48 h-96 sticky top-0">
                        <h1 className="text-4xl font-bold sanam-green underline">Beneficios</h1>
                        <p className="text-base mt-3 sanam-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="w-2/3">
                        <CardAgricultura text='Estimula y mejora la absorción nutricional' img='https://via.placeholder.com/500x250/?beans' />
                        <CardAgricultura text='Aporta energía a la planta' img='https://via.placeholder.com/500x250/?plants' direction={false} />
                        <CardAgricultura text='Potencia fotosíntesis' img='https://via.placeholder.com/500x250/?photosynthesis' />
                        <CardAgricultura text='Regula funcionamiento en codiciones de estrés hídrico' img='https://via.placeholder.com/500x250/?water' direction={false} />
                        <CardAgricultura text='Promueve el desarrollo y emisión de nuevos brotes' img='https://via.placeholder.com/500x250/?watering-plant' />
                        <CardAgricultura text='Mejora los procesos fisiológicos' img='https://via.placeholder.com/500x250/?reclaim' direction={false} />
                        <CardAgricultura text='Promueve restauración y formación foliar' img='https://via.placeholder.com/500x250/?foliar-formation' />
                    </div>
                </div>
            </div>

            <div className="border-t-4 border-green-700 my-4 w-full"></div>


            <div className="w-full px-40">
                <div className="flex items-start pt-20">
                    <div className="w-2/3">
                        <CardAgricultura text='39% Carbono orgánico oxidable' img='https://via.placeholder.com/500x250/?carbono' />
                        <CardAgricultura text='40% Carbohidratos' img='https://via.placeholder.com/500x250/?electric-savings' direction={false} />
                        <CardAgricultura text='Engranaje natural de aminoácidos' img='https://via.placeholder.com/500x250/?electron' />
                        <CardAgricultura text='Ácidos con actividad antioxcidante' img='https://via.placeholder.com/500x250/?antioxidant-activity' direction={false} />
                    </div>
                    <div className="w-1/3 bg-white p-4 pt-48 h-96 sticky top-0">
                        <h1 className="text-4xl font-bold sanam-green underline">Atributos</h1>
                        <p className="text-base mt-3 sanam-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                </div>
            </div>
            <div className="text-center bg-neutral-200">
                <p className="font-bold text-4xl pt-5 sanam-green">Aplicaciones Exitosas</p>
{/* 
                <div className="flex w-full mx-10 mt-10">
                    <CardAplicacionesExitosas imgBean={'https://via.placeholder.com/250x250/?kidney-bean'} name={'Frijol'} subtitle={'+14% productividad'} />
                    <CardAplicacionesExitosas imgBean={'https://via.placeholder.com/250x250/?rice-bean'} name={'Arroz'} subtitle={<><p>+18% rendimiento</p><p>+4% peso</p></>} />
                    <CardAplicacionesExitosas imgBean={'https://via.placeholder.com/250x250/?corn-bean'} name={'Maíz'} subtitle={<><p>+15% altura</p><p>+11% hojas</p><p>+9% peso en el elote</p></>} />
                    <CardAplicacionesExitosas imgBean={'https://via.placeholder.com/250x250/?avocado'} name={'Aguacate'} subtitle={<><p>+ Cuaje flor</p><p>+ Area foliar</p><p className="text-xs">(Perfecionando estudio cuantitativo)</p></>} />
                </div>

                <div className="flex w-full mx-10 mt-10 pb-10">
                    <CardAplicacionesExitosas imgBean={'https://via.placeholder.com/250x250/?coffe-bean'} name={'Café'} subtitle={<><p>+20% productividad</p><p>+1.5% puntos perfil de taza</p></>} />
                    <CardAplicacionesExitosas imgBean={'https://via.placeholder.com/250x250/?cocoa-bean'} name={'Cacao'} subtitle={'+18% productividad'} />
                    <CardAplicacionesExitosas imgBean={'https://via.placeholder.com/250x250/?sugar-cane'} name={'Caño de azucar'} subtitle={<><p>+25% TxHaxM</p><p>+13% grados nrix</p><p>+12% sacarosa</p></>} />
                    <CardAplicacionesExitosas imgBean={'https://via.placeholder.com/250x250/?lemon'} name={'Limón'} subtitle={<><p>+ Viabilidad flor</p><p>+ Productividad</p><p className="text-xs">(Perfecionando estudio cuantitativo)</p></>} />
                </div> */}

            </div>
        </div>
    )
}

import Image from "next/image";

export default function Bienestar() {

  return (
    <section className="py-20 flex flex-wrap items-center justify-center">

      <div className="w-full justify-center p-5">
        <p className="text-4xl uppercase font-bold">Impacto al mundo del Concentrado de fruta de Café</p>
      </div>

      <div className="w-full lg:w-full flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-1/3 p-5">
          <Image width={500} height={500} src={'https://via.placeholder.com/500x500/?wellness'} alt='bienestar' />
          <h1 className='font-bold text-3xl uppercase pt-5'>bienestar</h1>
          <p className='pt-5'>Mejoramos la calidad de vida  de nuestros consumidores</p>
          {/* <button type="button" className="bg-green-400 hover:bg-green-900 text-white my-5 p-2 rounded-2xl w-full text-xl font-bold">Leer más</button> */}
        </div>
        <div className="w-full lg:w-1/3 p-5">
          <Image width={500} height={500} src={'https://via.placeholder.com/500x500/?inclusion'} alt='inclusión' />
          <h1 className='font-bold text-3xl uppercase pt-5'>inclusión</h1>
          <p className='pt-5'>Impulsamos desarrollo económico y social, ofreciendo una nueva forma de ingreso a los caficultores</p>
          {/* <button type="button" className="bg-green-400 hover:bg-green-900 text-white my-5 p-2 rounded-2xl w-full text-xl font-bold">Leer más</button> */}
        </div>
        <div className="w-full lg:w-1/3 p-5">
          <Image width={500} height={500} src={'https://via.placeholder.com/500x500/?sustainability plant'} alt='sostenibilidad' />
          <h1 className='font-bold text-3xl uppercase pt-5'>Sostenibilidad</h1>
          <p className='pt-5'>Obtenemos un planeta más limpio, autosostenible y un futuro más ilusionante</p>
          {/* <button type="button" className="bg-green-400 hover:bg-green-900 text-white my-5 p-2 rounded-2xl w-full text-xl font-bold">Leer más</button> */}
        </div>
      </div>
      <div className="w-full flex justify-center gap-5 mt-5">
        <button type="button" className="bg-green-400 hover:bg-green-900 text-white p-2 rounded-2xl w-1/3 text-xl font-bold">Leer más</button>
        <button type="button" className="bg-green-400 hover:bg-green-900 text-white p-2 rounded-2xl w-1/3 text-xl font-bold">Leer más</button>
        <button type="button" className="bg-green-400 hover:bg-green-900 text-white p-2 rounded-2xl w-1/3 text-xl font-bold">Leer más</button>
      </div>
    </section>

  )
}

/*

Titulo Bienestar:
Texto: 
Mejoramos la calidad de vida  de nuestros consumidores

Titulo Inclusión:
Texto: Impulsamos desarrollo económico y social, ofreciendo una nueva forma de ingreso a los caficultores.

Titulo Sostenibilidad:
Texto: Obtenemos un planeta más limpio, autosostenible y un futuro más ilusionante.

*/

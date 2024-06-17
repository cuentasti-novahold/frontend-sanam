import Image from 'next/image'
import React from 'react'
import EnlacesDistribuir from '@/components/nuestros-productos/Enlaces-Distribuir'

export default function NaoxDerma() {
  return (
    <>
      <div className="w-full justify-center items-center p-10  bg-[#937867]">
        <div className="w-full bg-white rounded-3xl my-2 p-10">
          <p className='text-4xl'>
            Un concentrado triple antioxidante natural potente, único en su tipo y producido de manera sostenible, que brinda protección, nutrición y rejuvenecimiento sin precedentes a las células de la piel.
          </p>
        </div>
        <div className="w-full flex gap-0 items-center justify-center">
          <div className="w-full lg:w-1/2"><Image src={'/img/nuestros-productos/naox-derma/jabon-naox-derma.jpg'} width={900} height={500} alt='naox derma' className='rounded-3xl' /></div>
          <div className="w-full lg:w-1/2"><Image src={'/img/nuestros-productos/naox-derma/jabon-naox.jpg'} width={900} height={500} alt='naox derma jabon' className='rounded-3xl' /></div>
        </div>
      </div>

      <div className=''>

        <div className="w-full flex flex-row justify-center items-center p-5">
          <div className="w-1/3  p-10">
            <p className='font-bold text-2xl'>
              Crea una barrera protectora en el pH de la piel y reduce la pérdida de humedad, además de reparar las células dérmicas para restaurar la piel joven y prevenir el envejecimiento prematuro. Mejora la apariencia de arrugas. (Con 6% de Naox ® Derma)
            </p>
          </div>
          <div className="w-1/3 opacity-75">
            <Image src={'https://via.placeholder.com/500x500?cuidado,piel-humana'} width={500} height={500} alt='naox derma' className='rounded-3xl' />
          </div>
          <div className="w-1/3  p-10">
            <h1 className='uppercase text-6xl font-bold sanam-green'>
              Serum
            </h1>
          </div>
        </div>


        <div className="w-full flex flex-row justify-center items-center p-5 bg-slate-50">
          <div className="w-1/3 opacity-75">
            <Image src={'https://via.placeholder.com/500x500?gel'} width={500} height={500} alt='naox derma' className='rounded-3xl' />
          </div>
          <div className="w-1/3  p-10">
            <h1 className='uppercase text-6xl font-bold sanam-green'>
              Gel Limpiado
            </h1>
          </div>
          <div className="w-1/3  p-10">
            <p className='font-bold text-2xl'>
              Con activos que exfolian suavemente para eliminar impurezas y células muertas, de la misma forma, ayuda a eliminar puntos negros y regular el acné. Estimula la absorción de activos, haciendo que la piel luzca más suave y tersa, y mejora la oxigenación de la piel.
              Se puede utilizar de día y de noche. (Con 12%  de Naox ® Derma)
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-center items-center p-5">
          <div className="w-1/3  p-10">
            <h1 className='uppercase text-6xl font-bold sanam-green'>
              Mascarilla
            </h1>
          </div>
          <div className="w-1/3 opacity-75">
            <Image src={'https://via.placeholder.com/500x500?mascarilla,piel-humana'} width={500} height={500} alt='naox derma' className='rounded-3xl' />
          </div>
          <div className="w-1/3  p-10">
            <p className='font-bold text-2xl'>
              Diseñada para tonificar y ayudar a la reactivación del desarrollo enzimático de la piel y la dermis. Tiene una textura muy ligera, lo cual permite una rápida absorción de sus principios activos en la piel. (Con 35% Naox® Derma)
            </p>
          </div>
        </div>

        <div className="w-full flex flex-row justify-center items-center p-5 bg-slate-50">
          <div className="w-1/3  p-10">
            <h1 className='uppercase text-6xl font-bold sanam-green'>
              Jabón
            </h1>
          </div>
          <div className="w-1/3  p-10">
            <p className='font-bold text-2xl'>
              Jabón con concentrado natural de fruta de café y harina de café que estimula, suaviza, reafirma y desintoxica la piel. Gracias a los antioxidantes es un fantástico aliado contra el envejecimiento prematuro, neutralizando las arrugas en la piel.
            </p>
          </div>
          <div className="w-1/3 opacity-75">
            <Image src={'https://via.placeholder.com/500x500?jabon,piel-humana'} width={500} height={500} alt='naox derma' className='rounded-3xl' />
          </div>
        </div>

      </div>

      <div className=''>

        <div className="w-full flex justify-center items-center p-16">
          <div className="w-2/3 bg-[#cce4c9] p-16">
            <h1 className='text-3xl font-bold'>Prueba de producción de Luz Azul</h1>
            <p className='text-2xl'>Reducción medida de los daños causados por la Luz Azul frente a los no tratados*</p>
          </div>
          <div className="w-1/3 p-16">
            <p className='border-[#774941] border-2 p-10 text-2xl'>
              Después de 90 minutos Naox®
              Derma superó al Retinol en 89% y
              a la Co Enzima Q10 en 58%, en la
              prevención del daño celular en la
              piel inducido por la Luz Azul
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center p-16 bg-white">
          <div className="w-1/3 p-16">
            <p className='border-[#774941] border-2 p-10 text-2xl'>
              Después de 3 horas, Naox® Derma
              superó al Retinol en 246% y a la
              Co Enzimz Q10 en 162%, en la
              prevención de daño celular
              inducida por el Polvo Urbano
            </p>
          </div>
          <div className="w-2/3 bg-[#cce4c9] p-16">
            <h1 className='text-3xl font-bold'>Pruebas de protección contra el Polvo Urbano</h1>
            <p className='text-2xl'>Reducción medida de los daños causados por el
              Polvo Urbano frente a los no tratados*</p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center p-16">
          <div className="w-2/3 bg-[#cce4c9] p-16">
            <h1 className='text-3xl font-bold'>Prueba de viabilidad celular Post-UVB</h1>
            <p className='text-2xl'>11% de incremento en la viabilidad celular*</p>
          </div>
          <div className="w-1/3 p-16">
            <p className='border-[#774941] border-2 p-10 text-2xl'>
              In head-to-head testing, Naox®
              Derma outperformedCoEnzyme
              Q10 and was comparable to Retinol
              for increasing skin cell viability
              following UVB exposure.
            </p>
          </div>
        </div>

      </div>

      <EnlacesDistribuir />
    </>
  )
}

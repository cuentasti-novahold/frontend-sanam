import Image from 'next/image'
import React from 'react'

export default function SeccionOne() {
  return (
    <>
    <div className='w-full grid'>
        <div className="w-full lg:flex lg:px-20">
          <div className="lg:w-1/2 bg-[#7ea977] justify-center items-center p-10 rounded-2xl m-10">
            <h1 className="text-2xl lg:text-4xl text-white py-2 lg:p-10">
              Realizamos un Compuesto Orgánico
            </h1>

            <p className="lg:text-3xl bg-green-950 text-white p-2 lg:p-10 rounded-2xl">
              Bioestimulante,
            </p>

            <p className="lg:p-10 p-2 lg:text-2xl">
              Una solucion que aumenta la productividad de su cultivo
            </p>

            <p className="lg:px-10 px-2 py-3 lg:text-3xl bg-sky-500 hover:bg-blue-600 cursor-pointer rounded-2xl text-white lg:w-3/4">
              Mas Informacion <span className='text-base'>(sería enlace a formulario de contacto)</span>
            </p>
          </div>

          <div className="lg:relative lg:w-1/2">
            <Image width={1000} height={750} src={'https://via.placeholder.com/1000x750/?seed,tierra,sembrar'} alt='imagen semilla' className='object-contain' />
            <div className="lg:absolute bottom-20 -left-32 bg-green-500 p-5 rounded-2xl lg:w-2/3">
              <p className="lg:text-2xl">De los cultivos aumentan su rendimiento cuando utilizan Terax</p>
              <p className="lg:absolute bg-orange-500 p-2 w-12 rounded-xl font-bold right-0 bottom-14 mr-3">98%</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex justify-center items-center bg-slate-400 rounded-3xl px-20">
          <div className="lg:w-1/4 p-5 flex flex-col items-center">
            <Image width={250} height={250} src={'https://via.placeholder.com/250x250/?icono,planta'} alt='imagen semilla' className='object-contain rounded-full' />
            <p className="font-bold ">39% Carbono Orgánico</p>
          </div>
          <div className="lg:w-1/4 p-5 flex flex-col items-center">
            <Image width={250} height={250} src={'https://via.placeholder.com/250x250/?icono,eco'} alt='imagen semilla' className='object-contain rounded-full' />
            <p className="font-bold ">41% Carbohidratos</p>
          </div>
          <div className="lg:w-1/4 p-5 flex flex-col items-center">
            <Image width={250} height={250} src={'https://via.placeholder.com/250x250/?icono,react'} alt='imagen semilla' className='object-contain rounded-full' />
            <p className="font-bold ">Engranaje natural de Aminoácidos</p>
          </div>
          <div className="lg:w-1/4 p-5 flex flex-col items-center">
            <Image width={250} height={250} src={'https://via.placeholder.com/250x250/?icono,siembra'} alt='imagen semilla' className='object-contain rounded-full' />
            <p className="font-bold ">Ácidos Antioxidantes</p>
          </div>
        </div>

      </div>

      <div className="bg-white w-full px-5 lg:px-40 py-10 flex flex-col justify-center items-center">
        <p className="lg:text-5xl p-5">Juntos Somos</p>
        <p className="lg:text-2xl p-5">Energía para nuestros campos</p>
        <p className="lg:text-2xl p-5">
          Nuestra tecnología <span className='text-green-800 font-bold'>Terax</span> potencializa el proceso de nutricional de las plantas ayudando a los agricultores mejorar la calidad de sus cultivos
        </p>
      </div>
    </>
  )
}
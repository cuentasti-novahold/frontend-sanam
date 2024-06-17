import SeccionBeneficios from '@/components/a-quien-servimos/cuidado-personal/Seccion-Beneficios';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


export default function CuidadoPersonal() {

  return (
    <>
      <div className="px-5 lg:px-20">
        <div className="w-full flex flex-col lg:flex-row relative py-14">
          <div className="w-full lg:w-1/2 z-0 justify-start text-left">
            <h1 className='text-5xl font-bold sanam-green'>Nuestro producto</h1>
            <h3 className='text-xl font-bold sanam-green my-5'>El Ingrediente</h3>
            <p className='sanam-gray'>El <span className='font-bold'>concentrado de jugo de fruta de café</span> es un ingrediente creado a partir de un proceso patentado que aprovecha la fruta del café.</p>
            <p className='sanam-gray my-8'>Con su rico y multidimensional perfil de sabor, además de sus características favorables para la formulación; nuestro concentrado aporta beneficios de superfruta a su próximo producto desarrollado para satisfacer y deleitar a sus clientes.</p>

            <Link className='hover:bg-green-900 rounded-lg  font-bold text-center text-3xl p-2 mt-15' href={'/nuestros-productos/naox-derma'}>
              Conoce nuestros productos
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex justify-end z-10 pt-5">
            <Image
              className='rounded-full border-4 border-white'
              src={'https://via.placeholder.com/800x800/?cafe,malteada'}
              alt='concentrado de café'
              width={500}
              height={500}
            />
          </div>
          {/* Banda debajo de la imagen */}
          <div className="lg:block hidden absolute bottom-36 left-0 bg-green-900 rounded-2xl py-8 pl-5 text-white" style={{ height: '120px', width: '80%' }}>
            {/* Esto será el ancho de 150px */}
            <p>El 74% de los consumidores globales dicen que les gustan los productos con sabores nuevos e inusuales/exóticos.</p>
            <p className='font-bold'>-Gurús de fmcg</p>
          </div>
        </div>
      </div>

      <div className="px-5 lg:px-40 bg-slate-200 ">
        <SeccionBeneficios />
      </div>
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck } from 'react-icons/fa'

export default function NuestroProductos() {
    return (
        <div className='px-40 my-16 flex'>
            <div className="w-full">
                <h1 className='uppercase font-semibold text-4xl'>Nuestros Productos</h1>
                <div className="border-t border-gray-300 my-4 w-full"></div>

                <div className="w-full flex space-x-10 mt-10"> {/* Añade espacio entre las cajas */}


                    <div className="bg-white p-10 flex flex-col justify-between"> {/* Alineación vertical */}
                            <h1 className='text-3xl font-medium'>TERAX</h1>
                            <h4 className='my-4'>Terax es un bioestimulante 100% Vegetal con sello para agricultura orgánica.</h4>
                            <div className="border-t border-gray-300 my-4"></div>
                        <div className='mb-2'>
                            <Image src={'/img/nuestros-productos/terax-galon.jpg'} height={500} width={500} alt='terax' />
                            {/* <Image src={'https://naoxcolombia.com/cdn/shop/products/2bosa.png?v=1661399618'} height={500} width={500} alt='terax' /> */}
                        </div>

                        <Link className='bg-orange-400 hover:bg-orange-500 rounded-lg w-full p-1 text-white font-bold text-center text-xl' href={'nuestros-productos/terax'}>
                            Ver más
                        </Link>
                    </div>
                    <div className="bg-white p-10 flex flex-col justify-between"> {/* Usa flex para alinear contenido */}
                            <h1 className='text-3xl font-medium'>NAOX</h1>
                            <p className='sanam-gray mt-2'>Es un alimento Funcional Antioxidante</p>
                            <div className="border-t border-gray-300 my-4"></div>
                        <div className='mb-2'>
                            <Image src={'https://naoxcolombia.com/cdn/shop/t/21/assets/2dua-pac.png'} height={500} width={500} alt='naox' />
                        </div>

                        <Link className='bg-orange-400 hover:bg-orange-500 rounded-lg w-full p-1 text-white font-bold text-center text-lg' href={'nuestros-productos/naox'}>
                            Ver más
                        </Link>
                    </div>



                    <div className="bg-white p-10 flex flex-col justify-between"> {/* Usa justify-between para alinear */}
                            <h1 className='text-3xl font-medium'>NAOX DERMA</h1>
                            <h4 className='my-4'>Nuestro concentrado Naox® Derma libre de OGM y triple antioxidante.</h4>
                            <div className="border-t border-gray-300 my-4"></div>
                        <div className='mb-2'>
                            <Image src={'/img/nuestros-productos/naox-derma.jpg'} height={500} width={500} alt='naox' />
                            {/* <Image src={'https://via.placeholder.com/500x500'} height={500} width={500} alt='naox' /> */}
                        </div>

                        <Link className='bg-orange-400 hover:bg-orange-500 rounded-lg w-full p-1 text-white font-bold text-center' href={'nuestros-productos/naox-derma'}>
                            Ver más
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

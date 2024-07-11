
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductosNaox() {
    return (
        <div className='bg-[#05825d] flex py-8'>

            <div className="w-1/2 justify-center items-center flex">
                <Image src={'/img/nutricion-humana/producto-naox-sin-fondo.png'} alt='imagen producto naox' height={400} width={600} />
            </div>
            <div className="w-1/2 p-10 justify-center items-center flex">
                <Link href={'/nutricion/productos'} className='rounded-3xl bg-[#4aa641] hover:bg-[#398032] hover:border-2 hover:border-white p-3 text-white text-4xl cursor-pointer font-bold'>Haz click y descubre más</Link>
            </div>
        </div>
    )
}
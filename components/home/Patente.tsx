import Image from 'next/image'
import React from 'react'

export default function Patente() {
    return (
        <div className='w-full py-10'>
            <h1 className="w-full text-6xl p-5 font-bold">Patente</h1>
            <div className="w-full flex">
                <div className="w-full lg:w-1/2">
                    <Image src={'/img/inicio/patente-inicio.jpg'} width={800} height={540} alt='planta de cafe' />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <h1 className="text-5xl font-bold p-10">
                        Nuestra tecnología nos permite concentrar de manera única en el mundo la materia prima proveniente del fruto del Café.
                    </h1>
                </div>
            </div>
        </div>
    )
}
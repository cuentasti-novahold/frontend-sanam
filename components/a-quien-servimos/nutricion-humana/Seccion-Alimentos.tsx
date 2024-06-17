import Image from 'next/image'
import React from 'react'

export default function SeccionAlimentos({ title='', text='', img='', direction=true }) {
    // Determina la clase CSS para el contenedor de la imagen
    const imageContainerClass = direction ? 'order-first' : 'order-last';

    return (
        <div className="w-full flex bg-[#f5f2ef]">
            <div className={`w-1/2 flex flex-col justify-center items-center ${imageContainerClass} p-10`}>
                <h1 className="lg:text-5xl p-5 font-bold sanam-green">{title}</h1>
                <p className="lg:text-2xl p-5 font-medium sanam-gray">{text}</p>
            </div>
            <div className='w-1/2'>
                <Image width={800} height={800} src={img} alt="Imagen" />
            </div>
        </div>
    );
}

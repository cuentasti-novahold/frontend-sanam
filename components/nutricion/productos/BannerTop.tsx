import Image from 'next/image'
import React from 'react'

export default function BannerTop() {
    return (
        <div className="w-full flex px-10">
            <div className="w-2/3">
                <div className="w-full bg-[#cbdcbd] h-3/4 p-14 rounded-tl-3xl flex flex-col justify-center">
                    <h1 className="text-4xl">
                        Es un alimento Funcional Antioxidante Naox proviene del concentrado natural de la fruta del café, rico en antioxidantes naturales que ayudan a combatir la oxidación de nuestro cuerpo 100% Ecosostenible.
                    </h1>
                </div>
                <div className="w-full bg-[#9ba78b] h-1/4 p-14 rounded-bl-3xl flex flex-col justify-center">
                    <h1 className="text-3xl font-bold">
                        Ideal para sustituir bebidas azucaradas.
                    </h1>
                </div>
            </div>
            <div className="w-1/3">
                <Image src={'/img/nuestros-productos/banner-top.jpeg'} height={600} width={700} alt='naox' className='rounded-tr-3xl rounded-br-3xl' />
            </div>

        </div>
    )
}

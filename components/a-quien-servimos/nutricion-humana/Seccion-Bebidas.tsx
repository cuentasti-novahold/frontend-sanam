import Image from 'next/image'
import React from 'react'

export default function SeccionBebidas({title = '', description='', imgUrl = 'https://via.placeholder.com/600x600/?beverages', backgroundImg='', direction = false}) {

    const imageContainerClass = direction ? 'order-first' : 'order-last';
    return (
        <div
            className="w-full h-screen bg-cover bg-center sticky top-0"
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="flex flex-col md:flex-row items-center p-8">

                    {/* Columna del título y texto */}
                    <div className={`w-full md:w-1/2 p-4 ${imageContainerClass}`}>
                        <h2 className="text-5xl font-bold text-white text-shadow-2xl ">{title}</h2>
                        <p className="text-white mt-4">{description}</p>
                    </div>
                    
                    
                    {/* Columna de la imagen */}
                    <div className="w-full md:w-1/2 flex flex-col items-center relative">
                <Image
                    src={imgUrl} // URL de la imagen
                    alt="Bebida refrescante"
                    width={600}
                    height={600}
                    className="rounded-lg"
                />
                <div className={`absolute bottom-2 ${direction ? 'left-52':'right-52'} flex justify-center w-full animate-spin-slow`}>
                    <Image
                        src="/img/nutricion-humana/spinner-circle.png" // URL de la imagen
                        alt="Spinner"
                        width={150}
                        height={150}
                        className="rounded-full"
                    />
                </div>
            </div>

                    
                </div>
            </div>
        </div>
    )
}

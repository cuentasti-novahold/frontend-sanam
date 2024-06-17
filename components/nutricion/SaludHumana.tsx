import React from 'react'
import { FaHeartbeat } from 'react-icons/fa'
import { GiStoneStack } from 'react-icons/gi'

export default function SaludHumana() {
    return (
        <>
            <div className="w-full items-center p-10">
                <div className="w-full justify-center text-center">
                    <h1 className='font-bold lg:text-7xl text-gray-600'>Salud Humana</h1>
                </div>

                <div className="w-full flex text-center">
                    <div className="w-1/2 bg-sky-300 m-5 p-5 rounded-3xl">
                        <h1 className='font-bold text-4xl'>Stone</h1>
                    </div>
                    <div className="w-1/2 bg-sky-400 m-5 p-5 rounded-3xl">
                        <h1 className='font-bold text-4xl'>Life</h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex text-center p-10">
                <div className="w-1/2 border-4 border-white rounded-xl m-5 p-10 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <GiStoneStack size={80} className='' />
                    </div>
                    {/* Otro contenido dentro del div */}
                    <p className='text-xl mt-5 text-left'>Es la primera bebida diseñada para ayudar a prevenir la formación de cálculos urinarios.</p>
                    <br />
                    <p className='text-xl text-left'>La combinación de las dosis adecuadas de sales de citrato con fruta de café, hacen que se eviten la formación de los cristales productores de los cálculos.</p>
                </div>
                <div className="w-1/2 border-4 border-white rounded-xl m-5 p-10 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <FaHeartbeat size={80} />
                    </div>
                    {/* Otro contenido dentro del div */}
                    <p className='text-xl mt-5 text-left'>Producto nutracéutico que mejora la función y estructura muscular tanto esquelética como respiratoria en los seres humanos.</p>
                    <br />
                    <p className='text-xl text-left'>Codesarrollado con la Fundación Cardiovascular de Colombia.</p>
                </div>
            </div>

        </>
    )
}

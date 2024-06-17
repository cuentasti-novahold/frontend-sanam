import React from 'react'
import { FaGears, FaHouseSignal } from 'react-icons/fa6'

export default function SeccionFour() {
    return (
        <div className='bg-slate-50 py-10'>
            <div className="w-full text-center">
                <p className="lg:text-5xl font-bold uppercase">Promovemos</p>
            </div>
            <div className="w-full lg:flex lg:px-96 py-10 gap-5 justify-center items-center">
                <div className="lg:w-1/2 flex flex-col items-center justify-center gap-10">
                    <FaGears size={150} className='sanam-green' />
                    <p className="uppercase shadow-md p-5 rounded-xl shadow-green-700 text-center">Agricultura Sostenible</p>
                </div>
                <div className="lg:w-1/2 flex flex-col items-center justify-center gap-10">
                    <FaHouseSignal size={150} className='sanam-green' />
                    <p className="uppercase shadow-md p-5 rounded-xl shadow-green-700 text-center">Recuperamos los suelos</p>
                </div>
            </div>
        </div>
    )
}
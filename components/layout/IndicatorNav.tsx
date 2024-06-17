import Link from 'next/link'
import React from 'react'

export default function IndicatorNav({ activeLink = '' }) {
    return (
        <div className='flex justify-stretch  w-full'>
            <Link href="#" className={`text-gray-500 hover:text-green-400 uppercase w-1/2 ${activeLink === 'por definirse' ? 'text-green-400' : ''}`}>
                Proceso
            </Link>
            <p className='text-gray-500 uppercase w-1/2'>Indicador: 100%</p>
        </div>
    )
}
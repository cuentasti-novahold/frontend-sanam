import SeccionAlimentos from '@/components/a-quien-servimos/nutricion-humana/Seccion-Alimentos'
import Image from 'next/image'
import React from 'react'

export default function Alimentos() {
    return (
        <div className="px-5 lg:px-40 py-5">
            <div className="w-full text-center p-10">
                <h1 className="text-5xl sanam-green font-bold uppercase">Alimentos</h1>
                <p className="p-5 text-2xl sanam-gray">El jugo de fruta del café</p>
            </div>
            <SeccionAlimentos
                img='https://via.placeholder.com/800x800/?sauce'
                title='Salsas y Aderezos'
                text='El jugo de fruta del café se usa para dar un toque exótico y dulce a salsas y aderezos, aportando un sabor único a tus comidas.'
            />
            <SeccionAlimentos
                img='https://via.placeholder.com/800x800/?bakery'
                title='Panaderia y Reposteria'
                text='El jugo de fruta del café puede usarse en productos de panadería y repostería para añadir dulzura natural y un sabor distintivo.'
                direction={false}
            />
            <SeccionAlimentos
                img='https://via.placeholder.com/800x800/?snacks'
                title='Snacks Saludables'
                text='Los snacks saludables ganan un sabor distintivo y beneficios nutricionales gracias al jugo de fruta del café.'
            />
            <SeccionAlimentos
                img='https://via.placeholder.com/800x800/?suplementos'
                title='Nutracéuticos'
                text='El jugo de fruta del café puede ser parte de nutracéuticos que ofrecen propiedades antioxidantes y otros beneficios para la salud.'
                direction={false}
            />

        </div>
    )
}

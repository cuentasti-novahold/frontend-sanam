import SeccionBebidas from '@/components/a-quien-servimos/nutricion-humana/Seccion-Bebidas'
import Image from 'next/image'
import React from 'react'

export default function Bebidas() {
    return (
        <div className="relative h-[300vh]">
            {/* Sección de la primera imagen */}
            <SeccionBebidas
                title='Cafés Alternativos'
                description='Esta bebida refrescante está hecha con los mejores ingredientes naturales y es perfecta para cualquier ocasión.'
                imgUrl='https://via.placeholder.com/600x600/?alternative-coffee'
                backgroundImg='https://via.placeholder.com/1920x1080?colors-sky'
                key={1}
            />

            <SeccionBebidas
                title='De Bienestar (Funcional)'
                description='Bebidas diseñadas para brindar beneficios para la salud, como mejorar la digestión o aumentar la energía.'
                imgUrl='https://via.placeholder.com/600x600/?wellness-drink'
                backgroundImg='https://via.placeholder.com/1920x1080?colors'
                direction={true}
            />

            <SeccionBebidas
                title='Deportivas'
                description='Ideales para mantener la energía y la hidratación durante el ejercicio y la recuperación.'
                imgUrl='https://via.placeholder.com/600x600/?sports-drink'
                backgroundImg='https://via.placeholder.com/1920x1080?colors-wall'
                key={3}
            />

            <SeccionBebidas
                title='Energizantes'
                description='Proporcionan un impulso rápido de energía para esos días en los que necesitas un extra de motivación.'
                imgUrl='https://via.placeholder.com/600x600/?energy-drink'
                backgroundImg='https://via.placeholder.com/1920x1080?colors-table'
                direction={true}
                key={4}
            />

            <SeccionBebidas
                title='Hard Seltzers'
                description='Refrescantes y con un toque de alcohol, perfectos para relajarse en cualquier ocasión.'
                imgUrl='https://via.placeholder.com/600x600/?hard-seltzer'
                backgroundImg='https://via.placeholder.com/1920x1080?colors-screen'
                key={5}
            />

        </div>

    )
}
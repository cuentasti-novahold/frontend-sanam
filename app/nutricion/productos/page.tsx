import AporteMundo from '@/components/nuestros-productos/Aporte-Mundo';
import EnlacesDistribuir from '@/components/nuestros-productos/Enlaces-Distribuir';
import BannerTop from '@/components/nutricion/productos/BannerTop';
import SlideProductos from '@/components/nutricion/productos/SlideProductos';
import { ICardContent } from '@/types/CardContent';
import React from 'react'

const cardContentProps: ICardContent[] = [
  { imgUrl: '/img/nuestros-productos/super-alimento.jpeg', alt: 'SUPERALIMENTO', textOverlay: 'SUPERALIMENTO', description: 'WebMD.com etiqueta nuestro ingrediente como un superalimento. Potencia los beneficios en los consumidores con hábitos de consumo saludable.' },
  { imgUrl: '/img/nuestros-productos/apoyo-caficultores.jpeg', alt: 'APOYAMOS LOS CAFICULTORES', textOverlay: 'APOYAMOS LOS CAFICULTORES', description: 'Ofrecemos una nueva oportunidad de ingresos para los caficultores. Tradicionalmente visto como un residuo, revelamos su valor como la superfruta pasada por alto en el mundo. Es un gana-gana para todos los involucrados.' },
  { imgUrl: '/img/nuestros-productos/beneficio-medio-ambiente.jpeg', alt: 'BENEFICIAMOS EL MEDIO AMBIENTE', textOverlay: 'BENEFICIAMOS EL MEDIO AMBIENTE', description: 'El consumo diario de más de 2.25 mil millones de tazas de café resulta en un desperdicio significativo, dañando el medio ambiente. Reutilizamos y transformamos estos residuos reduciendo el impacto ecológico.' },
]

export default function Productos() {

  return (
    <>

      <div className='px-50 py-5 w-full'>
        <BannerTop />
      </div>

      <div className="h-1/2 p-14 bg-slate-500">
        <p className="text-5xl text-white">
          PRESENTACION INDUSTRIAL 1 / 5 / 20 /  200 KG
        </p>
      </div>


      <div className="bg-indigo-500"> {/* Carrusel horizontal */}
        <SlideProductos />
      </div>

      <AporteMundo cardContent={cardContentProps} />

      <EnlacesDistribuir />

    </>
  )
}

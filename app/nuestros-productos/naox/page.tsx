import AporteMundo from '@/components/nuestros-productos/Aporte-Mundo';
import EnlacesDistribuir from '@/components/nuestros-productos/Enlaces-Distribuir';
import Image from 'next/image'
import React from 'react'

export default function Naox() {

  // Define los datos para las imágenes y el texto correspondiente
  // const images = [
  //   { src: '/img/nuestros-productos/naox.png', text: 'Concentrado de fruta de Café en sachet, perfecto para  llevar a cualquier lugar. ' },
  //   { src: '/img/nuestros-productos/naox-vital.png', text: 'Concentrado de fruta de Café en sobre, perfecto para llevar a cualquier lugar. Adicionalmente contiene 4 ingredientes con alto poder antioxidante: te negro, semilla de uva, hoja de moringa y betaglucanos de ganoderma lucidum.' },
  //   { src: '/img/nuestros-productos/naox-stone.png', text: 'Es la primera bebida diseñada para ayudar a prevenir la formación de cálculos urinarios. La combinación de las dosis adecuadas de sales de citrato con fruta de café, hacen que se eviten la formación de los cristales productores de los cálculos' },
  //   { src: '/img/nuestros-productos/naox-life.png', text: 'Producto nutracéutico codesarrollado con la Fundación Cardiovascular de Colombia, que mejora la función y estructura muscular esquelética y respiratoria en humanos.' },
  // ];


  const images = [
    { src: 'https://via.placeholder.com/1080x800/?nature', text: 'Concentrado de fruta de Café en sachet, perfecto para  llevar a cualquier lugar. ' },
    { src: 'https://via.placeholder.com/1080x800/?city', text: 'Concentrado de fruta de Café en sobre, perfecto para llevar a cualquier lugar. Adicionalmente contiene 4 ingredientes con alto poder antioxidante: te negro, semilla de uva, hoja de moringa y betaglucanos de ganoderma lucidum.' },
    { src: 'https://via.placeholder.com/1080x800/?technology', text: 'Es la primera bebida diseñada para ayudar a prevenir la formación de cálculos urinarios. La combinación de las dosis adecuadas de sales de citrato con fruta de café, hacen que se eviten la formación de los cristales productores de los cálculos' },
    { src: 'https://via.placeholder.com/1080x800/?travel', text: 'Producto nutracéutico codesarrollado con la Fundación Cardiovascular de Colombia, que mejora la función y estructura muscular esquelética y respiratoria en humanos.' },
  ];


  const cardContent = [
    { imgUrl: 'https://via.placeholder.com/600x600/?aliments,coffe', alt: 'SUPERALIMENTO', textOverlay: 'SUPERALIMENTO', description: 'WebMD.com etiqueta nuestro ingrediente como un superalimento. Potencia los beneficios en los consumidores con hábitos de consumo saludable.' },
    { imgUrl: 'https://via.placeholder.com/600x600/?agricultor,plantacion,cafe', alt: 'APOYAMOS LOS CAFICULTORES', textOverlay: 'APOYAMOS LOS CAFICULTORES', description: 'Ofrecemos una nueva oportunidad de ingresos para los caficultores. Tradicionalmente visto como un residuo, revelamos su valor como la superfruta pasada por alto en el mundo. Es un gana-gana para todos los involucrados.' },
    { imgUrl: 'https://via.placeholder.com/600x600/?plantacion,medio-ambiente', alt: 'BENEFICIAMOS EL MEDIO AMBIENTE', textOverlay: 'BENEFICIAMOS EL MEDIO AMBIENTE', description: 'El consumo diario de más de 2.25 mil millones de tazas de café resulta en un desperdicio significativo, dañando el medio ambiente. Reutilizamos y transformamos estos residuos reduciendo el impacto ecológico.' },
  ]


  return (
    <>
      <div className='px-50 py-5 w-full'>

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
            <Image src={'https://via.placeholder.com/600x700/?tea,botella,yogurth'} height={600} width={700} alt='naox' className='rounded-tr-3xl rounded-br-3xl' />
          </div>

        </div>

      </div>

      <div className="h-1/2 p-14 bg-slate-500">
        <p className="text-5xl">
          PRESENTACION INDUSTRIAL 1 / 5 / 20 /  200 KG 
        </p>
      </div>

      {/* <div className="w-full h-screen overflow-x-auto flex space-x-8 justify-center items-center px-10 py-10"> Carrusel horizontal */}
      <div className="section-img bg-white h-screen "> {/* Carrusel horizontal */}
        {images.map((image, index) => (
          <div key={index} className="relative transition-transform duration-700 w-96 group hover:w-full cursor-crosshair"> {/* Usa hover para expandir el contenedor */}
            <Image
              src={image.src}
              alt={image.text}
              layout="responsive" // Ajustar para cambios de tamaño

              width={600}
              height={1080} // Define dimensiones iniciales
              className="filter  transition-transform duration-700" // Cambia de gris a color en hover
            />

            {/* Texto sobre la imagen */}
            <div className="absolute inset-0 flex justify-center items-end bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300 py-10 px-5"> {/* Texto centrado */}
              <p className="text-white font-bold text-2xl opacity-0 group-hover:opacity-100 transition duration-300">{image.text}</p> {/* Texto que aparece en hover */}
            </div>
          </div>
        ))}
      </div>

      <AporteMundo cardContent={cardContent} />

      <EnlacesDistribuir />

    </>
  )
}

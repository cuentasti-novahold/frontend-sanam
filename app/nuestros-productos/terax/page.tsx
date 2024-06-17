import AporteMundo from '@/components/nuestros-productos/Aporte-Mundo';
import EnlacesDistribuir from '@/components/nuestros-productos/Enlaces-Distribuir';
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa';

export default function Terax() {

  const items = [
    'Origen Natural vs Fuentes Químicas.',
    'Disminuimos huella de carbono.',
    'Prevenimos la erosión de los suelos.',
    'Mitigamos contaminación de fuentes hídricas.',
    'Aprovechamos integralmente el fruto del café.',
    'Nutrimos los suelos (Aumentamos pH).',
    'Alta relación beneficio - costo.'
  ];


  const cardContent = [
    { imgUrl: 'https://via.placeholder.com/600x600/?plantas,cafe,agricultor', alt: 'AGRICULTURA REGENERATIVA', textOverlay: 'AGRICULTURA REGENERATIVA', description: 'TERAX con el aporte de sus 4 principales elementos ayuda a la recuperación de los suelos para producir alimentos sanos, limpios y nutritivos.' },
    { imgUrl: 'https://via.placeholder.com/600x600/?plantas,cafe-rojo,agricultor', alt: 'APOYAMOS LOS CAFICULTORES', textOverlay: 'APOYAMOS LOS CAFICULTORES', description: 'Ofrecemos una nueva oportunidad de ingresos para los caficultores. Tradicionalmente visto como un residuo, revelamos su valor como la superfruta pasada por alto en el mundo. Es un gana-gana para todos los involucrados.' },
    { imgUrl: 'https://via.placeholder.com/600x600/?cafe-verde,agricultor', alt: 'BENEFICIAMOS EL MEDIO AMBIENTE', textOverlay: 'BENEFICIAMOS EL MEDIO AMBIENTE', description: 'El consumo diario de más de 2.25 mil millones de tazas de café resulta en un desperdicio significativo, dañando el medio ambiente. Reutilizamos y transformamos estos residuos reduciendo el impacto ecológico.' },
  ]

  return (

    <>
      <div className='h-screen '>
        <Image alt='terax' src={'https://via.placeholder.com/1920x850/?cultivos,legumbres'} width={1920} height={850} />
      </div>

      <div className='w-full flex gap-2'>
        <div className='w-full lg:w-1/3 relative flex flex-col justify-center items-center'>
          <Image alt='terax 900x500' src={'/img/nuestros-productos/terax/sin-terax.jpg'} height={900} width={500} />
          <div className='absolute top-40 left-0 w-full h-full flex justify-center items-center'> {/* Alinea el texto */}
            <p className='text-white font-bold text-xl bg-black bg-opacity-50 px-4 py-2 rounded uppercase'>
              Sin terax
            </p>
          </div>
        </div>
        <div className='w-full lg:w-1/3 relative flex flex-col justify-center items-center'>
          <Image alt='terax' src={'/img/nuestros-productos/terax/con-terax.jpg'} height={900} width={500} />
          <div className='absolute top-40 left-0 w-full h-full flex justify-center items-center'> {/* Alinea el texto */}
            <p className='text-white font-bold text-xl bg-black bg-opacity-50 px-4 py-2 rounded uppercase'>
              con terax
            </p>
          </div>
        </div>

        <div className='w-full lg:w-1/3 lg:p-10 flex flex-col items-center h-full'>
          <h1 className='font-bold uppercase text-5xl'>Terax</h1>
          <p className='my-10 text-2xl'>
            Terax es un bioestimulante 100% Vegetal con sello para agricultura orgánica. Creado a partir de una tecnología patentada.
          </p>
          <span className='my-10 text-2xl'>
            Gracias a nuestra composición y tecnología única, generamos un alto aporte energético, aumentando así la productividad y la calidad de su cultivo.
          </span>
        </div>
      </div>

      <div className='w-full flex p-16 bg-white'>

        <div className='w-1/2 flex flex-col p-5'>
          <h1 className='text-6xl sanam-green font-bold pb-10'>Terax vs Otros Productos</h1>

          <div className='space-y-4'> {/* Alineación vertical con espacio entre elementos */}
            {items.map((item, index) => (
              <div key={index} className='flex items-center'> {/* Alinear horizontalmente */}
                <FaPlus className='sanam-green mr-2' /> {/* Ícono */}
                <p className='sanam-gray font-bold text-2xl'>{item}</p> {/* Texto */}
              </div>
            ))}
          </div>

        </div>

        <div className='w-1/2 bg-[#004a22] px-16 pt-5 flex flex-col justify-center rounded-3xl'>
          <h1 className='text-6xl text-yellow-500'>Por cada tonelada de Terax</h1>
          <p className='text-3xl text-white'>aplicado, se disminuye la contaminación equivalente a</p>
          <h1 className='text-6xl text-yellow-500'>450.000 personas</h1>
        </div>

      </div>


      <AporteMundo cardContent={cardContent} />

      <EnlacesDistribuir />
    </>
  )
}

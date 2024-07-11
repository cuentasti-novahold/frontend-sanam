import EnlacesDistribuir from '@/components/nuestros-productos/Enlaces-Distribuir'
import AtributosFruta from '@/components/nutricion/AtributosFruta'
import BeneficioFruta from '@/components/nutricion/BeneficioFruta'
import SlideImagenes from '@/components/nutricion/SlideImagenes'
import ConcentradoBanner from '@/components/nutricion/ConcentradoBanner'
import ProductosBanner from '@/components/nutricion/ProductosBanner'
import ProductosNaox from '@/components/nutricion/ProductosNaox'
import SaludHumana from '@/components/nutricion/SaludHumana'
import { ISlideContent } from '@/types/SlideContent'
import { GiOfficeChair, GiHouseKeys } from 'react-icons/gi'
import { IoMdSchool } from 'react-icons/io'
import { IoRestaurantSharp } from 'react-icons/io5'
import { MdSportsHandball } from 'react-icons/md'

const slideContent : ISlideContent[] = [
  {
      background: 'url(https://cdn.pixabay.com/photo/2015/07/02/10/23/training-828741_1280.jpg)',
      color: '#ac92ec',
      title: 'Deporte: Concentrado de fruta del café para deportistas',
      subtitle: 'Antioxidantes que te ayudan a combatir el estrés oxidativo causado por la actividad física.',
      icon: <MdSportsHandball size={80} />, 
  },
  {
      background: 'url(https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg)',
      color: '#fc6e51',
      title: 'Trabajo: Concentrado de fruta del café para tu Oficina',
      subtitle: 'No más estrés. No más distracciones. No más bajones de Energia.',
      icon: <GiOfficeChair size={80} />, 
  },
  {
      background: 'url(https://cdn.pixabay.com/photo/2017/01/14/10/57/woman-1979272_1280.jpg)',
      color: '#2ecc71',
      title: 'Hogar: Concentrado de fruta del café para tu Hogar',
      subtitle: 'El secreto mejor guardado de las madres',
      icon: <GiHouseKeys size={80} />, 
  },
  {
      background: 'url(https://cdn.pixabay.com/photo/2019/10/04/19/26/children-4526384_1280.jpg)',
      color: '#5d9cec',
      title: 'Escuela: Concentrado de fruta del café para los colegios',
      subtitle: 'El bienestar de tus estudiantes empieza por sus alimentos.',
      icon: <IoMdSchool size={80} />, 
  },
  {
      background: 'url(https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg)',
      color: '#ffce54',
      title: 'Horeca: Concentrado de fruta del café para tu Restaurante',
      subtitle: 'Una nueva alternativa para tus clientes',
      icon: <IoRestaurantSharp size={80} />, 
  }
];

export default function page() {
  return (
    <>
      {/* sección 1 */}
      <div className="px-5 lg:px-40 xl:px-40 relative bg-[#a67649]">
        <ConcentradoBanner />
      </div>

      <div className="w-full px-5 lg:px-40 xl:px-40 bg-[#a67649]">
        <ProductosBanner />
      </div>

      <div className="px-5 lg:px-40 xl:px-40 bg-yellow-50 py-10">
        <BeneficioFruta />
        <AtributosFruta />
      </div>

      <div className="bg-black">       
        <SlideImagenes slideContent={slideContent}/>
      </div>

      <div className="w-full px-5 lg:px-40 xl:px-40">
        <SaludHumana/>
      </div>
      
      
      <div className="w-full">
        <ProductosNaox/>
      </div>


      <div className="w-full px-5 lg:px-40 xl:px-40 bg-gray-200">
        <EnlacesDistribuir/>
      </div>

    </>
  )
}
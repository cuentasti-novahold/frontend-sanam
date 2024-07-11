import '../../styles/about-section.css'
import { FaHandHoldingHeart, FaSeedling } from 'react-icons/fa'
import { FaPlateWheat } from 'react-icons/fa6'
import NavigationSanam from '../shared/NavigationSanam'

export default function Industrias() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-3 gap-10 justify-center items-center text-center">
        <NavigationSanam route={"/agricultura"} styleDiv='rounded-lg p-4 shadow-lg flex flex-col justify-center items-center' styleSpan='text-xl font-bold text-gray-800 uppercase' title="Agricultura" Icon={FaSeedling} styleIcon={"text-green-500 mt-8"} />
        <NavigationSanam route={"/nutricion"} styleDiv='rounded-lg p-4 shadow-lg flex flex-col justify-center items-center' styleSpan='text-xl font-bold text-gray-800 uppercase ' title="Nutrición y salud humana" Icon={FaPlateWheat} styleIcon={"text-yellow-500 mt-10"} />
        <NavigationSanam route={"/cuidado-personal"} styleDiv='rounded-lg p-4 shadow-lg flex flex-col justify-center items-center' styleSpan='text-xl font-bold text-gray-800 uppercase' title="Cuidado Personal" Icon={FaHandHoldingHeart} styleIcon={"text-red-600 mt-8"} />
      </div>
    </section>
  )
}
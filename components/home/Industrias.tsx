import '../../styles/about-section.css'
import { FaHandHoldingHeart, FaHandHoldingMedical, FaSeedling } from 'react-icons/fa'
import { FaPlateWheat } from 'react-icons/fa6'

export default function Industrias() {
  return (
    <section className="py-20">
      <div className="grid grid-cols-3 gap-10 justify-center items-center">
        <div className="rounded-lg p-4 shadow-lg flex flex-col justify-center items-center">
          <span className="text-xl font-bold text-gray-800 uppercase">Agricultura</span>
          <FaSeedling size={70} className="text-green-500 mt-8" />
        </div>
        <div className="rounded-lg p-4 shadow-lg flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-center uppercase">Nutrición</h3>
          <FaPlateWheat size={70} className="text-yellow-500 mt-8" />
        </div>
        <div className="rounded-lg p-4 shadow-lg flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-center uppercase">Cuidado Personal</h3>
          <FaHandHoldingHeart size={70} className="text-red-600 mt-8" />
        </div>
      </div>
    </section>
  )
}
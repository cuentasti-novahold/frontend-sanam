import Bienestar from '@/components/home/Bienestar'
import Banner from '@/components/home/Banner'
import Industrias from '@/components/home/Industrias'
import React from 'react'
import '../../styles/home.css';
import NuestrosPilares from '@/components/home/NuestrosPilares';
import Patente from '@/components/home/Patente';
import Banderas from '@/components/home/Banderas';
import PresenciaBanderas from '@/components/home/PresenciaBanderas';


export default function Inicio() {
  return (
    <>
      {/* sección 1 */}
      <div className="px-5 lg:px-40 xl:px-40 banner-image">
        <Banner />
      </div>
      {/* sección 1 */}

      {/* sección 2 */}
      <div className="px-5 lg:px-40 xl:px-40">
        <Industrias />
      </div>
      {/* sección 2 */}

      {/* sección 3 */}
      <div className="px-5 lg:px-40 xl:px-40 bg-gradient-to-r from-indigo-500 to-sky-400 text-wrap text-white">
        <Bienestar />
      </div>
      {/* sección 3 */}

      {/* sección 4 */}
      <div className='px-5 lg:px-40 xl:px-40'>
        <NuestrosPilares />
      </div>
      {/* sección 4 */}

      {/* sección 5 */}
      <div className='px-5 lg:px-40 xl:px-40 bg-gradient-to-r from-lime-100 to-lime-500'>
        <Patente />
      </div>
      {/* sección 5 */}

      {/* sección 6 */}
      <div className='px-5 lg:px-40 xl:px-40'>
        <Banderas />
      </div>
      {/* sección 6 */}

      {/* sección 7 */}
      <div className=''>
        <PresenciaBanderas />
      </div>
      {/* sección 7 */}
    </>
  )
}

import React from 'react'
import { GiCoffeeMug, GiDrinkMe, GiDrinking, GiKetchup } from 'react-icons/gi'
import { SiJusteat } from 'react-icons/si'
import { SlEnergy } from 'react-icons/sl'

export default function ProductosBanner() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 justify-center items-center pb-10">
          <div className="flex flex-col items-center">
            <GiCoffeeMug size={140} className="rounded-full bg-[#663300] p-2 text-white" />
            <p className="text-center mt-2">Café alternativos y té</p>
          </div>

          <div className="flex flex-col items-center">
            <GiDrinking size={140} className="rounded-full bg-[#663300] p-2 text-white" />
            <p className="text-center mt-2">Bebidas Energizantes y de Bienestar</p>
          </div>

          <div className="flex flex-col items-center">
            <GiDrinkMe size={140} className="rounded-full bg-[#663300] p-2 text-white" />
            <p className="text-center mt-2">Hard Seitzers</p>
          </div>

          <div className="flex flex-col items-center">
            <SlEnergy size={140} className="rounded-full bg-[#663300] p-2 text-white" />
            <p className="text-center mt-2">Geles Energéticos y nutriceuticos</p>
          </div>

          <div className="flex flex-col items-center">
            <SiJusteat size={140} className="rounded-full bg-[#663300] p-2 text-white" />
            <p className="text-center mt-2">Snacks Saludables</p>
          </div>

          <div className="flex flex-col items-center">
            <GiKetchup size={140} className="rounded-full bg-[#663300] p-2 text-white" />
            <p className="text-center mt-2">Salsas y Aderezos</p>
          </div>
        </div>
  )
}

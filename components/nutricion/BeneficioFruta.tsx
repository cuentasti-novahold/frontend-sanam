import React from 'react'
import { FaCheck, FaCheckCircle } from 'react-icons/fa'

export default function BeneficioFruta() {
  return (
    <div className="w-full flex flex-col items-center text-center ">
          <h2 className="text-4xl font-bold text-center mb-8 pt-20 sanam-green">Beneficios del Jugo de Fruta de Café</h2>

          <div className="w-full flex m-5">
            <div className="w-1/3 flex text-center justify-center space-x-2">
              <FaCheckCircle />
              <p>Sabor rico y multidimensional</p>
            </div>
            <div className="w-1/3 flex text-center justify-center space-x-2">
              <FaCheckCircle />
              <p>Listo para bebidas y soluble en agua</p>
            </div>
            <div className="w-1/3 flex text-center justify-center space-x-2">
              <FaCheckCircle />
              <p>No perecedero</p>
            </div>
          </div>

          <div className="w-full flex m-5">
            <div className="w-2/4 flex text-center justify-center space-x-2">
              <FaCheckCircle />
              <p>Versátil en todas las categorías de productos</p>
            </div>

            <div className="w-2/4 flex text-center justify-center space-x-2">
              <FaCheckCircle />
              <p>65° Brix</p>
            </div>
          </div>

        </div>
  )
}

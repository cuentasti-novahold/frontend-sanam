import BeneficiosCafe from '@/components/a-quien-servimos/nutricion-humana/Beneficios-Cafe'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck, FaCheckCircle, FaCocktail, FaUtensils } from 'react-icons/fa'

export default function NutricionHumana() {
  return (
    <>
      {/* <div className="w-full flex p-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585155113372-6c1808141bf3')" }}> */}
      <div className="w-full lg:flex px-5 lg:px-40 bg-gray-200 py-12">
        <div className="w-full lg:w-2/3 py-10 pt-20">
          <p className='text-4xl font-bold sanam-green mb-10'>El concentrado de jugo de fruta de café es un ingrediente creado a partir de un proceso patentado que aprovecha la fruta del café.</p>
          <p className='text-4xl font-bold sanam-green mb-5'>Con su rico y multidimensional perfil de sabor, además de sus características favorables para la formulación; nuestro concentrado aporta beneficios de superfruta a su próximo producto desarrollado para satisfacer y deleitar a sus clientes.</p>
          
          <Link className='bg-green-900 hover:bg-green-700 rounded-lg text-white font-bold text-center text-3xl p-2 w-full' href={'/nuestros-productos/naox'}>
            Conoce nuestros productos
          </Link>
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <Image className='rounded-full' height={800} width={800} src={'https://via.placeholder.com/800x800/?cream-coffe'} alt='concetrado de jugo de fruta de café' />
        </div>
      </div>

      <div className="container mx-auto p-10">

        <div className="w-full flex gap-6 mb-5">

          <div className="w-full lg:w-2/3 flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-8 pt-20 sanam-green">Beneficios del Jugo de Fruta de Café</h2>

            <div className="w-full flex m-5">
              <div className="w-1/3 flex text-center justify-center space-x-2">
                <FaCheck />
                <p>Sabor rico y multidimensional</p>
              </div>
              <div className="w-1/3 flex text-center justify-center space-x-2">
                <FaCheck />
                <p>Listo para bebidas y soluble en agua</p>
              </div>
              <div className="w-1/3 flex text-center justify-center space-x-2">
                <FaCheck />
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

          <div className="w-full lg:w-1/3 flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
            {/* Primer beneficio */}
            <img src='https://via.placeholder.com/250x250/?vegan' alt="Beneficio 2" className="w-40 h-40 rounded-full" />
            <h3 className="mt-4 text-xl font-semibold">100% Natural - Vegano</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Segundo beneficio */}
          <BeneficiosCafe urlImg={'https://via.placeholder.com/250x250/?cloro'} title={'Fuerte relevante de antioxidantes'} subtitle={<><p className="mt-2 text-xs">(Ácido clorogénico, ácido cafeico y catequinas)</p></>} />
          {/* Tercer beneficio */}
          <BeneficiosCafe urlImg={'https://via.placeholder.com/250x250/?calorias'} title={'Bajo en calorías'} subtitle={''} />
          {/* Cuarto beneficio */}
          <BeneficiosCafe urlImg={'https://via.placeholder.com/250x250/?azucar'} title={'Azúcares simples'} subtitle={<><p className="mt-2 text-xs">(Glucosa y Fructosa)</p></>} />
          {/* Quinto beneficio */}
          <BeneficiosCafe urlImg={'https://via.placeholder.com/250x250/?vegetal'} title={'4% Proteína vegetal'} subtitle={''} />
          {/* Sexto beneficio */}
          <BeneficiosCafe urlImg={'https://via.placeholder.com/250x250/?carbohydrates'} title={'41% Carbohidratos'} subtitle={''} />
          {/* Séptimo beneficio */}
          <BeneficiosCafe urlImg={'https://via.placeholder.com/250x250/?natural-caffeine'} title={'Cafeína natural'} subtitle={''} />
        </div>
      </div>

      <div className="border-t-4 border-green-700 my-4 w-full"></div>

      <div className='flex justify-center items-center bg-[#9db70d]'>
        <Image height={717} width={1272} alt='' src={'/img/nutricion-humana/perfil-sensorial.png'} />
      </div>

      <div className="border-t-[150px] border-green-700 my-4 w-full"></div>

      <div className="w-full px-5 lg:px-40 py-12 bg-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 uppercase">Aplicaciones en productos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-6 md:px-12">
          {/* Bebidas */}
          <Link
            href="nutricion-humana/bebidas"
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <FaCocktail size={48} className="text-pink-500 mb-4" />
            <span className="text-xl font-bold text-gray-800 uppercase">Bebidas</span>
          </Link>

          {/* Snacks Saludables */}
          {/* <Link
            href="/snacks-saludables"
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <FaCookie size={48} className="text-green-500 mb-4" />
            <span className="text-xl font-bold text-gray-800">Snacks Saludables</span>
          </Link> */}

          {/* Panaderia Reposteria */}
          <Link
            href="nutricion-humana/alimentos"
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <FaUtensils size={48} className="text-brown-500 mb-4" />
            <span className="text-xl font-bold text-gray-800 uppercase">Alimentos</span>
          </Link>

          {/* Salsas y Aderezos */}
          {/* <Link
            href="/salsas-aderezos"
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out"
          >
            <FaPepperHot size={48} className="text-red-500 mb-4" />
            <span className="text-xl font-bold text-gray-800">Salsas y Aderezos</span>
          </Link> */}
        </div>
      </div>

    </>
  )
}

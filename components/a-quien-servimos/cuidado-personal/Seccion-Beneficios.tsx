import React from 'react'
import CardBeneficio from './Card-Beneficio';
import { FaBoxOpen, FaCheckCircle, FaGlobe, FaHeartbeat, FaLeaf, FaSmile, FaStar, FaTencentWeibo, FaThermometerFull, FaUtensils, FaWater } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa6';
import Link from 'next/link';

export default function SeccionBeneficios() {
  const benefits = [
    { icon: <FaLeaf />, title: 'Fuente sostenible de la fruta del café', description: '100% Vegano & Libre de GMO\'s, y alergenos conocidos', iconColor: 'text-green-500' },
    { icon: <FaSun />, title: 'El mejor en su clase, como factor de protección', description: 'Supera a los principales antioxidantes para el cuidado de la piel', iconColor: 'text-yellow-500' },
    { icon: <FaCheckCircle />, title: 'No testeado en animales', description: 'Cumple con la Leaping Bunny', iconColor: 'text-blue-500' },
    { icon: <FaHeartbeat />, title: 'Altamente Funcional', description: 'En fórmulas a base de agua y aceite', iconColor: 'text-red-500' },
    { icon: <FaTencentWeibo />, title: 'Tecnología Patentada', description: 'Primero en su tipo, Concentrado Triple Antioxidante', iconColor: 'text-yellow-500' },
    { icon: <FaGlobe />, title: 'INCI', description: 'Coffe Arabica Fruit Extract', iconColor: 'text-green-600' },
    { icon: <FaSmile />, title: 'Cumple Globalmente', description: 'Y está certificado Kosher', iconColor: 'text-pink-500' },
  ];


  const attributs = [
    { icon: <FaLeaf />, text: 'Sabor rico y multidimensional', iconColor: 'text-green-500' },
    { icon: <FaWater />, text: 'Listo para bebidas y soluble en agua', iconColor: 'text-blue-500' },
    { icon: <FaBoxOpen />, text: 'No perecedero', iconColor: 'text-brown-500' },
    { icon: <FaUtensils />, text: 'Versátil en todas las categorías de productos', iconColor: 'text-orange-500' },
    { icon: <FaThermometerFull />, text: '65% Brix', iconColor: 'text-red-500' },
  ];

  return (
    <div className="w-full py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Beneficios del Jugo de Fruta de Café</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {benefits.map((benefit, index) => (
          <CardBeneficio
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            iconColor={benefit.iconColor}
          />
        ))}

        {/* Mejora la sección de dos columnas */}
        <div className="col-span-2 flex flex-col p-8 bg-gray-100 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">Mantiene el 100% de la integridad biológica de la Fruta</h3> {/* Título destacado */}
          <p className="text-gray-600">Un Proceso Limpio y sin solventes: nada se agrega, ni se quita</p>
          <Link className='sanam-green hover:bg-gray-300 rounded-lg text-white font-bold text-center text-2xl p-2 mt-2 w-full' href={'/nuestros-productos/naox-derma'}>
            Conoce nuestros productos
          </Link>
        </div>
      </div>
    </div>
  );
};
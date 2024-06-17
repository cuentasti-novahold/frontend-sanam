import React from 'react';
import { FaLeaf, FaWater, FaBoxOpen, FaUtensils, FaThermometerFull } from 'react-icons/fa';

export default function ListaBeneficios() {
  const benefits = [
    { icon: <FaLeaf />, text: 'Sabor rico y multidimensional', iconColor: 'text-green-500' },
    { icon: <FaWater />, text: 'Listo para bebidas y soluble en agua', iconColor: 'text-blue-500' },
    { icon: <FaBoxOpen />, text: 'No perecedero', iconColor: 'text-brown-500' },
    { icon: <FaUtensils />, text: 'Versátil en todas las categorías de productos', iconColor: 'text-orange-500' },
    { icon: <FaThermometerFull />, text: '65% Brix', iconColor: 'text-red-500' },
  ];

  return (
    <div className="col-span-2 flex flex-col p-8 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">Principales Beneficios</h3> {/* Título destacado */}
      <ul className="list-none list-inside text-lg text-gray-700 text-left">
        {benefits.map((benefit, index) => (
          <li key={index}>
            {React.cloneElement(benefit.icon, { className: `inline ${benefit.iconColor} mr-2` })}
            {benefit.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

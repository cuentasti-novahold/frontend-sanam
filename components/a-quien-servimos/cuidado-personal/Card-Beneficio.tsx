import React, { ReactElement, ReactNode } from 'react';

interface cardBeneficioProps {
  title: string,
  description: string,
  iconColor: string,
  icon: ReactElement,
}

export default function CardBeneficio({ icon, title = '', description = '', iconColor = '' }: cardBeneficioProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg">
      {React.cloneElement(icon, { size: 48, className: `${iconColor} mb-4` })} {/* Icono */}
      <h3 className="text-xl font-bold text-gray-800">{title}</h3> {/* Título */}
      <p className="text-gray-600">{description}</p> {/* Descripción */}
    </div>
  );
}
import { GiCorn, GiAvocado, GiSugarCane, GiLemon, GiBeanstalk, GiRiceCooker, GiBananaBunch, GiGrapes, GiTomato } from 'react-icons/gi';
import { FaCoffee } from 'react-icons/fa';
import React from 'react';
import { LuSalad } from 'react-icons/lu';

interface CardAplicacionesExitosasProps {
    iconType: string;
    name: string;
    subtitle: React.ReactNode;
  }

export default function CardAplicacionesExitosas({ iconType, name, subtitle }:CardAplicacionesExitosasProps) {
    // Determinar el icono basado en el tipo de semilla
    const renderIcon = () => {
        switch(iconType) {
            case 'frijol':
                return <GiBeanstalk size={80} className="text-green-600" />;
            case 'arroz':
                return <GiRiceCooker size={80} className="text-green-600" />;
            case 'maíz':
                return <GiCorn size={80} className="text-green-600" />;
            case 'aguacate':
                return <GiAvocado size={80} className="text-green-600" />;
            case 'café':
                return <FaCoffee size={80} className="text-green-600" />;
            case 'cacao':
                return <GiBeanstalk size={80} className="text-green-600" />;
            case 'caña':
                return <GiSugarCane size={80} className="text-green-600" />;
            case 'limón':
                return <GiLemon size={80} className="text-green-600" />;
            case 'Lechuga':
                return <LuSalad  size={80} className="text-green-600" />;
            case 'Tomate':
                return <GiTomato size={80} className="text-green-600" />;
            case 'Uva':
                return <GiGrapes size={80} className="text-green-600" />;
            case 'Plátano/Banano':
                return <GiBananaBunch  size={80} className="text-green-600" />;
            default:
                return null; // Puedes poner un icono por defecto si quieres
        }
    };

    return (
        <div className="w-full lg:w-1/4 lg:flex lg:items-center">
            <div className="lg:w-1/3 flex justify-center">
                {renderIcon()}
            </div>
            <div className="lg:w-2/3 lg:flex lg:flex-col lg:justify-start lg:items-start text-center lg:pl-5 sanam-gray">
                <h3 className="font-bold text-2xl">{name}</h3>
                <div className='lg:text-start'>{subtitle}</div>
            </div>
        </div>
    );
}

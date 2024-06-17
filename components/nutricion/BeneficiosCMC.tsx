import React from 'react'
import { FaPersonCircleCheck } from 'react-icons/fa6';
import { GiAcidTube, GiCoffeeBeans, GiLindenLeaf, GiPotato, GiSproutDisc, GiSugarCane } from 'react-icons/gi';

interface BeneficiosCafeProps {
    iconName: string;
    title: string;
    subtitle: React.ReactNode;
}

export default function BeneficiosCMC({ iconName, title, subtitle }: BeneficiosCafeProps) {

    const renderIcon = () => {
        switch (iconName) {
            case 'vegano':
                return <GiLindenLeaf size={90} className="rounded-full bg-green-900 p-2 m-5 text-white" />;
            case 'antioxidantes':
                return <GiAcidTube size={90} className="rounded-full bg-green-900 p-2 m-5 text-white" />;
            case 'calorías':
                return <GiSproutDisc size={90} className="rounded-full bg-green-900 p-2 m-5 text-white" />;
            case 'azúcares':
                return <GiSugarCane size={90} className="rounded-full bg-green-900 p-2 m-5 text-white" />;
            case 'vegetal':
                return <FaPersonCircleCheck size={90} className="rounded-full bg-green-900 p-2 m-5 text-white" />;
            case 'carbohidratos':
                return <GiPotato size={90} className="rounded-full bg-green-900 p-2 m-5 text-white" />;
            case 'cafeína':
                return <GiCoffeeBeans size={90} className="rounded-full bg-green-900 p-2 m-5 text-white" />;

            default:
                return null; // Puedes poner un icono por defecto si quieres
        }
    };

    return (
        <div className="flex flex-col items-center">
            {renderIcon()}
            <h3 className="mt-4 text-xl font-semibold">{title} {subtitle}</h3>

        </div>
    )
}
import React from 'react'
import { GiLindenLeaf } from 'react-icons/gi';

interface BeneficiosCafeProps {
    urlImg: string;
    title: string;
    subtitle: React.ReactNode;
}

export default function BeneficiosCafe({ urlImg, title, subtitle }: BeneficiosCafeProps) {
    return (
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
            <img src={urlImg} alt="Beneficio 2" className="w-40 h-40 rounded-full" />
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            {subtitle}
        </div>
    )
}
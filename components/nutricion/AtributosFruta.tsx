import React from 'react'
import BeneficiosCMC from './BeneficiosCMC'

export default function AtributosFruta() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-10">
            {/* Primer beneficio */}
            <BeneficiosCMC iconName={'vegano'} title={'100% Natural - Vegano'} subtitle={''} />
            {/* Segundo beneficio */}
            <BeneficiosCMC iconName={'antioxidantes'} title={'Fuerte relevante de antioxidantes'} subtitle={<><p className="mt-2 text-xs">(Ácido clorogénico, ácido cafeico y catequinas)</p></>} />
            {/* Tercer beneficio */}
            <BeneficiosCMC iconName={'calorías'} title={'Bajo en calorías'} subtitle={''} />
            {/* Cuarto beneficio */}
            <BeneficiosCMC iconName={'azúcares'} title={'Azúcares simples'} subtitle={<><p className="mt-2 text-xs">(Glucosa y Fructosa)</p></>} />
            {/* Quinto beneficio */}
            <BeneficiosCMC iconName={'vegetal'} title={'4% Proteína vegetal'} subtitle={''} />
            {/* Sexto beneficio */}
            <BeneficiosCMC iconName={'carbohidratos'} title={'41% Carbohidratos'} subtitle={''} />
            {/* Séptimo beneficio */}
            <BeneficiosCMC iconName={'cafeína'} title={'Cafeína natural'} subtitle={''} />
        </div>
    )
}

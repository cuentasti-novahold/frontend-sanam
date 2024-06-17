import React from 'react'
import { FaPlus } from 'react-icons/fa';

export default function SeccionThree() {

    const items = [
        'Origen Natural vs Fuentes Químicas.',
        'Disminuimos huella de carbono.',
        'Prevenimos la erosión de los suelos.',
        'Mitigamos contaminación de fuentes hídricas.',
        'Aprovechamos integralmente el fruto del café.',
        'Nutrimos los suelos (Aumentamos pH).',
        'Alta relación beneficio - costo.'
    ];

    return (
        <>
            <div className='lg:p-16 p-5'>

                <div className="w-full flex justify-center">
                    <p className="text-3xl lg:text-5xl p-5 font-bold text-green-800 uppercase">Nuestras Ventajas</p>
                </div>

                <div className="w-full lg:flex">
                <div className='lg:w-1/2 lg:flex lg:flex-col lg:p-10'>
                    {/* <h1 className='text-6xl sanam-green font-bold pb-10'>Terax vs Otros Productos</h1> */}

                    <div className='space-y-4 '> {/* Alineación vertical con espacio entre elementos */}
                        {items.map((item, index) => (
                            <div key={index} className='flex items-center'> {/* Alinear horizontalmente */}
                                <FaPlus className='sanam-green mx-3 text-2xl' /> {/* Ícono */}
                                <p className='sanam-gray font-bold text-2xl'>{item}</p> {/* Texto */}
                            </div>
                        ))}
                    </div>

                </div>

                <div className='lg:w-1/2 bg-[#004a22] px-16 py-5 lg:flex flex-col justify-center rounded-3xl'>
                    <h1 className='text-3xl lg:text-6xl text-yellow-500'>Por cada tonelada de Terax</h1>
                    <p className='lg:text-3xl text-white'>aplicado, se disminuye la contaminación equivalente a</p>
                    <h1 className='text-3xl lg:text-6xl text-yellow-500'>450.000 personas</h1>
                </div>
                </div>

            </div>
        </>
    )
}

import Image from 'next/image'
import React from 'react'
import NavigationSanam from '@/components/shared/NavigationSanam'
import { useTranslations } from 'next-intl'

export default function BannerTop() {
    const t = useTranslations();
    return (
        <div className="w-full flex px-10">
            <div className="w-2/3">
                <div className="w-full bg-[#cbdcbd] h-3/4 p-14 rounded-tl-3xl flex flex-col justify-center">
                    <h1 className="text-4xl">
                        {/* Es un alimento Funcional Antioxidante Naox proviene del concentrado natural de la fruta del café, rico en antioxidantes naturales que ayudan a combatir la oxidación de nuestro cuerpo 100% Ecosostenible. */}
                        {t('np-food-naox')}
                    </h1>
                </div>
                <NavigationSanam openNew={true} route='https://naoxcolombia.com/' styleDiv='absolute bg-teal-300 p-4 rounded-xl border border-slate-400 hover:border-slate-200 shadow-xl top-1/5 left-1/2 -transform-translate-x-1/5 -translate-y-1/2' styleSpan='text-2xl text-slate-800' title={t('naox-store')} />
                <div className="w-full bg-[#7e8b6d] h-1/4 p-14 rounded-bl-3xl flex flex-col justify-center">
                    <h1 className=" text-3xl font-bold">
                        {/* Ideal para sustituir bebidas azucaradas. */}
                        {t('replace-drink-sugar')}
                    </h1>
                </div>
            </div>
            <div className="w-1/3">
                <Image src={'/img/nuestros-productos/banner-top.jpeg'} height={600} width={700} alt='naox' className='rounded-tr-3xl rounded-br-3xl' />
            </div>
        </div>
    )
}
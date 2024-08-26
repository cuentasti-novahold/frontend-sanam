import Image from 'next/image'
import React from 'react'
import { useTranslations } from "next-intl";

export default function Patente() {
    const t = useTranslations();
    return (
        <div className='w-full py-10'>
            <h1 className="w-full text-6xl p-5 font-bold">{t("patent")}</h1>
            <div className="w-full flex">
                <div className="w-full lg:w-1/2">
                    <Image src={'/img/inicio/patente-inicio.jpg'} width={800} height={540} alt='planta de cafe' />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <h1 className="text-5xl font-bold p-10">
                        {t("home-patent")}
                    </h1>
                </div>
            </div>
        </div>
    )
}
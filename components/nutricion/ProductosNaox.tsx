'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { use } from 'react'
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function ProductosNaox() {
    const t = useTranslations();
    const pathname = usePathname();
    const locale = pathname.split("/")[1]; // Extrae el idioma de la ruta
    return (
        <div className='bg-[#05825d] flex py-8'>

            <div className="w-1/2 justify-center items-center flex">
                <Image src={'/img/nutricion-humana/producto-naox-sin-fondo.png'} alt='imagen producto naox' height={400} width={600} />
            </div>
            <div className="w-1/2 p-10 justify-center items-center flex">
                <Link href={`/${locale}/nutricion/productos`} className='rounded-3xl bg-[#4aa641] hover:bg-[#398032] hover:border-2 hover:border-white p-3 text-white text-4xl cursor-pointer font-bold'>{t('out-more')}</Link>
            </div>
        </div>
    )
}
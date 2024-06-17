import Image from 'next/image'
import React from 'react'

export default function ConcentradoBanner() {
    return (
        <>
            {/* <Image width={1920} height={500} src={'/img/nutricion-humana/imagen-banner.jpeg'} alt='imagen semilla' className='w-[600px]' /> */}
            {/* <Image width={1200} height={600} src={'https://placehold.co/1200x600/000000/FFFFFF.png'} alt='imagen semilla' className='' /> */}
            <Image width={1200} height={400} src={'/img/nutricion-humana/imagen-banner.jpeg'} alt='imagen semilla' className='' />
            {/* <Image width={1200} height={400} src={'https://cdn.pixabay.com/photo/2020/03/10/20/45/lemon-4920227_1280.jpg'} alt='imagen semilla' className='' /> */}
            <p className='absolute right-20 bottom-52 bg-[#663300] rounded-full p-5 text-white font-bold'>CONCENTRADO FRUTA DEL CAFE EN LA INDUSTRIA DE NUTRICION</p>
            <p className='text-xl p-10'>El concentrado de fruta de café, no solo aporta un sabor exquisito, sino que también ofrece una serie de beneficios nutricionales que lo hacen indispensable en la formulación de productos saludables y funcionales.</p>
        </>
    )
}

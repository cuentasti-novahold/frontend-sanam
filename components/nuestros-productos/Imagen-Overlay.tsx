import Image from 'next/image'
import React from 'react'

interface imagenOverlayProps {
  src: string,
  alt: string,
  textOverlay: string,
  description: string,
}

export default function ImagenOverlay({ src, alt, textOverlay, description }:imagenOverlayProps) {
  return (
    <div className="relative w-full lg:w-1/3 lg:p-10"> {/* Contenedor relativo */}
      <Image
        src={src}
        alt={alt}
        height={600}
        width={600}
        className="object-cover"
      />

      {/* Texto sobre la imagen */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <p className="text-white font-bold text-xl bg-black bg-opacity-50 px-4 py-2 rounded">
          {textOverlay}
        </p>
      </div>

      {/* Descripción debajo de la imagen */}
      <p className="sanam-gray mt-4 text-2xl">
        {description}
      </p>
    </div>
  )
}

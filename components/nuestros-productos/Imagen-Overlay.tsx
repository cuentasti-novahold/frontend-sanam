import Image from "next/image";
import React from "react";

interface imagenOverlayProps {
  src: string;
  alt: string;
  textOverlay: string;
  description: string;
}

export default function ImagenOverlay({
  src,
  alt,
  textOverlay,
  description,
}: imagenOverlayProps) {
  return (
    <div className="relative w-full lg:w-1/3 lg:p-10">
      {/* Contenedor relativo */}
      <Image
        src={src}
        alt={alt}
        height={600}
        width={600}
        className="object-cover"
      />

      <p className="mt-5 font-bold text-3xl">{textOverlay}</p>
      <p className="text-lg">{description}</p>
    </div>
  );
}

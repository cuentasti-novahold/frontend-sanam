import React from 'react'
import ImagenOverlay from './Imagen-Overlay'
import { ICardContent } from '@/types/CardContent';


interface AporteMundoProps {
    cardContent: ICardContent[];
  }

export default function AporteMundo({ cardContent }: AporteMundoProps) {

    return (
        <div className="p-10">
            <h1 className="text-6xl font-bold sanam-green px-16 py-4 ">Nuestro aporte al mundo</h1>
            <div className="lg:w-full flex gap-2">
                {
                    cardContent.map((card, index) => (
                        <ImagenOverlay
                            key={index}
                            src={card.imgUrl}
                            alt={card.alt}
                            textOverlay={card.textOverlay}
                            description={card.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}

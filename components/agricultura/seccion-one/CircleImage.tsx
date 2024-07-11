import { ICircleImage } from '@/types/CircleImage'
import Image from 'next/image'
import React from 'react'

export default function CircleImage({ imageUrl, description }: ICircleImage) {
    return (
        <div className="lg:w-1/4 py-8 flex flex-col items-center">
            <Image width={250} height={250} src={imageUrl} alt='imagen semilla' className='object-contain rounded-full' />
            <p className="font-bold ">{description}</p>
        </div>
    )
}

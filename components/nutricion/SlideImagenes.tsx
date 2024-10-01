"use client"
import React, { useState } from 'react';
import { ISlideContent } from '@/types/SlideContent';

interface SlideContentProps {
    slideContent: ISlideContent[];
}


export default function SlideImagenes({ slideContent }: SlideContentProps) {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative flex flex-row justify-center items-center overflow-hidden h-screen font-roboto transition duration-300">
            <div className="flex flex-row items-stretch overflow-hidden min-w-[100px] lg:min-w-[500px] max-w-full lg:max-w-[1350px] w-[calc(100%-100px)] h-5/6 gap-1 lg:gap-2 lg:p-10">
                {slideContent.map((slide, index) => (
                    <div
                        key={index}
                        className={` ${index === activeIndex ? 'active max-w-[200px] lg:max-w-[900px] rounded-3xl transform scale-100 grow-[10000]' : 'grow-[1] rounded-lg'} bg-cover bg-center cursor-pointer transition-all duration-200 `}
                        style={{ backgroundImage: slide.background }}
                        onClick={() => setActiveIndex(index)}
                    >
                        {index === activeIndex && (
                            <div className={`flex absolute right-0 h-[90px] transition-all duration-500 bg-black bg-opacity-50 p-2 rounded-b-3xl ${index === activeIndex ? 'bottom-0 left-0' : 'bottom-2 left-2'}`}>

                                {slide.icon && (

                                    <div className=' flex flex-row justify-center items-center w-[60px] h-[60px] rounded-full bg-white mx-2 p-1' style={{ color: slide.color }}>
                                        {slide.icon}
                                    </div>
                                )}
                                <div className="flex relative bottom-3 p-2 rounded-lg h-[84px] justify-center items-center">
                                    <div className="text-white font-bold ">
                                        <div className="overflow-ellipsis overflow-hidden">{slide.title}</div>
                                        <div className="overflow-ellipsis overflow-hidden">{slide.subtitle}</div>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

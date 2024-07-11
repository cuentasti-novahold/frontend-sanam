'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '@/styles/cuidado-personal.css'

export default function SectionThree() {
    return (
        <div className='body-carrusel flex'>
            <Swiper className='text-center' effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} initialSlide={1} pagination={true} modules={[EffectCoverflow, Pagination]}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    
                }}
            >
                <SwiperSlide className='rounded-lg p-5  items-center justify-center '>
                    <div className="font-bold text-xl mb-2">ANTIOXIDANTE POTENCIAL</div>
                    <div className="font-bold text-xl mb-2">80-90%</div>
                    <p className="">
                        Capacidad antioxidante en comparación con los arándanos, las granadas y las uvas
                    </p>
                </SwiperSlide>
                <SwiperSlide className='rounded-lg p-5  items-center justify-center'>
                    <div className="font-bold text-xl mb-2">5 Veces más</div>
                    <div className="font-bold text-xl mb-2">Polifenoles (en 100 gr)</div>
                    <p className="">
                        Comparados con el té verde y las uvas
                    </p>
                </SwiperSlide>
                <SwiperSlide className='rounded-lg p-5  items-center justify-center'>
                    <div className="font-bold text-xl mb-2">Antioxidante Potencial</div>
                    <div className="font-bold text-xl mb-2">6.000 + ORAC</div>
                    <p className="">
                        (en 100 gr)
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

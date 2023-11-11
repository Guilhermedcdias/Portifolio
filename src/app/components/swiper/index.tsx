'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Tipagem para as props do seu carrossel, se necessário
type SwiperCoverflowProps = {
    slides: React.ReactNode[];
};

const SwiperCoverflow: React.FC<SwiperCoverflowProps> = ({ slides }) => {
    const initialSlideIndex = Math.floor((slides.length - 1) / 2);
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            initialSlide={initialSlideIndex}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    {slide}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperCoverflow;

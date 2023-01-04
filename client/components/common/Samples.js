import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y ,Autoplay  } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


const Samples = () => {
    return (
        <>
        <section  className="mx-4 md:mx-5 lg:mx-6 mb-16">
            <h3 className="h-20 text-center font-bold text-3xl relative before:content{' '} before:absolute before:h-1.5 before:w-48 before:bg-[#4F66E8] before:left-0 before:right-5 before:mx-auto before:bottom-[22px]
                    after:content{''} after:mx-auto after:left-[30px] after:right-0 after:h-1.5 after:w-48 after:bg-[#8993FF] after:absolute after:bottom-[10px]
                    ">
                    نمونه کارها
                </h3>
            <Swiper
                className="owl-carousel owl-theme mt-5"
                modules={[Navigation,Autoplay, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                // navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                
                >
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/Dribbble shot HD - 1 2.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">وبسایت کافه ایران</p> 
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/fastfood 2.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">وبسایت فست برگر تنوری</p>
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/video 1.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">پنل کاربری ویدیو رایان</p>
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/Dribbble shot HD - 1 2.png" className="w-80 mb-4" alt="shot" /> 
                    <p className="text-base text-center">وبسایت کافه ایران</p>
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/fastfood 2.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">وبسایت فست برگر تنوری</p>
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md '>
                    <img src="../jpg/video 1.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">پنل کاربری ویدیو رایان</p>
                </SwiperSlide>
                
                
            </Swiper>
        </section>
           

        </>
    );
};

export default Samples;

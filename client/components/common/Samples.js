import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y ,Autoplay  } from 'swiper';

import { useRouter } from 'next/router';
import t from './../../lib/translate';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


const Samples = () => {
    const router = useRouter();
    return (
        <>
        <section  className="mx-4 md:mx-5 lg:mx-6 mb-16">
            <h3 className="h-20 text-center font-bold text-3xl relative before:content{' '} before:absolute before:h-1.5 before:w-48 before:bg-[#4F66E8] before:left-0 before:right-5 before:mx-auto before:bottom-[22px]
                    after:content{''} after:mx-auto after:left-[30px] after:right-0 after:h-1.5 after:w-48 after:bg-[#8993FF] after:absolute after:bottom-[10px]
                    ">
                     {t(router.query?.locale, "samples")}
                </h3>
                
            <Swiper
                className=" mt-5"
                modules={[Navigation,Autoplay, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                // navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints= {{
                    // when window width is >= 320px
                    240: {
                        slidesPerView: 1,
                        spaceBetween: 30
                      },
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 30
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 2,
                      spaceBetween: 50
                    },
                    // when window width is >= 640px
                    720: {
                      slidesPerView: 3,
                      spaceBetween: 60
                    },
                    10284: {
                        slidesPerView: 4,
                        spaceBetween: 70
                      }
                    }}
                >
                <SwiperSlide dir={router.query?.locale == 'fa' ? 'rtl' : 'ltr'} className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/Dribbble shot HD - 1 2.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">
                    {t(router.query?.locale, "cafeiran")}
                        
                        </p> 
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/fastfood 2.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">
                    {t(router.query?.locale, "berger")}
                    
                        </p>
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/video 1.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">
                    {t(router.query?.locale, "videorayan")}
                        
                        </p>
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/Dribbble shot HD - 1 2.png" className="w-80 mb-4" alt="shot" /> 
                    <p className="text-base text-center">
                    {t(router.query?.locale, "cafeiran")}
                      </p>
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/fastfood 2.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">
                    {t(router.query?.locale, "berger")}
                        </p>
                </SwiperSlide>
                <SwiperSlide className='item bg-white p-5 font-bold rounded-md '>
                    <img src="../jpg/video 1.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">
                        {t(router.query?.locale, "videorayan")}
                    </p>
                </SwiperSlide>
                
                
            </Swiper>
        </section>
           

        </>
    );
};

export default Samples;

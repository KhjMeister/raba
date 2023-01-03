import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Samples = () => {
    return (
        <>
            <section  className="mx-4 md:mx-5 lg:mx-6 mb-16">
            <h3 className="h-20 text-center font-bold text-3xl relative before:content{' '} before:absolute before:h-1.5 before:w-48 before:bg-[#4F66E8] before:left-0 before:right-5 before:mx-auto before:bottom-[22px]
                after:content{''} after:mx-auto after:left-[30px] after:right-0 after:h-1.5 after:w-48 after:bg-[#8993FF] after:absolute after:bottom-[10px]
                ">
                نمونه کارها
            </h3>
             <Carousel  plugins={['rtl', 'arrows']}  className="owl-carousel owl-theme mt-5">
                <div className='item bg-white p-5 font-bold rounded-md'>
                    <img src="../jpg/Dribbble shot HD - 1 2.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">وبسایت کافه ایران</p> 
                </div>
                <div className="item bg-white p-5 font-bold rounded-md">
                    <img src="../jpg/fastfood 2.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">وبسایت فست برگر تنوری</p>
                </div>
                <div className="item bg-white p-5 font-bold rounded-md">
                    <img src="../jpg/video 1.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">پنل کاربری ویدیو رایان</p>
                </div>
                <div className="item bg-white p-5 font-bold rounded-md">
                    <img src="../jpg/Dribbble shot HD - 1 2.png" className="w-80 mb-4" alt="shot" /> 
                    <p className="text-base text-center">وبسایت کافه ایران</p>
                </div>
                <div className="item bg-white p-5 font-bold rounded-md">
                    <img src="../jpg/fastfood 2.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">وبسایت فست برگر تنوری</p>
                </div>
                <div className="item bg-white p-5 font-bold rounded-md">
                    <img src="../jpg/video 1.png" className="w-80 mb-4" alt="shot" />
                    <p className="text-base text-center">پنل کاربری ویدیو رایان</p>
                </div>
            </Carousel>
            
        </section>
        </>
    );
};

export default Samples;

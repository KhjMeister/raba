import { useRouter } from 'next/router';
import React from "react";
import t from './../../lib/translate';
import Link from 'next/link';

const Hero = () => {
   
    const router = useRouter();
  

  return (
    <>
    <section>
        <div className="flex grid sm:grid-cols-2 grid-cols-1 mt-10 md:mt-12 lg:mt-16 mx-4">
            <div className="align-center self-center order-last sm:order-first">
                <h3
                    className="text-2xl sm:text-lg md:text-2xl lg:text-4xl font-bold leading-relaxed md:leading-relaxed lg:leading-relaxed">
                    {t(router.query?.locale, "h3_hero")}
                </h3>
                <p
                    className="leading-8 mt-6 text-sm sm:text-xs md:text-sm text-[#464646] lg:text-base sm:leading-6 md:leading-7 lg:leading-9">
                    {t(router.query?.locale, "p_hero")}
                </p>
                <a
                    className="border border-2 rounded-md border-[#4F66E8] inline-block text-center leading-7 text-sm cursor-pointer transition-all font-semibold px-6 py-3 text-[#4F66E8] mt-6 sm:text-xs sm:px-4 sm:py-3 lg:text-sm lg:px-6 hover:bg-[#4F66E8] hover:text-white">
                        {t(router.query?.locale, "project_request")}
                    </a>
            </div>
            <div className="order-first mb-7" dir="ltr">
                <img src="../jpg/jpgheader.png" className="w-4/4 sm:w-5/6 md:w-4/4 lg:w-3/4" alt="header_img" />
            </div>
        </div>
    </section>

    </>
  );
};

export default Hero;
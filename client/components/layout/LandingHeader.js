import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { toast }  from 'react-toastify';
import axios from 'axios';

const LandingHeader = () => {
   
    const router = useRouter();
  

  return (
    <>
      <header className="min-w-min sm:max-w-7xl mx-auto">
        <nav className="px-4 sm:px-4">
            <div className="bg-white mt-4 sm:mt-5 py-3 px-4 sm:px-6 rounded-md flex flex-wrap items-center relative">
                <a className="flex flex-1 sm:flex-none cursor-pointer h-12" href="index.html"><img src="../jpg/raba2.png"
                        className="h-12 inline-block" alt="RABALOGO" /></a>
                <button className="inline-flex tw-items-center ml-3 sm:hidden lg:hidden" onclick="myfunction()">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7H19" stroke="#303030" stroke-linecap="round" />
                        <path d="M5 12H15" stroke="#303030" stroke-linecap="round" />
                        <path d="M5 17H11" stroke="#303030" stroke-linecap="round" />
                    </svg>
                </button>
                <div className="hidden sm:flex sm:flex-1">
                    <ul className="sm:flex flex-1 mr-10 sm:mr-7 md:mr-16 my-auto ">
                        <li className="px-4 sm:px-3 md:px-6 text-sm active:text-[#FA7169]"><a href="index.html">خانه</a></li>
                        <li className="px-4 sm:px-3 md:px-6 text-sm cursor-pointer transition-colorsn hover:text-[#4F66E8]">
                            <a href="aboutus.html">نمونه کارها</a></li>
                        <li className="px-4 sm:px-3 md:px-6 text-sm cursor-pointer transition-colorsn hover:text-[#4F66E8]">
                            <a href="aboutus.html">درباره ما</a>
                        </li>
                        <li className="px-4 sm:px-3 md:px-6 text-sm cursor-pointer transition-colorsn hover:text-[#4F66E8]">
                            <a href="contactus.html">ارتباط با ما</a>
                        </li>
                    </ul>
                    <a className="px-5 py-3.5 rounded-md text-sm text-white bg-[#4F66E8] flex flex-wrap transition-all cursor-pointer hover:bg-[#8993FF]"
                        id="login">پورتال کاربران</a>
                </div>
            </div>
        </nav>
        <section>
            <div className="flex grid sm:grid-cols-2 grid-cols-1 mt-10 md:mt-12 lg:mt-16 mx-4">
                <div className="align-center self-center order-last sm:order-first">
                    <h3
                        className="text-2xl sm:text-lg md:text-2xl lg:text-4xl font-bold leading-relaxed md:leading-relaxed lg:leading-relaxed">
                        هر کسب وکاری نیازمند به یه وب سایت
                        و اپلیکیشن می باشد
                    </h3>
                    <p
                        className="leading-8 mt-6 text-sm sm:text-xs md:text-sm text-[#464646] lg:text-base sm:leading-6 md:leading-7 lg:leading-9">
                        برای اینکه کسب وکار خود را به دیگران معرفی کنید نیازمند به سایت
                        می باشد.
                        <br />
                        اگر که یک فروشگاه دارید بهترین راه برای فروش محصولاتو یا خدمات
                        خود به سایت واپلیکیشن می باشید
                    </p>
                    <a
                        className="border border-2 rounded-md border-[#4F66E8] inline-block text-center leading-7 text-sm cursor-pointer transition-all font-semibold px-6 py-3 text-[#4F66E8] mt-6 sm:text-xs sm:px-4 sm:py-3 lg:text-sm lg:px-6 hover:bg-[#4F66E8] hover:text-white">درخواست
                        پروژه</a>
                </div>
                <div className="order-first mb-7" dir="ltr">
                    <img src="../jpg/jpgheader.png" className="w-4/4 sm:w-5/6 md:w-4/4 lg:w-3/4" alt="header_img" />
                </div>
            </div>
        </section>
    </header>
    </>
  );
};

export default LandingHeader;
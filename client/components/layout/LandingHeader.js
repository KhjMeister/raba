import { useRouter } from 'next/router';
import React, {  useState } from "react";

import Link from 'next/link';


const LandingHeader = () => {
    const [mobileNavbar, setMobileNavbar] = useState(false);
    
    const router = useRouter();


  return (
    <>
      <header className="min-w-min sm:max-w-7xl mx-auto">
        <nav className="px-4 sm:px-4">
            <div className="bg-white mt-4 sm:mt-5 py-3 px-4 sm:px-6 rounded-md flex flex-wrap items-center relative">
                <a className="flex flex-1 sm:flex-none cursor-pointer h-12" href="index.html"><img src="../jpg/raba2.png"
                        className="h-12 inline-block" alt="RABALOGO" /></a>
                <button className="inline-flex tw-items-center ml-3 sm:hidden lg:hidden" onClick={()=>setMobileNavbar(!mobileNavbar)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7H19" stroke="#303030" strokeLinecap="round" />
                        <path d="M5 12H15" stroke="#303030" strokeLinecap="round" />
                        <path d="M5 17H11" stroke="#303030" strokeLinecap="round" />
                    </svg>
                </button>
                {!mobileNavbar ? (
                <div className="hidden sm:flex sm:flex-1">
                    <ul className="sm:flex flex-1 mr-10 sm:mr-7 md:mr-16 my-auto ">
                        <li className="px-4 sm:px-3 md:px-6 text-sm active:text-[#FA7169]"><Link href="/" className={router.pathname == "/" ? "text-[#4F66E8]" : ""}> خانه </Link></li>
                        <li className="px-4 sm:px-3 md:px-6 text-sm cursor-pointer transition-colorsn hover:text-[#4F66E8]">
                            <Link href="/" className={router.pathname == "/nemone" ? "text-[#4F66E8]" : ""}> نمونه کارها </Link></li>
                        <li className="px-4 sm:px-3 md:px-6 text-sm cursor-pointer transition-colorsn hover:text-[#4F66E8]">
                            <Link href="/aboutus" className={router.pathname == "/aboutus" ? "text-[#4F66E8]" : ""}> درباره ما </Link>
                        </li>
                        <li className="px-4 sm:px-3 md:px-6 text-sm cursor-pointer transition-colorsn hover:text-[#4F66E8]">
                            <Link href="/contactus" className={router.pathname == "/contactus" ? "text-[#4F66E8]" : ""}> ارتباط با ما  </Link>
                        </li>
                    </ul>
                    <a className="px-5 py-3.5 rounded-md text-sm text-white bg-[#4F66E8] flex flex-wrap transition-all cursor-pointer hover:bg-[#8993FF]"
                        id="login">پورتال کاربران</a>
                </div>) : (
                    <div className="sm:flex sm:flex-1">
                    <ul className="sm:flex flex-1 mr-10 sm:mr-7 md:mr-16 my-auto ">
                        <li className="px-4 sm:px-3 md:px-6 text-sm active:text-[#FA7169]"><Link href="/" className={router.pathname == "/" ? "text-[#4F66E8]" : ""}> خانه </Link></li>
                        <li className="px-4 sm:px-3 md:px-6 text-sm cursor-pointer transition-colorsn hover:text-[#4F66E8]">
                            <Link href="/" className={router.pathname == "/nemone" ? "text-[#4F66E8]" : ""}> نمونه کارها </Link></li>
                        <li className="px-4 sm:px-3 md:px-6 text-sm cursor-pointer transition-colorsn hover:text-[#4F66E8]">
                            <Link href="/aboutus" className={router.pathname == "/aboutus" ? "text-[#4F66E8]" : ""}> درباره ما </Link>
                        </li>
                        <li className="px-4 sm:px-3 md:px-6 text-sm cursor-pointer transition-colorsn hover:text-[#4F66E8]">
                            <Link href="/contactus" className={router.pathname == "/contactus" ? "text-[#4F66E8]" : ""}> ارتباط با ما  </Link>
                        </li>
                    </ul>
                    {/* <a className="px-5 py-3.5 rounded-md text-sm text-white bg-[#4F66E8] flex flex-wrap transition-all cursor-pointer hover:bg-[#8993FF]"
                        id="login">پورتال کاربران</a> */}
                </div>
                ) }

            </div>
            
        </nav>
    </header>
    </>
  );
};

export default LandingHeader;
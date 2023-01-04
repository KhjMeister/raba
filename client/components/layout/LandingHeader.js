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
                <Link className="flex flex-1 sm:flex-none cursor-pointer h-12" href="/"><img src="../jpg/raba2.png"
                        className="h-12 inline-block" alt="RABALOGO" /></Link>
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
                        id="login">پرتال کاربران</a>
                </div>) : (
                    <div  className="md:hidden" >
                    <button  aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50">
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                        <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                        <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                      </svg>
                    </button>
                    
                    <div className="absolute top-0 left-0 w-full ">
                      <div className="p-5 bg-white dark:bg-gray-800 border rounded shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <div >
                          <Link className="flex flex-1 sm:flex-none cursor-pointer h-12" href="/"><img src="../jpg/raba2.png"
                        className="h-12 inline-block" alt="RABALOGO" /></Link>
                          </div>
                          <div>
                            <button onClick={()=>setMobileNavbar(!mobileNavbar)} aria-label="Close Menu" title="Close Menu" className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <nav>
                          <ul className="space-y-4">
                            <li className="font-medium tracking-wide text-gray-700 dark:text-cyan-500 transition-colors duration-200 hover:text-purple-400"><Link aria-label="Home" title="Home" href="/" className={router.pathname == "/" ? "text-[#4F66E8]" : ""}> خانه </Link></li>
                            <li className="font-medium tracking-wide text-gray-700 dark:text-cyan-500 transition-colors duration-200 hover:text-purple-400"><Link aria-label="Nemone Kar" title="Nemone Kar" href="/" className={router.pathname == "/nemone" ? "text-[#4F66E8]" : ""}> نمونه کارها </Link></li>
                            <li className="font-medium tracking-wide text-gray-700 dark:text-cyan-500 transition-colors duration-200 hover:text-purple-400"><Link aria-label="About Us" title="About Us"  href="/aboutus" className={router.pathname == "/aboutus" ? "text-[#4F66E8]" : ""}> درباره ما </Link></li>
                            <li className="font-medium tracking-wide text-gray-700 dark:text-cyan-500 transition-colors duration-200 hover:text-purple-400"><Link aria-label="Contact Us" title="Contact Us"  href="/contactus" className={router.pathname == "/contactus" ? "text-[#4F66E8]" : ""}> ارتباط با ما  </Link></li>

                            <li>
                              <a
                                href="#"
                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#4F66E8] hover:bg-[#3E55B7] focus:shadow-outline focus:outline-none"
                                aria-label="Sign up"
                                title="Sign up"
                              >
                                پرتال کاربران
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  
                  </div>
                ) }

            </div>
            
        </nav>
    </header>
    </>
  );
};

export default LandingHeader;
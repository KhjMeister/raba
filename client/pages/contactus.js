
export default function Contactus() {
  return (
    <>
        <div className='min-w-min sm:max-w-7xl mx-auto'>
            
        </div>
    
        <main className="mx-auto max-w-7xl my-8">
            <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 mx-4 sm:mx-5 lg:mx-6 sm:gap-4 md:gap-6 lg:gap-16">
                <div className="sm:order-last md:col-span-4">
                    <h3
                        className="text-base font-extrabold block relative before:content{''} before:absolute before:right-0  before:top-9 before:h-1 before:w-32 before:bg-[#5269EA]">
                        ارسال درخواست</h3>
                    <form className="mt-8">
                        <div className="flex grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="mb-4">
                                <label className="text-sm mb-2 block">
                                    نام و نام خانوادگی
                                </label>
                                <input type="text" placeholder="نام و نام خانواگی خود را وارد نمایید" className="w-full h-12 px-3 py-2 text-sm placeholder:text-xs placeholder:text-zinc-500 rounded focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">ایمیل</label>
                                <input type="email" placeholder="ایمیل خود را وارد نمایید" className="w-full h-12 px-3 py-2 text-sm placeholder:text-xs placeholder:text-zinc-500 rounded focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="text-sm mb-2 block">توضیحات</label>
                            <textarea placeholder="توضیحات خود را وارد نمایید"className="resize-none w-full h-32 px-3 py-2 text-sm placeholder:text-xs placeholder:text-zinc-500 rounded focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 "></textarea>
                    </div>
                    <button type="submit" className="text-sm text-white transition-all bg-[#4F66E8] px-5 py-3.5 mt-6 rounded hover:bg-[#728AF9]">ارسال درخواست</button>
                    </form>
                </div>
                <div className="mt-9 sm:mt-0 sm:order-first md:col-span-3">
                    <h3
                    className="text-base block font-extrabold relative before:content{''} before:absolute before:right-0  before:top-9 before:h-1 before:w-32 before:bg-[#5269EA]">
                    راه های ارتباطی
                </h3>
                <p className="text-sm mt-8 leading-8">
                    برای مشاوره میتوانید از راه های زیر با ما در ارتباط باشید وبرای ارسال تیکت مشاورین ما به صورت 24 ساعت پاسخگوی شما عزیزان می باشد 
                </p>
                <ul className="mt-5">
                    <li className="block  w-full lg:w-96  border border-1 border-zinc-200 rounded-md text-xs lg:text-sm mb-5 md:mb-6 lg:mb-8">
                        <span className="py-2.5 px-2 md:py-3.5 md:px-3 lg:p-3.5 bg-[#4F66E8] p-1 inline-block ml-2 rounded-r-md">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                                <g clipPath="url(#clip0_123_151)">
                                <path d="M9.9999 11.1917C11.4358 11.1917 12.5999 10.0276 12.5999 8.59167C12.5999 7.15573 11.4358 5.99167 9.9999 5.99167C8.56396 5.99167 7.3999 7.15573 7.3999 8.59167C7.3999 10.0276 8.56396 11.1917 9.9999 11.1917Z" stroke="white"/>
                                <path d="M3.01675 7.07501C4.65842 -0.14166 15.3501 -0.133326 16.9834 7.08334C17.9418 11.3167 15.3084 14.9 13.0001 17.1167C11.3251 18.7333 8.67508 18.7333 6.99175 17.1167C4.69175 14.9 2.05842 11.3083 3.01675 7.07501Z" stroke="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_123_151">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>                            
                        </span>
                        زاهدان خیابان دانشگاه پارک علم فناوری شرکت رابا
                    </li>
                    <li className="block  w-full lg:w-96 border border-1 border-zinc-200 rounded-md text-xs lg:text-sm mb-5 md:mb-6 lg:mb-8">
                        <span className="py-2.5 px-2 md:py-3.5 md:px-3 lg:p-3.5  bg-[#4F66E8] p-1 inline-block ml-2 rounded-r-md">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                                <path d="M18.3082 15.275C18.3082 15.575 18.2415 15.8833 18.0998 16.1833C17.9582 16.4833 17.7748 16.7667 17.5332 17.0333C17.1248 17.4833 16.6748 17.8083 16.1665 18.0167C15.6665 18.225 15.1248 18.3333 14.5415 18.3333C13.6915 18.3333 12.7832 18.1333 11.8248 17.725C10.8665 17.3167 9.90817 16.7667 8.95817 16.075C7.99984 15.375 7.0915 14.6 6.22484 13.7417C5.3665 12.875 4.5915 11.9667 3.89984 11.0167C3.2165 10.0667 2.6665 9.11667 2.2665 8.17501C1.8665 7.22501 1.6665 6.31667 1.6665 5.45C1.6665 4.88334 1.7665 4.34167 1.9665 3.84167C2.1665 3.33334 2.48317 2.86667 2.92484 2.45001C3.45817 1.92501 4.0415 1.66667 4.65817 1.66667C4.8915 1.66667 5.12484 1.71667 5.33317 1.81667C5.54984 1.91667 5.7415 2.06667 5.8915 2.28334L7.82484 5.00834C7.97484 5.21667 8.08317 5.40834 8.15817 5.59167C8.23317 5.76667 8.27484 5.94167 8.27484 6.10001C8.27484 6.30001 8.2165 6.5 8.09984 6.69167C7.9915 6.88334 7.83317 7.08334 7.63317 7.28334L6.99984 7.94167C6.90817 8.03334 6.8665 8.14167 6.8665 8.27501C6.8665 8.34167 6.87484 8.4 6.8915 8.46667C6.9165 8.53334 6.9415 8.58334 6.95817 8.63334C7.10817 8.90834 7.3665 9.26667 7.73317 9.70001C8.10817 10.1333 8.50817 10.575 8.9415 11.0167C9.3915 11.4583 9.82484 11.8667 10.2665 12.2417C10.6998 12.6083 11.0582 12.8583 11.3415 13.0083C11.3832 13.025 11.4332 13.05 11.4915 13.075C11.5582 13.1 11.6248 13.1083 11.6998 13.1083C11.8415 13.1083 11.9498 13.0583 12.0415 12.9667L12.6748 12.3417C12.8832 12.1333 13.0832 11.975 13.2748 11.875C13.4665 11.7583 13.6582 11.7 13.8665 11.7C14.0248 11.7 14.1915 11.7333 14.3748 11.8083C14.5582 11.8833 14.7498 11.9917 14.9582 12.1333L17.7165 14.0917C17.9332 14.2417 18.0832 14.4167 18.1748 14.625C18.2582 14.8333 18.3082 15.0417 18.3082 15.275Z" stroke="white" strokeMiterlimit="10"/>
                                </svg>                            
                        </span>
                        09338973928
                    </li>
                    <li className="block  w-full lg:w-96 border border-1 border-zinc-200 rounded-md text-xs lg:text-sm">
                        <span className="py-2.5 px-2 md:py-3.5 md:px-3 lg:p-3.5  bg-[#4F66E8] p-1 inline-block ml-2 rounded-r-md">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                                <path d="M14.1665 17.0833H5.83317C3.33317 17.0833 1.6665 15.8333 1.6665 12.9167V7.08333C1.6665 4.16666 3.33317 2.91666 5.83317 2.91666H14.1665C16.6665 2.91666 18.3332 4.16666 18.3332 7.08333V12.9167C18.3332 15.8333 16.6665 17.0833 14.1665 17.0833Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.1668 7.5L11.5585 9.58333C10.7002 10.2667 9.29183 10.2667 8.43349 9.58333L5.8335 7.5" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>                            
                        </span>
                        Raba_official@gmail.com
                    </li>
                </ul>
                </div>
            </div>
        </main>
    </>

  )
}

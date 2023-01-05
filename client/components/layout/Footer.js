import { useRouter } from 'next/router';
import React from "react";
import t from './../../lib/translate';
import Link from 'next/link';

const Footer = () => {
        
    const router = useRouter();
    return (
        <>
    <footer className="max-w-7xl mx-auto mb-4 lg:mb-5">
        <div className="bg-[#303030] p-4 mx-4 rounded-lg md:py-6">
            <div className="flex relative">
                <a className="cursor-pointer mr-2">
                    <img src="../jpg/rabadark2.png" className="h-9" alt="rabadark" />
                </a>
                <span className="block border border-2 border-[#8993FF] rounded-md w-9 h-9 absolute left-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className="my-1 mx-auto">
                        <path d="M19.92 15.0501L13.4 8.53014C12.63 7.76014 11.37 7.76014 10.6 8.53014L4.07996 15.0501"
                            stroke="#8993FF" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
            <div className="flex grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                <div>
                    <ul className="px-3">
                        <li className="font-medium text-white text-base pb-1"> {t(router.query?.locale, "fast_access")}</li>
                        <li className="text-sm py-3"><Link href="/" className={router.pathname == "/[locale]" ? "text-white text-base" : "text-zinc-400"}> {t(router.query?.locale, "home")} </Link></li>
                        <li className="text-sm py-3"> <Link href="/" className={router.pathname == "/[locale]/nemone" ? "text-white text-base" : "text-zinc-400"}> {t(router.query?.locale, "samples")}</Link></li>
                        <li className="text-sm py-3"> <Link href="/aboutus" className={router.pathname == "/[locale]/aboutus" ? "text-white text-base" : "text-zinc-400"}> {t(router.query?.locale, "aboutus")}</Link></li>
                        <li className="text-sm py-3"><Link href="/contactus" className={router.pathname == "/[locale]/contactus" ? "text-white text-base" : "text-zinc-400"}> {t(router.query?.locale, "contactus")} </Link> </li>
                    </ul>
                </div>
                <div className="sm:col-span-2 lg:col-span-1">
                    <ul className="px-3">
                        <li className="font-medium text-white text-base pb-1">{t(router.query?.locale, "connection_ways")} </li>
                        <li className="text-sm text-zinc-400 py-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" className="inline-block align-[-6px] ml-2">
                                <path
                                    d="M20 17.064C20 17.352 19.9359 17.648 19.7997 17.936C19.6635 18.224 19.4872 18.496 19.2549 18.752C18.8623 19.184 18.4296 19.496 17.9409 19.696C17.4602 19.896 16.9394 20 16.3786 20C15.5613 20 14.688 19.808 13.7666 19.416C12.8453 19.024 11.9239 18.496 11.0105 17.832C10.0891 17.16 9.21582 16.416 8.38257 15.592C7.55734 14.76 6.81222 13.888 6.14722 12.976C5.49024 12.064 4.96144 11.152 4.57687 10.248C4.19229 9.336 4 8.464 4 7.632C4 7.088 4.09614 6.568 4.28843 6.088C4.48072 5.6 4.78518 5.152 5.20981 4.752C5.72258 4.248 6.28343 4 6.87631 4C7.10065 4 7.32499 4.048 7.52529 4.144C7.7336 4.24 7.91788 4.384 8.06209 4.592L9.92088 7.208C10.0651 7.408 10.1693 7.592 10.2414 7.768C10.3135 7.936 10.3535 8.104 10.3535 8.256C10.3535 8.448 10.2974 8.64 10.1853 8.824C10.0811 9.008 9.92889 9.2 9.7366 9.392L9.12769 10.024C9.03956 10.112 8.9995 10.216 8.9995 10.344C8.9995 10.408 9.00751 10.464 9.02354 10.528C9.04757 10.592 9.07161 10.64 9.08763 10.688C9.23185 10.952 9.48022 11.296 9.83275 11.712C10.1933 12.128 10.5779 12.552 10.9945 12.976C11.4271 13.4 11.8438 13.792 12.2684 14.152C12.685 14.504 13.0295 14.744 13.302 14.888C13.342 14.904 13.3901 14.928 13.4462 14.952C13.5103 14.976 13.5744 14.984 13.6465 14.984C13.7827 14.984 13.8868 14.936 13.975 14.848L14.5839 14.248C14.7842 14.048 14.9765 13.896 15.1607 13.8C15.345 13.688 15.5293 13.632 15.7296 13.632C15.8818 13.632 16.0421 13.664 16.2183 13.736C16.3946 13.808 16.5789 13.912 16.7792 14.048L19.4311 15.928C19.6395 16.072 19.7837 16.24 19.8718 16.44C19.9519 16.64 20 16.84 20 17.064Z"
                                    stroke="#CCCCCC" strokeMiterlimit="10" />
                            </svg>
                            {t(router.query?.locale, "number")}
                        </li>
                        <li className="text-sm text-zinc-400 py-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" className="inline-block align-[-6px] ml-2">
                                <rect x="4" y="6" width="16" height="12" rx="2" stroke="#CCCCCC" />
                                <path d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9"
                                    stroke="#CCCCCC" />
                            </svg>
                            {t(router.query?.locale, "email")}
                        </li>
                        <li className="text-sm text-zinc-400 py-3 leading-8">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" className="inline-block align-[-6px] ml-2">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M12.1228 9.5C11.0182 9.5 10.1228 10.3954 10.1228 11.5C10.1228 12.6046 11.0182 13.5 12.1228 13.5C13.2274 13.5 14.1228 12.6046 14.1228 11.5C14.1228 10.3954 13.2274 9.5 12.1228 9.5ZM9.1228 11.5C9.1228 9.84315 10.4659 8.5 12.1228 8.5C13.7797 8.5 15.1228 9.84315 15.1228 11.5C15.1228 13.1569 13.7797 14.5 12.1228 14.5C10.4659 14.5 9.1228 13.1569 9.1228 11.5Z"
                                    fill="#CCCCCC" />
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M11.9026 5.5C9.13087 5.49813 6.40885 7.10869 5.68188 10.304C4.82371 14.0957 7.17465 17.3711 9.35787 19.4754C10.7813 20.8421 13.0194 20.8408 14.4335 19.4759L14.4344 19.4751C16.6256 17.3709 18.9763 14.1033 18.118 10.3117L18.118 10.3117C17.3948 7.11624 14.6745 5.50188 11.9026 5.5ZM19.0933 10.0909C18.2481 6.35663 15.0509 4.50213 11.9033 4.5C8.75565 4.49787 5.55623 6.34812 4.70675 10.0824L4.70664 10.0829C3.7246 14.4209 6.43056 18.0429 8.66428 20.1957L8.66491 20.1963C10.474 21.9338 13.3244 21.9353 15.127 20.1964C17.3689 18.0435 20.0754 14.4294 19.0933 10.0909Z"
                                    fill="#CCCCCC" />
                            </svg>
                            {t(router.query?.locale, "address")}
                        </li>
                        <ul className="mt-2">
                            <li
                                className="w-9 h-9 rounded-full bg-zinc-800 p-1.5 inline-block ml-3 cursor-pointer hover:bg-zinc-900">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 9.3C11.2839 9.3 10.5972 9.58446 10.0908 10.0908C9.58446 10.5972 9.3 11.2839 9.3 12C9.3 12.7161 9.58446 13.4028 10.0908 13.9092C10.5972 14.4155 11.2839 14.7 12 14.7C12.7161 14.7 13.4028 14.4155 13.9092 13.9092C14.4155 13.4028 14.7 12.7161 14.7 12C14.7 11.2839 14.4155 10.5972 13.9092 10.0908C13.4028 9.58446 12.7161 9.3 12 9.3ZM12 7.5C13.1935 7.5 14.3381 7.97411 15.182 8.81802C16.0259 9.66193 16.5 10.8065 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5C10.8065 16.5 9.66193 16.0259 8.81802 15.182C7.97411 14.3381 7.5 13.1935 7.5 12C7.5 10.8065 7.97411 9.66193 8.81802 8.81802C9.66193 7.97411 10.8065 7.5 12 7.5ZM17.85 7.275C17.85 7.57337 17.7315 7.85952 17.5205 8.0705C17.3095 8.28147 17.0234 8.4 16.725 8.4C16.4266 8.4 16.1405 8.28147 15.9295 8.0705C15.7185 7.85952 15.6 7.57337 15.6 7.275C15.6 6.97663 15.7185 6.69048 15.9295 6.4795C16.1405 6.26853 16.4266 6.15 16.725 6.15C17.0234 6.15 17.3095 6.26853 17.5205 6.4795C17.7315 6.69048 17.85 6.97663 17.85 7.275ZM12 4.8C9.7734 4.8 9.4098 4.8063 8.3739 4.8522C7.6683 4.8855 7.1949 4.98 6.7557 5.151C6.3651 5.3022 6.0834 5.4831 5.7837 5.7837C5.50201 6.05586 5.28542 6.38813 5.1501 6.7557C4.9791 7.1967 4.8846 7.6692 4.8522 8.3739C4.8054 9.3675 4.8 9.7149 4.8 12C4.8 14.2266 4.8063 14.5902 4.8522 15.6261C4.8855 16.3308 4.98 16.8051 5.1501 17.2434C5.3031 17.6349 5.4831 17.9166 5.7819 18.2154C6.0852 18.5178 6.3669 18.6987 6.7539 18.8481C7.1985 19.02 7.6719 19.1154 8.3739 19.1478C9.3675 19.1946 9.7149 19.2 12 19.2C14.2266 19.2 14.5902 19.1937 15.6261 19.1478C16.3299 19.1145 16.8042 19.02 17.2434 18.8499C17.6331 18.6978 17.9166 18.5169 18.2154 18.2181C18.5187 17.9148 18.6996 17.6331 18.849 17.2461C19.02 16.8024 19.1154 16.3281 19.1478 15.6261C19.1946 14.6325 19.2 14.2851 19.2 12C19.2 9.7734 19.1937 9.4098 19.1478 8.3739C19.1145 7.6701 19.02 7.1949 18.849 6.7557C18.7134 6.3885 18.4972 6.05636 18.2163 5.7837C17.9443 5.50186 17.612 5.28525 17.2443 5.1501C16.8033 4.9791 16.3299 4.8846 15.6261 4.8522C14.6325 4.8054 14.2851 4.8 12 4.8ZM12 3C14.4453 3 14.7504 3.009 15.7098 3.054C16.6683 3.099 17.3208 3.2493 17.895 3.4725C18.489 3.7011 18.9894 4.0107 19.4898 4.5102C19.9474 4.96011 20.3016 5.50433 20.5275 6.105C20.7498 6.6783 20.901 7.3317 20.946 8.2902C20.9883 9.2496 21 9.5547 21 12C21 14.4453 20.991 14.7504 20.946 15.7098C20.901 16.6683 20.7498 17.3208 20.5275 17.895C20.3022 18.496 19.948 19.0404 19.4898 19.4898C19.0398 19.9473 18.4956 20.3014 17.895 20.5275C17.3217 20.7498 16.6683 20.901 15.7098 20.946C14.7504 20.9883 14.4453 21 12 21C9.5547 21 9.2496 20.991 8.2902 20.946C7.3317 20.901 6.6792 20.7498 6.105 20.5275C5.50409 20.302 4.95977 19.9478 4.5102 19.4898C4.05247 19.04 3.69834 18.4957 3.4725 17.895C3.2493 17.3217 3.099 16.6683 3.054 15.7098C3.0117 14.7504 3 14.4453 3 12C3 9.5547 3.009 9.2496 3.054 8.2902C3.099 7.3308 3.2493 6.6792 3.4725 6.105C3.69771 5.50396 4.05192 4.95959 4.5102 4.5102C4.9599 4.05231 5.50419 3.69816 6.105 3.4725C6.6792 3.2493 7.3308 3.099 8.2902 3.054C9.2496 3.0117 9.5547 3 12 3Z"
                                        fill="white" />
                                </svg>
                            </li>
                            <li
                                className="w-9 h-9 rounded-full bg-zinc-800 p-1.5 inline-block ml-3 cursor-pointer hover:bg-zinc-900">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.72771 17.8446L8.37931 18.2253C9.47815 18.8662 10.7279 19.2026 12 19.2C13.424 19.2 14.8161 18.7777 16.0001 17.9866C17.1841 17.1954 18.107 16.0709 18.6519 14.7553C19.1969 13.4397 19.3395 11.992 19.0617 10.5953C18.7838 9.19868 18.0981 7.91577 17.0912 6.90883C16.0842 5.90189 14.8013 5.21616 13.4047 4.93834C12.008 4.66053 10.5603 4.80312 9.24469 5.34807C7.92906 5.89302 6.80457 6.81586 6.01343 7.99989C5.22228 9.18392 4.80001 10.576 4.80001 12C4.80001 13.2924 5.13931 14.5317 5.77561 15.6216L6.15541 16.2732L5.56771 18.4341L7.72771 17.8446ZM3.00361 21L4.22041 16.5288C3.41864 15.1544 2.9974 13.5912 3.00001 12C3.00001 7.0293 7.02931 3 12 3C16.9707 3 21 7.0293 21 12C21 16.9707 16.9707 21 12 21C10.4095 21.0026 8.847 20.5816 7.47301 19.7805L3.00361 21ZM8.75191 7.7772C8.87251 7.7682 8.99401 7.7682 9.11461 7.7736C9.16321 7.7772 9.21181 7.7826 9.26041 7.788C9.40351 7.8042 9.56101 7.8915 9.61411 8.0121C9.88231 8.6205 10.1433 9.2334 10.3953 9.8481C10.4511 9.9849 10.4178 10.1604 10.3116 10.3314C10.2386 10.447 10.1596 10.5588 10.0749 10.6662C9.97321 10.7967 9.75451 11.0361 9.75451 11.0361C9.75451 11.0361 9.66541 11.1423 9.69961 11.2746C9.71221 11.325 9.75361 11.3979 9.79141 11.4591L9.84451 11.5446C10.0749 11.9289 10.3845 12.3186 10.7625 12.6858C10.8705 12.7902 10.9758 12.8973 11.0892 12.9972C11.5104 13.3689 11.9874 13.6722 12.5022 13.8972L12.5067 13.899C12.5832 13.9323 12.6219 13.9503 12.7335 13.998C12.7893 14.0214 12.8469 14.0421 12.9054 14.0574C12.9659 14.0728 13.0295 14.0699 13.0883 14.0491C13.1471 14.0282 13.1984 13.9904 13.2357 13.9404C13.8873 13.1511 13.9467 13.0998 13.9521 13.0998V13.1016C13.9974 13.0594 14.0512 13.0273 14.1098 13.0076C14.1685 12.9879 14.2307 12.981 14.2923 12.9873C14.3463 12.9909 14.4012 13.0008 14.4516 13.0233C14.9295 13.242 15.7116 13.5831 15.7116 13.5831L16.2354 13.818C16.3236 13.8603 16.4037 13.9602 16.4064 14.0565C16.41 14.1168 16.4154 14.214 16.3947 14.3922C16.3659 14.6253 16.2957 14.9052 16.2255 15.0519C16.1774 15.152 16.1136 15.2438 16.0365 15.3237C15.9457 15.419 15.8463 15.5058 15.7395 15.5829C15.7026 15.6107 15.6651 15.6377 15.627 15.6639C15.5151 15.7349 15.4001 15.801 15.2823 15.8619C15.0506 15.985 14.7947 16.0556 14.5326 16.0689C14.3661 16.0779 14.1996 16.0905 14.0322 16.0815C14.025 16.0815 13.521 16.0032 13.521 16.0032C12.2414 15.6666 11.0581 15.0361 10.065 14.1618C9.86161 13.9827 9.67351 13.7901 9.48091 13.5984C8.67991 12.8019 8.07511 11.9424 7.70791 11.1306C7.51996 10.7322 7.41844 10.2985 7.41001 9.858C7.4063 9.31156 7.58492 8.7795 7.91761 8.346C7.98331 8.2614 8.04541 8.1732 8.15251 8.0715C8.26681 7.9635 8.33881 7.9059 8.41711 7.8663C8.52121 7.81413 8.63478 7.78351 8.75101 7.7763L8.75191 7.7772Z"
                                        fill="white" />
                                </svg>
                            </li>
                            <li
                                className="w-9 h-9 rounded-full bg-zinc-800 p-1.5 inline-block cursor-pointer hover:bg-zinc-900">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_72_247)">
                                        <path
                                            d="M15.4777 6.79586C14.7957 6.79575 14.1409 7.06338 13.6542 7.54117C13.1675 8.01896 12.8878 8.66872 12.8754 9.35062L12.8502 10.764C12.8488 10.8398 12.8313 10.9146 12.7989 10.9832C12.7665 11.0518 12.72 11.1129 12.6624 11.1623C12.6048 11.2117 12.5373 11.2483 12.4646 11.2698C12.3918 11.2914 12.3153 11.2972 12.24 11.2871L10.8393 11.0969C8.99611 10.8456 7.23012 9.99672 5.53592 8.58518C4.9993 11.5554 6.04741 13.613 8.57166 15.2005L10.1393 16.1858C10.2138 16.2326 10.2757 16.2969 10.3196 16.3732C10.3634 16.4494 10.3879 16.5353 10.391 16.6232C10.394 16.7111 10.3754 16.7984 10.3368 16.8775C10.2983 16.9566 10.241 17.025 10.1698 17.0768L8.74126 18.1205C9.59106 18.1734 10.3978 18.1357 11.0672 18.0029C15.3009 17.1576 18.1159 13.972 18.1159 8.71709C18.1159 8.28816 17.2078 6.79586 15.4777 6.79586V6.79586ZM11.0807 9.31742C11.0963 8.45242 11.3668 7.61126 11.8583 6.89925C12.3497 6.18725 13.0403 5.63605 13.8435 5.31466C14.6468 4.99327 15.527 4.91598 16.3739 5.09246C17.2209 5.26894 17.9969 5.69135 18.605 6.3068C19.243 6.30232 19.7859 6.46384 21 5.72801C20.6994 7.19967 20.5513 7.83858 19.9106 8.71709C19.9106 15.5747 15.6957 18.9092 11.419 19.7626C8.48642 20.3477 4.22219 19.3866 3 18.1106C3.62276 18.0621 6.1533 17.7902 7.61598 16.7197C6.37853 15.904 1.45296 13.0055 4.68972 5.21293C6.20893 6.987 7.74969 8.19483 9.31108 8.83554C10.3502 9.26179 10.6051 9.25281 11.0816 9.31832L11.0807 9.31742Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_72_247">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="sm:col-span-3 md:col-span-2 lg:col-span-2">
                    <h3 className="m-0 px-3 text-base text-white"> {t(router.query?.locale, "counseling_request")}</h3>
                    <form className="px-3 mt-4">
                        <div className="flex flex-row grid grid-cols-1 lg:grid-cols-2 lg:gap-4 lg:mb-4">
                            <div>
                                <label className="text-zinc-400 text-sm">{t(router.query?.locale, "i_name_family")} </label>
                                <input type="text"
                                    className="w-full border border-1 border-zinc-500 bg-[#303030] rounded h-9 mt-2 placeholder:text-xs placeholder:text-zinc-500 px-3 focus:outline-none focus:ring-1 focus:ring-sky-800 focus:border-sky-500 text-white text-sm"
                                    placeholder={t(router.query?.locale, "p_name_family")} />
                            </div>
                            <div className="my-4 lg:my-0">
                                <label className="text-zinc-400 text-sm">{t(router.query?.locale, "i_email")}</label>
                                <input type="email"
                                    className="w-full border border-1 border-zinc-500 bg-[#303030] rounded h-9 mt-2 placeholder:text-xs placeholder:text-zinc-500 px-3 focus:outline-none focus:ring-1 focus:ring-sky-800 focus:border-sky-500 text-white text-sm"
                                    placeholder={t(router.query?.locale, "p_email")} />

                            </div>
                        </div>
                        <label className="text-zinc-400 text-sm">{t(router.query?.locale, "i_description")}  </label>
                        <textarea type="text"
                            className="resize-none pt-3 w-full border border-1 border-zinc-500 bg-[#303030] rounded h-20 mt-2 placeholder:text-xs placeholder:text-zinc-500 px-3 focus:outline-none focus:ring-1 focus:ring-sky-800 focus:border-sky-500 text-white text-sm"
                            placeholder={t(router.query?.locale, "p_description")}></textarea>
                        <button
                            className="w-full sm:w-80 lg:w-60 bg-[#4F66E8] text-white rounded text-center h-10 mt-5 text-sm">ارسال</button>
                    </form>
                </div>
            </div>
        </div>
    </footer>
        </>
    );
};

export default Footer;

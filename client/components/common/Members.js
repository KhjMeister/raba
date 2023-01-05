import Link from 'next/link';
import { useRouter } from 'next/router';
import t from './../../lib/translate';
const Members = () => {
   
    const router = useRouter();
  

  return (
    <>
     <section className="mx-16 sm:mx-5">
                <h3 className="h-16 mt-12 md:h-20  text-center font-bold text-xl md:text-3xl relative before:content{' '} before:absolute before:h-1.5 before:w-48 before:bg-[#4F66E8] before:left-0 before:right-5 before:mx-auto before:bottom-[22px]
                    after:content{''} after:mx-auto after:left-[30px] after:right-0 after:h-1.5 after:w-48 after:bg-[#8993FF] after:absolute after:bottom-[10px]
                    ">
                   {t(router.query?.locale, "h3_raba_members")}
                </h3>
                <div className="mt-4">
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                    <img src="../jpg/team/khosro.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6" />
                    <div className="sm:self-center sm:mx-auto">
                        <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9"> {t(router.query?.locale, "khosru")}</p>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">{t(router.query?.locale, "front_end")}</p>
                        <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white"> {t(router.query?.locale, "view_resume")}</a>
                    </div>
                </div>
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                    <img src="../jpg/team/hamid.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6 sm:order-last sm:place-self-end" />
                    <div className="sm:self-center sm:mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9">  {t(router.query?.locale, "hamid")}</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">{t(router.query?.locale, "back_end")}</p>
                    <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white"> {t(router.query?.locale, "view_resume")}</a>
                    </div>
                </div>
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                    <img src="../jpg/team/sarhadi.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6" />
                    <div className="sm:self-center sm:mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9"> {t(router.query?.locale, "sarhadi")}</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">{t(router.query?.locale, "back_end")}</p>
                    <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white"> {t(router.query?.locale, "view_resume")}</a>
                    </div>
                </div>
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                <img src="../jpg/team/shahrooz.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6 sm:order-last sm:place-self-end" />
                <div className="sm:self-center sm:mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9"> {t(router.query?.locale, "shabani")}</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">{t(router.query?.locale, "android")}</p>
                    <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white"> {t(router.query?.locale, "view_resume")}</a>
                </div>
                </div>
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                    <img src="../jpg/team/khodam.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6" />
                    <div className="sm:self-center sm:mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9"> {t(router.query?.locale, "riki")}</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">{t(router.query?.locale, "ui_ux")}</p>
                    <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white"> {t(router.query?.locale, "view_resume")}</a>
                    </div>
                </div>
                </div>
            </section>

    </>
  );
};

export default Members;
import Link from 'next/link';
import { useRouter } from 'next/router';
import t from './../../lib/translate';
const About = () => {
   
    const router = useRouter();
  

  return (
    <>
     <section>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">  {t(router.query?.locale, "h3_about_raba")}</h3>
                <p className="text-sm mt-7 mr-6 ml-6 leading-9 xl:leading-8 text-center xl:text-base mb-6">
                {t(router.query?.locale, "about_raba")}
                </p>
            </section>


            <section>
                <h3 className="h-16 mt-12 md:h-20  text-center font-bold text-xl md:text-3xl relative before:content{' '} before:absolute before:h-1.5 before:w-48 before:bg-[#4F66E8] before:left-0 before:right-5 before:mx-auto before:bottom-[22px]
                after:content{''} after:mx-auto after:left-[30px] after:right-0 after:h-1.5 after:w-48 after:bg-[#8993FF] after:absolute after:bottom-[10px]
                ">
                   {t(router.query?.locale, "h3_raba_services")}
                </h3>
                <ul
                    className="bg-white rounded-md py-9 text-center flex grid  grid-cols-1 sm:grid-cols-3 sm:gap-4 gap-12 mx-4 my-7">
                    <li className="">
                        <img src="../jpg/png_service/monitor-mobbile.png" className="w-12 mx-auto mb-4" />
                        <p className="text-sm font-medium">
                        {t(router.query?.locale, "p_create_web")}
                        </p>
                    </li>
                    <li className="">
                        <img src="../jpg/png_service/mobile.png" className="w-12 mx-auto mb-4" />
                        <p className="text-sm font-medium">  
                        {t(router.query?.locale, "p_create_app")}
                        </p>
                    </li>
                    <li className="">
                        <img src="../jpg/png_service/design.png" className="w-12 mx-auto mb-4" />
                        <p className="text-sm font-medium"> 
                        {t(router.query?.locale, "p_create_platform")}
                        </p>
                    </li>
                </ul>
            </section>

    </>
  );
};

export default About;
import Modal from '../../components/common/Modal';
import LandingHeader from '../../components/layout/LandingHeader';
import Footer from '../../components/layout/Footer';

export default function Aboutus() {
  return (
    <>
        <LandingHeader />
        <div className='min-w-min sm:max-w-7xl mx-auto'> 
        </div>
    
        <main className="my-12 max-w-7xl mx-auto">
            <section>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">درباره شرکت رابا</h3>
                <p className="text-sm mt-7 leading-9 xl:leading-8 text-center xl:text-base mb-6">
                    شرکت رابا در سال 1401 با هدف توسعه نرم افزار های اپلیکیشنی و طراحی وبسایت تاسیس شدهمچنین تیم رابا با
                    استارت دو استارت اپ توانسته کار افرینی کند.
                    <br />
                    تیم رابا دارای افرادی با تجربه و کاربلد در حوزه وب و اپلیکیشن سعی داشته تا بهترین ارائه در خدمات رسانی
                    را داشته باشد
                    <br />
                    همچنین همگام با استاندارد های روز دنیا گام برداشت و از جدیدترین متدها و تکنولوژی استفاده میکنیم
                </p>
            </section>


            <section>
                <h3 className="h-16 mt-12 md:h-20  text-center font-bold text-xl md:text-3xl relative before:content{' '} before:absolute before:h-1.5 before:w-48 before:bg-[#4F66E8] before:left-0 before:right-5 before:mx-auto before:bottom-[22px]
                after:content{''} after:mx-auto after:left-[30px] after:right-0 after:h-1.5 after:w-48 after:bg-[#8993FF] after:absolute after:bottom-[10px]
                ">
                    خدمات شرکت رابا
                </h3>
                <ul
                    className="bg-white rounded-md py-9 text-center flex grid  grid-cols-1 sm:grid-cols-3 sm:gap-4 gap-12 mx-4 my-7">
                    <li className="">
                        <img src="../jpg/png_service/monitor-mobbile.png" className="w-12 mx-auto mb-4" />
                        <p className="text-sm font-medium">طراحی سایت و وب اپ</p>
                    </li>
                    <li className="">
                        <img src="../jpg/png_service/mobile.png" className="w-12 mx-auto mb-4" />
                        <p className="text-sm font-medium">طراحی اپلیکیشن موبایل</p>
                    </li>
                    <li className="">
                        <img src="../jpg/png_service/design.png" className="w-12 mx-auto mb-4" />
                        <p className="text-sm font-medium">طراحی پلتفرم کسب و کار</p>
                    </li>
                </ul>
            </section>

        

            <section className="mx-16 sm:mx-5">
                <h3 className="h-16 mt-12 md:h-20  text-center font-bold text-xl md:text-3xl relative before:content{' '} before:absolute before:h-1.5 before:w-48 before:bg-[#4F66E8] before:left-0 before:right-5 before:mx-auto before:bottom-[22px]
                    after:content{''} after:mx-auto after:left-[30px] after:right-0 after:h-1.5 after:w-48 after:bg-[#8993FF] after:absolute after:bottom-[10px]
                    ">
                    اعضای تیم رابا
                </h3>
                <div className="mt-4">
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                    <img src="../jpg/team/khosro.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6" />
                    <div className="sm:self-center sm:mx-auto">
                        <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9">خسرو رسولی</p>
                        <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">Front End</p>
                        <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white">مشاهده رزومه</a>
                    </div>
                </div>
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                    <img src="../jpg/team/hamid.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6 sm:order-last sm:place-self-end" />
                    <div className="sm:self-center sm:mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9">حمید بلال زاده</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">Back End</p>
                    <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white">مشاهده رزومه</a>
                    </div>
                </div>
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                    <img src="../jpg/team/sarhadi.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6" />
                    <div className="sm:self-center sm:mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9">سعیده سرحدی</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">Back End</p>
                    <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white">مشاهده رزومه</a>
                    </div>
                </div>
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                <img src="../jpg/team/shahrooz.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6 sm:order-last sm:place-self-end" />
                <div className="sm:self-center sm:mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9">شهروز شیبانی</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">Android developer</p>
                    <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white">مشاهده رزومه</a>
                </div>
                </div>
                <div className="flex grid grid-cols-1 sm:grid-cols-2 mb-8 sm:mb-10 md:mb-12">
                    <img src="../jpg/team/khodam.png" className="sm:w-5/6 md:w-4/5 lg:w-4/6" />
                    <div className="sm:self-center sm:mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 mt-4 sm:mt-0  md:mb-8 lg:mb-9">علی ریکی</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-500 mb-4 sm:mb-6 md:mb-8 lg:mb-9">Ui Ux Designer</p>
                    <a className="text-[#4F66E8] border border-1.5 border-[#4F66E8] px-5 py-3 rounded-md text-sm inline-block cursor-pointer hover:bg-[#4F66E8] transition-colorsn hover:text-white">مشاهده رزومه</a>
                    </div>
                </div>
                </div>
            </section>
        </main>
        <Footer />
        <Modal />
    </>

  )
}

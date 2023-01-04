import Feachers from '../../components/common/Feachers';
import Hero from '../../components/common/Hero';
import Samples from '../../components/common/Samples';
import Services from '../../components/common/Services';

import Modal from '../../components/common/Modal';
import LandingHeader from '../../components/layout/LandingHeader';
import Footer from '../../components/layout/Footer';






export default function Index() {
  return (
    <>
        <LandingHeader />
        <div className='min-w-min sm:max-w-7xl mx-auto'>
            <Hero />
        </div>
    
        <main className="max-w-7xl mx-auto mt-18">
            <Feachers />
            <Samples />
            <Services />
        </main>
        <Footer />
        <Modal />
    </>

  )
}

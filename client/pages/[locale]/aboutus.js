import Modal from '../../components/common/Modal';
import LandingHeader from '../../components/layout/LandingHeader';
import Footer from '../../components/layout/Footer';
import About from '../../components/common/About';

import { useRouter } from 'next/router';
import React from "react";

import t from './../../lib/translate';
import Members from '../../components/common/Members';


export default function Aboutus() {
    const router = useRouter();
  return (
    <>
        <LandingHeader />
        <div className='min-w-min sm:max-w-7xl mx-auto'> 
        </div>
    
        <main className="my-12 max-w-7xl mx-auto">
           <About />

        

            <Members />
        </main>
        <Footer />
        <Modal />
    </>

  )
}

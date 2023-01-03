import Feachers from '../components/common/Feachers';
import Hero from '../components/common/Hero';
import Samples from '../components/common/Samples';
import Services from '../components/common/Services';




export default function Index() {
  return (
    <>
        <div className='min-w-min sm:max-w-8xl mx-auto'>
            <Hero />
        </div>
    
        <main className="max-w-8xl mx-auto mt-18">
            <Feachers />
            <Samples />
            <Services />
        </main>
    </>

  )
}

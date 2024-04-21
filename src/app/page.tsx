import Nav from '@/components/nav'
import SwiperImages from '../components/swiperImages'
// import Image from 'next/image'
// import LandingImage3 from '../../public/assets/landingImage3.webp'

export default function Home() {
  return (
    <>
    <div className='relative h-screen'>
        <div className='z-10'>
           <Nav />
        </div>
        <div className='hidden sm:block absolute inset-0 -z-10'>
          <SwiperImages isSmall={false} />
        </div>
        <div className='block sm:hidden absolute inset-0 -z-10'>
          <SwiperImages isSmall={true} />
        </div>
      {/* <Image 
        src={LandingImage3} 
        fill  
        style={{
          zIndex: -1
        }} 
        alt='Landing Image 1'
        className='bg-cover'
      /> */}
    </div>
    </>
  );
}

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/pagination'
import '../../style/swiper.css'

import LandingImage3 from '../../public/assets/landingImage3.webp'
import LandingImage1 from '../../public/assets/landingImage1.webp'
import LandingImage2 from '../../public/assets/landingImage2.webp'
import MobLanding1 from '../../public/assets/Mob_landingPage1.jpg'
import MobLanding2 from '../../public/assets/Mob_landingPage2.jpg'
export default function SwiperImages({isSmall}) {
    let landingImages = [MobLanding1, MobLanding2];
    if(!isSmall){
        landingImages = [LandingImage1, LandingImage2, LandingImage3]
    }
    return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true}}
      autoplay={{delay:3000, disableOnInteraction:false}}
    >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide> */}
      {landingImages.map((val, index) => (
              <SwiperSlide key={index}>
                <Image 
                  src={val}
                  style={{
                    zIndex: 1
                  }}
                  alt='Landing image'>
                </Image>
              </SwiperSlide>))
        }
    </Swiper>
    )
}
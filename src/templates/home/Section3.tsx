import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  ImagePet,
} from '@/utils/Images';
// type Props = {};

const Section3 = () => {
  return (
    <div className="container mx-auto mt-12 md:mt-32 md:px-0 xl:px-32">
      <div className="block md:hidden">
        <Swiper
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={16}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="relative hidden md:block">
        <div className="flex gap-8">
          <div
            className="grid grid-cols-[minmax(252px,1fr)_minmax(156px,1fr)] grid-rows-[auto_minmax(100px,1fr)] 
        gap-8 
sm:grid-cols-[minmax(100px,1fr)_minmax(100px,1fr)] 
        md:grid-cols-[minmax(30%,1fr)_minmax(30%,1fr)] md:grid-rows-[auto_minmax(100px,1fr)] xl:grid-cols-[minmax(352px,1fr)_minmax(256px,1fr)]  xl:grid-rows-[auto_minmax(321px,1fr)]"
          >
            <img src={Image2} className="self-end" alt="" />
            <img src={Image3} alt="" />
            <img className="col-span-2" src={Image5} alt="" />
          </div>
          <div className=" flex flex-col gap-8 ">
            <div className="mt-auto flex h-full w-full items-end xl:h-full">
              <img className="object-contain" src={Image4} alt="" />
            </div>
            <img src={Image6} alt="" />
          </div>
        </div>
        <div className="absolute left-1/2 bottom-0 w-20 translate-y-1/3 md:w-28 lg:w-40 xl:w-[240px]">
          <img src={ImagePet} className="animate-bounce" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section3;

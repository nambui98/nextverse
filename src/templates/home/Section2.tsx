import React from 'react';

import {
  Background2,
  Background2Mobile,
  Image1,
  Image1Mobile,
} from '@/utils/Images';

import { ButtonSecond } from '../common/Button';

// type Props = {};

const Section2 = () => {
  return (
    <div
      id="section2"
      className="container mx-auto mt-12 px-4 md:mt-32 md:px-0 xl:px-32"
    >
      <div className="relative">
        <img
          src={Background2}
          className="hidden md:block"
          width={'100%'}
          alt=""
        />
        <img
          src={Background2Mobile}
          className="block md:hidden"
          width={'100%'}
          alt=""
        />
        <div
          className="left-30 
      absolute
      -inset-y-5
  left-0 
      md:-top-2 
      md:left-0
      md:bottom-3
      lg:-top-10

     lg:bottom-3 
     xl:left-0
     xl:bottom-4
     2xl:bottom-5"
        >
          <img
            src={Image1}
            className="hidden h-full w-full object-contain md:block"
            alt=""
          />
          <img
            src={Image1Mobile}
            className="block h-full w-full object-contain md:hidden"
            alt=""
          />
        </div>
        <div className="absolute top-8 left-0 right-6 ml-0 sm:-ml-5 md:top-6 md:left-1/2 md:right-0 lg:top-16 lg:ml-8">
          <div className="flex flex-col items-end md:items-start">
            <p className="mb-2 text-right font-ArcaMajora3 text-lg font-extrabold text-dark-200 sm:mb-0 md:mb-2 md:text-left md:text-2xl lg:text-[32px] 2xl:mb-4">
              OUR CORE VALUES - B.E.S.T
            </p>
            <ul className="text-right font-Cabin text-base font-medium leading-8 text-dark-200 md:text-left md:text-lg md:leading-10 lg:text-2xl">
              <li>
                <p>[B]order-less</p>
              </li>
              <li>
                <p>[E]ducation & [E]ntertainment</p>
              </li>
              <li>
                <p>[S]imple but [S]urpass</p>
              </li>
              <li>
                <p>[T]ogether</p>
              </li>
            </ul>
            <div>
              <ButtonSecond
                className="leading-0 mt-4 flex 
          items-center
          py-4
         px-2 
         sm:mt-2
         sm:py-2
         md:p-4
         md:leading-8
         lg:py-4
         xl:mt-6
         2xl:mt-8"
              >
                <p className="font-Arena text-xs font-normal md:text-base  xl:text-2xl">
                  Join our community{' '}
                </p>
                <i className="bx bx-right-arrow-alt bx-fade-left animation-duration pl-4 text-2xl xl:text-4xl"></i>
              </ButtonSecond>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

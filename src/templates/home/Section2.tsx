import React from 'react';

import { Background2, Image1 } from '@/utils/Images';

import { ButtonSecond } from '../common/Button';

// type Props = {};

const Section2 = () => {
  return (
    <div className="container relative mx-auto mt-32 px-32">
      <img src={Background2} width={'100%'} alt="" />
      <div className="absolute -top-10 left-40 bottom-5">
        <img src={Image1} className="h-full w-full object-contain" alt="" />
      </div>
      <div className="absolute top-16 left-1/2 ml-8">
        <div>
          <p className="mb-4 font-ArcaMajora3 text-[32px] font-bold text-dark-200">
            OUR CORE VALUES - B.E.S.T
          </p>
          <ul className="font-Cabin text-2xl font-medium leading-10 text-dark-200">
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
          <ButtonSecond className="mt-8 flex items-center">
            <p className="font-Arena text-2xl font-normal">
              Join our community{' '}
            </p>
            <i className="bx bx-right-arrow-alt bx-fade-left animation-duration pl-4 text-4xl"></i>
          </ButtonSecond>
        </div>
      </div>
    </div>
  );
};

export default Section2;

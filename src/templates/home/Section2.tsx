import { Background2, Image1 } from '@/utils/Images'
import React from 'react'
import { ButtonSecond } from '../common/Button'
type Props = {}

const Section2 = (props: Props) => {
  return (
    <div className='container mx-auto mt-32 px-32 relative'>
      <img src={Background2} width={"100%"} alt="" />
      <div className='absolute -top-10 left-40 bottom-5'>
        <img src={Image1} className='object-contain w-full h-full' alt="" />
      </div>
      <div className='absolute top-16 left-1/2 ml-8'>
        <div>
          <p className='font-ArcaMajora3 font-bold text-[32px] text-dark-200 mb-4'>
            OUR CORE VALUES - B.E.S.T
          </p>
          <ul className='font-Cabin font-medium text-2xl text-dark-200 leading-10'>
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
          <ButtonSecond className='flex items-center mt-8'><p className='font-normal font-Arena text-2xl'>Join our community  </p><i className='bx bx-right-arrow-alt bx-fade-left animation-duration text-4xl pl-4'></i></ButtonSecond>
        </div>
      </div>

    </div>
  )
}

export default Section2
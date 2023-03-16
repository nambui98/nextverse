import { Background2, Background3, Image1, ImageSubcribe, Logo } from '@/utils/Images'
import React from 'react'
import { ButtonSecond } from '../common/Button'

type Props = {}

const Section4 = (props: Props) => {
  return (
 <div className='container mx-auto mt-32 px-32 relative'>
      <img src={Background3} width={"100%"} alt="" />
      <div className='absolute top-40 left-40 w-1/4'>
        <img src={ImageSubcribe} className='object-contain w-full h-full' alt="" />
      </div>
      <div className='absolute top-10 left-1/3 right-32 ml-14 mr-8'>
        <div>
          <div className='flex items-baseline'>
          <span className='font-ArcaMajora3 font-bold text-[32px] uppercase text-dark-200 mb-2 mr-6'>
            Follow
          </span>
            <img src={Logo} alt="" />
          </div>
          <p className='font-ArcaMajora3 font-bold text-5xl uppercase text-dark-200 text-center mb-2'>& get lastest update!</p>
          <form >
            <div className='flex flex-col mt-4'>
              <label htmlFor="email" className='font-ArcaMajora3 font-bold text-2xl text-dark-200'>Email</label>
              <input type="email" name="email" id="email" className='mt-4 input' placeholder='Email' />
            </div>
            <div className='w-full flex gap-3 justify-between'>
 <div className='w-[30%] flex flex-col mt-4'>
              <label htmlFor="day" className='font-ArcaMajora3 font-bold text-2xl text-dark-200'>Date of birth </label>
              <input type="text" name="day" id="day" className='mt-4 input' placeholder='Day' />
 
            </div>
 <div className='w-[30%] flex flex-col mt-4'>
              <label htmlFor="month" className='font-ArcaMajora3 font-bold text-2xl text-transparent'> Month </label>
              <input type="text" name="month" id="month" className='mt-4 input' placeholder='Month' />
 
            </div>
  <div className='w-[30%] flex flex-col mt-4'>
              <label htmlFor="year" className='font-ArcaMajora3 font-bold text-2xl text-dark-200'>Date of birth </label>
              <input type="text" name="year" id="year" className='mt-4 input' placeholder='Year' />
 
            </div>
 
           </div>
<div className='flex'>
 <label className="wrapCheckbox">
  I have read and agree to the Privacy Policy of NextVerse.
  <input type="checkbox"/>
  <span className="checkmark"></span>
</label> 
</div>
          
          </form>
          <ButtonSecond className='flex items-center mt-8'><p className='font-normal font-Arena text-2xl'>Join our community  </p><i className='bx bx-right-arrow-alt bx-fade-left animation-duration text-4xl pl-4'></i></ButtonSecond>
        </div>
      </div>

    </div>
  )
}

export default Section4
import { Image2, Image3, Image4, Image5, Image6, ImagePet } from '@/utils/Images'
import React from 'react'

type Props = {}

const Section3 = (props: Props) => {
  return (
    <div className='container mx-auto mt-32 px-32 relative'>
      <div className="flex gap-8">
        <div className='grid gap-8 grid-rows-[auto_minmax(321px,1fr)] grid-cols-[minmax(352px,1fr)_minmax(256px,1fr)]' >
          <img src={Image2} className='self-end' alt="" />
          <img src={Image3} alt="" />
          <img className='col-span-2' src={Image5} alt="" />
        </div>
        <div className=' flex flex-col gap-8 '>
          <div className='h-[400px] w-full mt-auto flex items-end'>
            <img className='object-contain' src={Image4} alt="" />
          </div>
          <img src={Image6} alt="" />
        </div>
      </div>
      <div className='absolute w-[240px] left-1/2 bottom-0 transform translate-y-1/3'>
        <img src={ImagePet} className='animate-bounce' alt="" />
      </div>
    </div>
  )
}

export default Section3
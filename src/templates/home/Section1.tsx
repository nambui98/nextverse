import React from 'react'
import Image from 'next/image'
import ButtonGroupSocial from '../common/ButtonGroupSocial'
import { Logo } from '@/utils/Images'
import { Button } from '../common/Button'
type Props = {}

function Section1({ }: Props) {
  return (
    <div className={`relative h-screen bg-[url('/assets/images/background-header.png')] bg-cover bg-no-repeat bg-top`}>
      <div className='pt-10 pr-10 flex justify-end'>
        <ButtonGroupSocial color='white' />
      </div>
      <div className="mt-10 mr-[25rem] ml-auto w-[544px] flex flex-col items-center">
        <Image
          alt="Logo" src={Logo}
          width={544}
          height={102}
        />
        <p className='mt-10 font-semibold text-base font-BeVietNamPro text-dark-100 text-center'>A pioneer Green Metaverse where together we immerse, learn & build our eco-friendly worlds.</p>
        <Button className='mt-10'>
          <p className='text-[32px] uppercase font-Arena font-normal text-white'>
            <i className='bx bxs-bell-ring mr-2 bx-tada' />
            subscribe
          </p>
        </Button>
      </div>
    </div>
  )
}

export default Section1
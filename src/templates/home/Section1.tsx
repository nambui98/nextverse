import Image from 'next/image';
import React from 'react';

import { Logo } from '@/utils/Images';

import { Button } from '../common/Button';
import ButtonGroupSocial from '../common/ButtonGroupSocial';

// type Props = {};

function Section1() {
  return (
    <div className="bg-header relative h-screen bg-cover bg-top bg-no-repeat">
      <div className="flex justify-end pt-10 pr-10">
        <ButtonGroupSocial color="white" />
      </div>
      <div className="mt-10 mr-[25rem] ml-auto flex w-[544px] flex-col items-center">
        <Image alt="Logo" src={Logo} width={544} height={102} />
        <p className="mt-10 text-center font-BeVietNamPro text-base font-semibold text-dark-100">
          A pioneer Green Metaverse where together we immerse, learn & build our
          eco-friendly worlds.
        </p>
        <Button className="mt-10">
          <p className="font-Arena text-[32px] font-normal uppercase text-white">
            <i className="bx bxs-bell-ring bx-tada mr-2" />
            subscribe
          </p>
        </Button>
      </div>
    </div>
  );
}

export default Section1;

import type { ReactNode } from 'react';
import Image from 'next/image'

import { AppConfig } from '@/utils/AppConfig';
import { Logo  } from '@/utils/Images';
import ButtonGroupSocial from './common/ButtonGroupSocial';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased bg-bg-primary bg-fixed bg-no-repeat bg-cover bg-center">
    {props.meta}

    <div>
      {/* <header className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-ArcaMajora3">
            {AppConfig.title}
          </h1>
          <i className="bx bxl-facebook-square"></i>
        </div>
      </header> */}
      <main className="content text-xl">{props.children}</main>
      <footer className="container mx-auto px-4 mt-32 py-20 text-center text-sm">
        <Image alt='nextverse'
          width={544}
          height={102}
          className='mx-auto'
          src={Logo} />
        <div className='mt-10'>
          <ButtonGroupSocial/>
        </div>
        <p className='text-2xl text-dark-100 font-BeVietNamPro font-semibold uppercase mt-20'>
          © {AppConfig.company}, {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  </div>
);

export { Main };

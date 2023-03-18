import Link from 'next/link';

import { BackgroundHeaderMobile, Logo } from '@/utils/Images';

import { Button } from '../common/Button';
import ButtonGroupSocial from '../common/ButtonGroupSocial';

// type Props = {};

function Section1() {
  // const router = useRouter();
  return (
    <div className="md:bg-none relative bg-cover bg-top bg-no-repeat md:h-[calc(100vh-40px)] md:bg-bg-header">
      <img
        alt="Logo"
        className="block md:hidden"
        src={BackgroundHeaderMobile}
      />
      <div className="hidden justify-end pt-10 pr-10 md:flex">
        <ButtonGroupSocial color="white" />
      </div>
      <div
        className="
      mt-6
      ml-auto
      flex
      flex-col
     items-center 
     md:mt-5 
     md:mr-5 
     md:w-[544px]
      lg:mr-[7%] xl:mt-5 xl:mr-[17%] 2xl:mt-10 2xl:mr-[17%]"
      >
        <img
          alt="Logo"
          src={Logo}
          className="w-[280px] md:h-[102px] md:w-[544px] "
        />
        <p className="mx-4 mt-6 text-center font-BeVietNamPro text-sm font-semibold leading-6 text-dark-100 md:mx-0 md:mt-10 md:text-base">
          A pioneer Green Metaverse where together we immerse, learn & build our
          eco-friendly worlds.
        </p>
        <Link href="#subcribe" scroll={false}>
          <Button className="mt-10 flex items-center font-Arena  text-2xl font-normal uppercase leading-6 text-white md:text-[32px] ">
            <i className="bx bxs-bell bx-tada mr-2" />
            <p className="">subscribe</p>
          </Button>
        </Link>
      </div>
      <div
        className="
      absolute
      left-8
      bottom-0 
      hidden 
     translate-y-1/2
     sm:left-[8%] 
      md:left-[12%]
    md:block
    lg:left-[17%]
      xl:left-[20%]  2xl:left-1/4"
      >
        <Link href={'/#section2'} scroll={false}>
          <button className="shadow-[0_0_0_rgba(204,169,44, 0.4)] h-16 w-16 animate-circle rounded-full bg-orange-100 p-3 shadow-black">
            <i className="bx bx-chevron-down rounded-full bg-white p-1 text-3xl text-orange-100"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Section1;

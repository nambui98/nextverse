import { clsx } from 'clsx';

import { Background3, Background4, ImageSubcribe, Logo } from '@/utils/Images';

import { ButtonTertiary } from '../common/Button';
import CheckBox from '../common/CheckBox';
// type Props = {};

const Section4 = () => {
  //  const isDesktopOrLaptopOrTablet = useMediaQuery({
  //     query: '(min-width: 768px)'
  //   })

  // console.log(isDesktopOrLaptopOrTablet);

  return (
    <div
      id="subcribe"
      className="container mx-auto mt-12 px-4 md:mt-32 md:px-0 xl:px-32"
    >
      <div className="relative">
        <img
          className="hidden md:block"
          src={Background3}
          width={'100%'}
          alt=""
        />
        <img
          className="block md:hidden"
          src={Background4}
          width={'100%'}
          alt=""
        />
        <div className="absolute top-6  left-40 hidden w-[329px] lg:top-6 lg:left-10 lg:block xl:top-10 2xl:top-40">
          <img
            src={ImageSubcribe}
            className="h-full w-full object-contain"
            alt=""
          />
        </div>
        <div
          className={clsx(
            'absolute',
            'top-10 mx-8 sm:ml-8 md:top-6 lg:left-1/3 lg:right-32 lg:ml-24 xl:ml-14 2xl:top-10 2xl:ml-24',
            'inset-x-0 sm:top-6 md:right-10'
          )}
        >
          <div>
            <div className="flex items-baseline justify-start sm:justify-center">
              <span className="mb-2 mr-2 font-ArcaMajora3 text-base font-bold uppercase text-dark-200 sm:text-2xl lg:mr-4 lg:text-2xl xl:mr-6 xl:text-[32px]">
                Follow
              </span>
              <img
                className="h-11 sm:h-16 lg:h-20 2xl:h-full"
                src={Logo}
                alt=""
              />
            </div>
            <p className="mb-2 text-center font-ArcaMajora3 text-2xl font-bold uppercase text-dark-200 md:text-2xl lg:text-4xl 2xl:text-5xl">
              & get lastest update!
            </p>
            <form>
              <div className="mt-6 flex flex-col md:mt-0 2xl:mt-4">
                <label
                  htmlFor="email"
                  className="font-ArcaMajora3 text-xl font-bold text-dark-200 lg:text-2xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input mt-2 md:mt-1 lg:mt-4"
                  placeholder="Email"
                />
              </div>
              <div className="mt-6 md:mt-2 lg:mt-4">
                <label
                  htmlFor="day"
                  className="font-ArcaMajora3 text-xl font-bold  text-dark-200 lg:text-2xl"
                >
                  Date of birth{' '}
                </label>
                <div className="flex w-full justify-between ">
                  <div className=" flex w-[32%] flex-col">
                    <input
                      type="text"
                      name="day"
                      id="day"
                      className="input mt-2 md:mt-1 lg:mt-4"
                      placeholder="Day"
                    />
                  </div>
                  <div className="flex w-[32%] flex-col">
                    <input
                      type="text"
                      name="month"
                      id="month"
                      className="input mt-2 md:mt-1 lg:mt-4"
                      placeholder="Month"
                    />
                  </div>
                  <div className="flex w-[32%] flex-col">
                    <input
                      type="text"
                      name="year"
                      id="year"
                      className="input mt-2 md:mt-1 lg:mt-4"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center lg:mt-7">
                <CheckBox name="privacy" />
                <span className="ml-2 font-Cabin text-base font-medium text-dark-200">
                  I have read and agree to the Privacy Policy of NextVerse.
                </span>
              </div>
              <div className="mt-6 flex items-center lg:mt-6">
                <CheckBox name="receive" />
                <span className="ml-2 font-Cabin text-base font-medium text-dark-200">
                  Receive news and exclusive offers through the NextVerse
                  newsletter.
                </span>
              </div>
            </form>
            <ButtonTertiary
              className="mt-6 flex items-center font-Arena text-2xl font-normal leading-8 hover:border-white 
          hover:text-white
          sm:mx-auto md:mt-2 lg:mx-0
          lg:mt-10
          lg:text-3xl
          "
            >
              <i className="bx bxs-bell bx-tada group-hover:bx-tada-hover mr-2"></i>
              <p className="">subcribe</p>
            </ButtonTertiary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;

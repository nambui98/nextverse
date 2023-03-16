import { Background3, ImageSubcribe, Logo } from '@/utils/Images';

import { ButtonSecond } from '../common/Button';

// type Props = {};

const Section4 = () => {
  return (
    <div className="container relative mx-auto mt-32 px-32">
      <img src={Background3} width={'100%'} alt="" />
      <div className="absolute top-40 left-40 w-1/4">
        <img
          src={ImageSubcribe}
          className="h-full w-full object-contain"
          alt=""
        />
      </div>
      <div className="absolute top-10 left-1/3 right-32 ml-14 mr-8">
        <div>
          <div className="flex items-baseline">
            <span className="mb-2 mr-6 font-ArcaMajora3 text-[32px] font-bold uppercase text-dark-200">
              Follow
            </span>
            <img src={Logo} alt="" />
          </div>
          <p className="mb-2 text-center font-ArcaMajora3 text-5xl font-bold uppercase text-dark-200">
            & get lastest update!
          </p>
          <form>
            <div className="mt-4 flex flex-col">
              <label
                htmlFor="email"
                className="font-ArcaMajora3 text-2xl font-bold text-dark-200"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input mt-4"
                placeholder="Email"
              />
            </div>
            <div className="flex w-full justify-between gap-3">
              <div className="mt-4 flex w-[30%] flex-col">
                <label
                  htmlFor="day"
                  className="font-ArcaMajora3 text-2xl font-bold text-dark-200"
                >
                  Date of birth{' '}
                </label>
                <input
                  type="text"
                  name="day"
                  id="day"
                  className="input mt-4"
                  placeholder="Day"
                />
              </div>
              <div className="mt-4 flex w-[30%] flex-col">
                <label
                  htmlFor="month"
                  className="font-ArcaMajora3 text-2xl font-bold text-transparent"
                >
                  {' '}
                  Month{' '}
                </label>
                <input
                  type="text"
                  name="month"
                  id="month"
                  className="input mt-4"
                  placeholder="Month"
                />
              </div>
              <div className="mt-4 flex w-[30%] flex-col">
                <label
                  htmlFor="year"
                  className="font-ArcaMajora3 text-2xl font-bold text-dark-200"
                >
                  Date of birth{' '}
                </label>
                <input
                  type="text"
                  name="year"
                  id="year"
                  className="input mt-4"
                  placeholder="Year"
                />
              </div>
            </div>
            <div className="flex">
              <label className="wrapCheckbox">
                I have read and agree to the Privacy Policy of NextVerse.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
          </form>
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

export default Section4;

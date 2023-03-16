import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const fontArcaMajora3 = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Arcamajora3/ArcaMajora3-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Arcamajora3/ArcaMajora3-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-arcaMajora3',
});
const fontBeVietNamPro = localFont({
  src: [
    {
      path: '../../public/assets/fonts/BeVietnamPro/BeVietnamPro-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/BeVietnamPro/BeVietnamPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/BeVietnamPro/BeVietnamPro-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/BeVietnamPro/BeVietnamPro-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-bevietnampro',
});
const fontCabin = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Cabin/Cabin-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Cabin/Cabin-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Cabin/Cabin-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Cabin/Cabin-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-cabin',
});
const fontArena = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Arena/Arena.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-arena',
});
export const fonts = `${fontArcaMajora3.variable} ${fontBeVietNamPro.variable} ${fontCabin.variable} ${fontArena.variable}`;

import 'boxicons/css/boxicons.min.css';
import '../styles/global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { AppProps } from 'next/app';

import { fonts } from '@/utils/Fonts';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={fonts}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;

import 'boxicons/css/boxicons.min.css';
import '../styles/global.css';

import type { AppProps } from 'next/app';

import { fonts } from '@/utils/Fonts';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={fonts}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;

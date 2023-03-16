import { fonts } from '@/utils/Fonts';
import type { AppProps } from 'next/app';

import 'boxicons/css/boxicons.min.css';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={fonts}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;

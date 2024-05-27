import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const sfPro = localFont({
  src: [
    {
      path: '../public/font/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro',
});

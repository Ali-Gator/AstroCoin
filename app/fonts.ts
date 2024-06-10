import localFont from 'next/font/local';

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

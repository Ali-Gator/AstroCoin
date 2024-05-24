import { ProvidersWrapper } from '@/helpers/providers';
import classNames from 'classnames';
import type { Metadata } from 'next';
import './font.css';
import { inter, sfPro } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'XSYCOIN TON',
  description: 'Site about XSYCOIN',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          sfPro.variable,
          inter.className,
          'min-h-tg-viewport-stable-height',
        )}
      >
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}

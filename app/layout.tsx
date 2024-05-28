import { ProvidersWrapper } from '@/helpers/providers';
import classNames from 'classnames';
import type { Metadata, Viewport } from 'next';
import './font.css';
import { inter, sfPro } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'XSYCOIN TON',
  description: 'Site about XSYCOIN',
};

export const viewport: Viewport = {
  userScalable: false,
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
          'min-h-screen select-none',
        )}
      >
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import './font.css';
import { ProvidersWrapper } from '@/helpers/providers';
import classNames from 'classnames';

const inter = Inter({
  subsets: ['latin'],
});

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
      <body className={classNames(inter.className, 'min-h-screen')}>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}

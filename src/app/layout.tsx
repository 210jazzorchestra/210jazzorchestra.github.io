import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';

export const metadata: Metadata = {
  title: '210 Jazz Orchestra',
  description: 'San Antonio, TX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={roboto.variable}>
        <div className='flex flex-col items-center min-h-screen min-w-screen lg:p-8 pb-10 p-4'>
          <div className='max-w-screen-lg w-full'>{children}</div>
        </div>
      </body>
    </html>
  );
}

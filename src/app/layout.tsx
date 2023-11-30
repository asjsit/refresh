import type { Metadata } from 'next';
import type { ChildProps } from '@/types';
import './globals.css';
import { fontsVariable } from '@/assets/fonts';

export const metadata: Metadata = {
  title: 'refresh.',
  description: 'Created by https://t.me/azikulov',
};

export default function RootLayout({ children }: ChildProps) {
  return (
    <html lang='ru'>
      <body className={fontsVariable}>{children}</body>
    </html>
  );
}

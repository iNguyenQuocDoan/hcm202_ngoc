import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import './globals.css';
import { Header } from '@/shared/components/layout';

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-body',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vượt Bão 1991 — Bài Học Từ Khủng Hoảng & Tư Duy Đổi Mới',
  description:
    'Vận dụng tư tưởng Hồ Chí Minh trong giai đoạn khủng hoảng 1991 — bối cảnh, đường lối, và bài học cho hôm nay.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${lora.variable} snap-root h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink selection:bg-flame selection:text-paper">
        <Header />
        {children}
      </body>
    </html>
  );
}

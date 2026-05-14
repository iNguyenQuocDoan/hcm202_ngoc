import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'latin-ext'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Vượt Bão 1991 — Bài Học Từ Khủng Hoảng Và Tư Duy Đổi Mới',
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-stone-50 text-stone-900">{children}</body>
    </html>
  );
}

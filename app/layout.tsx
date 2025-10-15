import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: '라헬 코칭 교육원 | 교육 문의',
  description:
    '라헬코칭교육원의 교육 과정, 강의 의뢰, 기업 연수 상담을 위한 맞춤 CS 센터입니다.',
  openGraph: {
    title: '라헬 코칭 교육원 | 교육 문의',
    description:
      '라헬코칭교육원의 교육 과정, 강의 의뢰, 기업 연수 상담을 위한 맞춤 CS 센터입니다.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-primary-100 text-slate-900">
        {children}
      </body>
    </html>
  );
}

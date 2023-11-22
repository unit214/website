import { Metadata } from 'next';
import { ReactNode } from 'react';

import '@/styles/globals.css';

import { GoatCounter } from '@/components/GoatCounter';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL('https://unit214.dev'),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <GoatCounter />
      <body>{children}</body>
    </html>
  );
}

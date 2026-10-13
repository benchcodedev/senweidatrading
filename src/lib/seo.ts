import { Metadata } from 'next';
import { companyConfig } from '@/config/company';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.senweidatrading.com';

export function buildPageMetadata({
  locale,
  pathname,
  title,
  description,
  ogImage = '/images/hero.jpg',
}: {
  locale: 'en' | 'zh';
  pathname: string; // e.g. '', '/about', '/products'
  title: string;
  description: string;
  ogImage?: string;
}): Metadata {
  const cleanPath = pathname === '/' ? '' : pathname;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath}`;
  const enUrl = `${SITE_URL}/en${cleanPath}`;
  const zhUrl = `${SITE_URL}/zh${cleanPath}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        'zh-CN': zhUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: companyConfig.name[locale],
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: companyConfig.name[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/logo.png',
    },
  };
}

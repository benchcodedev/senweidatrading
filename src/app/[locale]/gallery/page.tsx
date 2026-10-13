import React from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import GalleryView from '@/components/GalleryView';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return buildPageMetadata({
    locale: locale as 'en' | 'zh',
    pathname: '/gallery',
    title: t('galleryTitle'),
    description: t('galleryDescription'),
    ogImage: '/images/factory-2.jpg',
  });
}

export default function GalleryPage() {
  const t = useTranslations('Gallery');

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-forest text-cream py-14 lg:py-20 border-b border-brass/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <span className="font-mono text-xs uppercase tracking-widest text-brass block mb-2 font-bold">
            01 // {t('eyebrow')}
          </span>
          <h1 className="text-fluid-h1 font-serif font-bold text-cream max-w-3xl">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mt-4 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-14 lg:py-20 bg-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <GalleryView />
        </div>
      </section>
    </div>
  );
}

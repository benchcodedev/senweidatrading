'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { X, ChevronLeft, ChevronRight, Play, ArrowUpRight, Maximize2 } from 'lucide-react';
import { companyConfig } from '@/config/company';

interface GalleryItem {
  id: string;
  category: 'production' | 'products' | 'loading';
  src: string;
  titleKey: string;
  captionKey: string;
  aspect: string;
}

export default function GalleryView() {
  const locale = useLocale() as 'en' | 'zh';
  const t = useTranslations('Gallery');
  const [filter, setFilter] = useState<'all' | 'production' | 'products' | 'loading'>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      category: 'production',
      src: '/images/factory-1.jpg',
      titleKey: 'items.img1Title',
      captionKey: 'items.img1Capt',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'g2',
      category: 'products',
      src: '/images/formwork-1.jpg',
      titleKey: 'items.img2Title',
      captionKey: 'items.img2Capt',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'g3',
      category: 'production',
      src: '/images/process-cutting.jpg',
      titleKey: 'items.img3Title',
      captionKey: 'items.img3Capt',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'g4',
      category: 'production',
      src: '/images/factory-2.jpg',
      titleKey: 'items.img4Title',
      captionKey: 'items.img4Capt',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'g5',
      category: 'products',
      src: '/images/h20-beam-1.jpg',
      titleKey: 'items.img5Title',
      captionKey: 'items.img5Capt',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'g6',
      category: 'products',
      src: '/images/hardwood-1.jpg',
      titleKey: 'items.img6Title',
      captionKey: 'items.img6Capt',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 'g7',
      category: 'loading',
      src: '/images/qc-1.jpg',
      titleKey: 'items.img7Title',
      captionKey: 'items.img7Capt',
      aspect: 'aspect-[16/10]',
    },
    {
      id: 'g8',
      category: 'loading',
      src: '/images/loading-1.jpg',
      titleKey: 'items.img8Title',
      captionKey: 'items.img8Capt',
      aspect: 'aspect-[4/3]',
    },
  ];

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1
    );
  };

  return (
    <div className="space-y-16">
      {/* Category Tabs */}
      <div className="border border-ink/15 bg-white p-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`min-h-[44px] px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
            filter === 'all'
              ? 'bg-forest text-cream font-bold border border-brass/50'
              : 'bg-cream text-ink hover:bg-cream-dark border border-ink/10'
          }`}
        >
          {t('filters.all')}
        </button>
        <button
          type="button"
          onClick={() => setFilter('production')}
          className={`min-h-[44px] px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
            filter === 'production'
              ? 'bg-forest text-cream font-bold border border-brass/50'
              : 'bg-cream text-ink hover:bg-cream-dark border border-ink/10'
          }`}
        >
          {t('filters.production')}
        </button>
        <button
          type="button"
          onClick={() => setFilter('products')}
          className={`min-h-[44px] px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
            filter === 'products'
              ? 'bg-forest text-cream font-bold border border-brass/50'
              : 'bg-cream text-ink hover:bg-cream-dark border border-ink/10'
          }`}
        >
          {t('filters.products')}
        </button>
        <button
          type="button"
          onClick={() => setFilter('loading')}
          className={`min-h-[44px] px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
            filter === 'loading'
              ? 'bg-forest text-cream font-bold border border-brass/50'
              : 'bg-cream text-ink hover:bg-cream-dark border border-ink/10'
          }`}
        >
          {t('filters.loading')}
        </button>
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxIndex(idx)}
            className="group cursor-pointer bg-white border border-ink/15 p-2 shadow-sm hover:border-forest transition-all"
          >
            <div className={`relative ${item.aspect} w-full overflow-hidden duotone-forest`}>
              <Image
                src={item.src}
                alt={t(item.titleKey)}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="p-3 bg-forest/90 text-brass rounded-full">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="p-3 space-y-1">
              <h3 className="font-serif text-sm font-bold text-ink group-hover:text-forest transition-colors leading-snug">
                {t(item.titleKey)}
              </h3>
              <p className="text-[11px] text-ink-muted leading-tight line-clamp-2">
                {t(item.captionKey)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Reels Video Section */}
      <div className="border border-ink/15 bg-cream-dark p-8 sm:p-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink/15 pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-forest font-bold block mb-1">
              {t('reels.sectionNumber')} // {t('reels.eyebrow')}
            </span>
            <h2 className="text-fluid-h2 font-serif font-bold text-ink">
              {t('reels.title')}
            </h2>
            <p className="text-sm text-ink-muted mt-2 max-w-xl">
              {t('reels.subtitle')}
            </p>
          </div>
          <a
            href={companyConfig.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-5 py-2.5 bg-forest hover:bg-forest-light text-cream font-mono text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors flex-shrink-0"
          >
            <span>{t('reels.followCta')}</span>
            <ArrowUpRight className="w-4 h-4 text-brass" />
          </a>
        </div>

        {/* Video Reel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: t('reels.reel1Title'),
              duration: t('reels.reel1Duration'),
              thumb: '/images/process-pressing.jpg',
            },
            {
              title: t('reels.reel2Title'),
              duration: t('reels.reel2Duration'),
              thumb: '/images/qc-1.jpg',
            },
            {
              title: t('reels.reel3Title'),
              duration: t('reels.reel3Duration'),
              thumb: '/images/loading-1.jpg',
            },
          ].map((reel) => (
            <div
              key={reel.title}
              className="bg-white border border-ink/15 p-3 space-y-3 group hover:border-forest transition-colors"
            >
              <div className="relative aspect-[9/14] w-full overflow-hidden bg-forest-dark flex items-center justify-center duotone-forest">
                <Image
                  src={reel.thumb}
                  alt={reel.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-forest/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brass/90 text-ink flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-ink ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[10px] bg-ink/80 text-cream px-2 py-0.5">
                  {reel.duration}
                </div>
              </div>
              <div className="px-1">
                <h4 className="font-serif text-sm font-bold text-ink leading-snug">
                  {reel.title}
                </h4>
                <span className="font-mono text-[10px] text-ink-subtle block mt-1">
                  {t('reels.placeholderNote')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Preview"
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveLightboxIndex(null)}
            aria-label={t('lightbox.close')}
            className="absolute top-4 right-4 z-50 min-h-[44px] min-w-[44px] inline-flex items-center justify-center bg-forest text-cream border border-brass hover:text-brass"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t('lightbox.prev')}
            className="absolute left-4 z-50 min-h-[44px] min-w-[44px] inline-flex items-center justify-center bg-forest text-cream border border-brass hover:text-brass"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={t('lightbox.next')}
            className="absolute right-4 z-50 min-h-[44px] min-w-[44px] inline-flex items-center justify-center bg-forest text-cream border border-brass hover:text-brass"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div
            className="max-w-4xl w-full bg-forest border-2 border-brass p-4 text-cream space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-dark">
              <Image
                src={filteredItems[activeLightboxIndex].src}
                alt={t(filteredItems[activeLightboxIndex].titleKey)}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-brass/25 pt-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-cream">
                  {t(filteredItems[activeLightboxIndex].titleKey)}
                </h3>
                <p className="text-xs text-cream/80 mt-1">
                  {t(filteredItems[activeLightboxIndex].captionKey)}
                </p>
              </div>
              <span className="font-mono text-xs text-brass flex-shrink-0">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { products, productCategories, ProductCategory } from '@/data/products';
import { ArrowUpRight, ArrowRight, Layers, FileText } from 'lucide-react';

export default function ProductCatalogView() {
  const locale = useLocale() as 'en' | 'zh';
  const t = useTranslations('Products');
  const commonT = useTranslations('Common');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="border border-ink/15 bg-white p-3 sm:p-4 flex flex-wrap items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-ink-subtle mr-2 font-semibold hidden md:inline">
          {t('filterLabel')}
        </span>
        {productCategories.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`min-h-[44px] px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                active
                  ? 'bg-forest text-cream font-bold border border-brass/50'
                  : 'bg-cream text-ink hover:bg-cream-dark border border-ink/10'
              }`}
            >
              {cat.label[locale]}
            </button>
          );
        })}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="bg-white border border-ink/15 flex flex-col justify-between group hover:border-forest hover:shadow-lg transition-all"
          >
            <div>
              {/* Product Thumbnail with Duotone Overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden duotone-forest border-b border-ink/10">
                <Image
                  src={product.images[0] || '/images/formwork-1.jpg'}
                  alt={product.name[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-forest text-cream font-mono text-[10px] px-2.5 py-1 tracking-wider uppercase font-semibold">
                  {product.code}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-ink group-hover:text-forest transition-colors leading-snug">
                  {product.name[locale]}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed line-clamp-3">
                  {product.shortDescription[locale]}
                </p>

                {/* Key specs highlight */}
                <div className="pt-3 border-t border-ink/10 space-y-1.5 font-mono text-[11px]">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-ink-subtle uppercase">THICKNESS:</span>
                    <span className="text-forest font-semibold text-right">
                      {product.specs[0]?.value[locale]}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-ink-subtle uppercase">DIMENSIONS:</span>
                    <span className="text-forest font-semibold text-right">
                      {product.specs[1]?.value[locale]}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 border-t border-ink/10 flex items-center justify-between gap-3">
              <Link
                href={`/products/${product.slug}`}
                className="min-h-[44px] inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-forest font-bold editorial-link"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t('inspectBtn')}</span>
              </Link>
              <Link
                href={`/contact?product=${product.slug}`}
                className="min-h-[44px] px-3.5 py-2 bg-forest hover:bg-forest-light text-cream font-mono text-xs uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
              >
                <span>{t('quoteBtn')}</span>
                <ArrowRight className="w-3.5 h-3.5 text-brass" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* OEM / Custom Inquiry Banner */}
      <div className="border-2 border-forest bg-forest text-cream p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 max-w-2xl">
          <span className="font-mono text-xs text-brass uppercase tracking-widest font-bold block">
            OEM & ODM TAILORED SPECIFICATIONS
          </span>
          <h3 className="font-serif text-2xl font-bold text-cream">
            {t('customOrderBannerTitle')}
          </h3>
          <p className="text-xs sm:text-sm text-cream/80">
            {t('customOrderBannerDesc')}
          </p>
        </div>
        <Link
          href="/contact"
          className="min-h-[48px] px-7 py-3 bg-brass hover:bg-brass-light text-ink font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors flex-shrink-0"
        >
          <span>{t('customOrderBannerCta')}</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Home, Package } from 'lucide-react';

export default function NotFoundPage() {
  const t = useTranslations('NotFound');

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-cream">
      <div className="max-w-xl w-full border-2 border-forest bg-white p-8 sm:p-14 text-center space-y-6 shadow-xl">
        <span className="font-mono text-xs uppercase tracking-widest text-film font-bold block">
          {t('code')}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
          {t('title')}
        </h1>
        <p className="text-sm text-ink-muted leading-relaxed max-w-md mx-auto">
          {t('description')}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="min-h-[48px] px-6 py-3 bg-forest hover:bg-forest-light text-cream font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 border border-brass/40 transition-colors w-full sm:w-auto justify-center"
          >
            <Home className="w-4 h-4 text-brass" />
            <span>{t('homeCta')}</span>
          </Link>
          <Link
            href="/products"
            className="min-h-[48px] px-6 py-3 border border-ink/20 hover:border-forest text-ink text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
          >
            <Package className="w-4 h-4 text-forest" />
            <span>{t('productsCta')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

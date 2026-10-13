'use client';

import React, { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter, Locale } from '@/i18n/routing';

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile-bar' | 'mobile-menu';
}

export default function LanguageSwitcher({ variant = 'desktop' }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    // Persist choice in NEXT_LOCALE cookie for 1 year
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;

    const queryString =
      typeof window !== 'undefined' ? window.location.search.replace(/^\?/, '') : '';
    const targetPath = queryString ? `${pathname}?${queryString}` : pathname;

    startTransition(() => {
      router.replace(targetPath, { locale: nextLocale });
    });
  };

  const baseButtonClasses =
    'min-h-[44px] px-2.5 inline-flex items-center justify-center font-mono text-xs uppercase transition-colors duration-200 focus-visible:outline-brass';

  if (variant === 'mobile-menu') {
    return (
      <div
        className="inline-flex items-center border border-brass/40 bg-forest-dark/60 p-1"
        role="group"
        aria-label="Language switcher"
      >
        <button
          type="button"
          onClick={() => switchLocale('en')}
          disabled={isPending}
          aria-current={locale === 'en' ? 'true' : undefined}
          className={`min-h-[44px] px-4 py-2 font-mono text-sm transition-colors ${
            locale === 'en'
              ? 'bg-brass text-ink font-bold'
              : 'text-cream/80 hover:text-brass'
          }`}
        >
          EN · English
        </button>
        <span className="text-brass/40 select-none px-1">|</span>
        <button
          type="button"
          onClick={() => switchLocale('zh')}
          disabled={isPending}
          aria-current={locale === 'zh' ? 'true' : undefined}
          className={`min-h-[44px] px-4 py-2 font-sans text-sm transition-colors ${
            locale === 'zh'
              ? 'bg-brass text-ink font-bold'
              : 'text-cream/80 hover:text-brass'
          }`}
        >
          中文 · 简体
        </button>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center border border-brass/30 bg-forest-dark/50 px-1 ${
        isPending ? 'opacity-60' : ''
      }`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => switchLocale('en')}
        disabled={isPending}
        aria-label="Switch to English"
        aria-current={locale === 'en' ? 'true' : undefined}
        className={`${baseButtonClasses} ${
          locale === 'en'
            ? 'text-brass font-bold underline decoration-brass decoration-2 underline-offset-4'
            : 'text-cream/75 hover:text-cream'
        }`}
      >
        EN
      </button>
      <span className="text-brass/40 text-xs select-none" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => switchLocale('zh')}
        disabled={isPending}
        aria-label="切换到简体中文"
        aria-current={locale === 'zh' ? 'true' : undefined}
        className={`${baseButtonClasses} font-sans ${
          locale === 'zh'
            ? 'text-brass font-bold underline decoration-brass decoration-2 underline-offset-4'
            : 'text-cream/75 hover:text-cream'
        }`}
      >
        中文
      </button>
    </div>
  );
}

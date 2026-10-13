'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { companyConfig } from '@/config/company';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale() as 'en' | 'zh';
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname, locale]);

  // Lock body scroll when full-screen mobile overlay is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { num: '01', href: '/', label: t('home') },
    { num: '02', href: '/about', label: t('about') },
    { num: '03', href: '/products', label: t('products') },
    { num: '04', href: '/quality', label: t('quality') },
    { num: '05', href: '/gallery', label: t('gallery') },
    { num: '06', href: '/contact', label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-forest text-cream border-b border-brass/25 transition-all duration-300 ${
          isScrolled ? 'py-2 shadow-lg bg-forest/95 backdrop-blur-md' : 'py-3.5 lg:py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-3">
          {/* Brand Logo + Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group min-h-[44px] focus-visible:outline-brass"
          >
            <div
              className={`relative rounded-full overflow-hidden border border-brass/50 bg-forest-dark flex-shrink-0 transition-all duration-300 ${
                isScrolled ? 'w-10 h-10' : 'w-11 h-11 sm:w-12 sm:h-12'
              }`}
            >
              <Image
                src="/logo.png"
                alt={companyConfig.name[locale]}
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-serif font-semibold text-base sm:text-lg tracking-tight text-cream group-hover:text-brass transition-colors">
                  {locale === 'zh' ? '森炜达木业' : 'SENWEIDA'}
                </span>
                <span className="hidden sm:inline-block font-mono text-[11px] text-brass/90 border border-brass/30 px-1.5 py-0.5 leading-none">
                  {locale === 'zh' ? 'SENWEIDA' : '森炜达'}
                </span>
              </div>
              <span className="text-[11px] font-mono text-cream/65 tracking-wider uppercase hidden xs:block">
                {t('directExport')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-7"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`min-h-[44px] inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    active ? 'text-brass' : 'text-cream/85 hover:text-cream'
                  }`}
                >
                  <span className="font-mono text-[10px] text-brass/70">
                    {item.num}
                  </span>
                  <span className="editorial-link">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions: Language Switcher + Primary RFQ Button */}
          <div className="hidden xl:flex items-center gap-4">
            <LanguageSwitcher variant="desktop" />
            <Link
              href="/contact"
              className="min-h-[44px] px-5 py-2.5 bg-brass hover:bg-brass-light text-ink font-semibold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
            >
              <span>{t('requestQuote')}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Controls: Compact Language Switcher + Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <LanguageSwitcher variant="mobile-bar" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-fullscreen-menu"
              aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center border border-brass/40 bg-forest-dark/70 text-cream hover:text-brass transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Editorial Overlay Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-fullscreen-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t('menuTitle')}
          className="fixed inset-0 z-50 bg-forest text-cream flex flex-col justify-between overflow-y-auto xl:hidden"
        >
          {/* Top Bar inside Overlay */}
          <div className="border-b border-brass/25 px-4 sm:px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brass/50">
                <Image
                  src="/logo.png"
                  alt={companyConfig.name[locale]}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-brass">
                {t('menuTitle')}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t('closeMenu')}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center border border-brass/40 bg-forest-dark text-cream hover:text-brass"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Center Numbered Directory Links */}
          <nav
            aria-label="Mobile Navigation"
            className="flex-1 px-6 sm:px-10 py-8 flex flex-col justify-center divide-y divide-brass/15"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-4 flex items-baseline justify-between group min-h-[56px] ${
                    active ? 'text-brass' : 'text-cream hover:text-brass'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-brass/80">
                      {item.num}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl font-medium">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 text-brass/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Bottom Controls: Language Switcher + Quick RFQ & WhatsApp */}
          <div className="border-t border-brass/25 bg-forest-dark px-6 sm:px-10 py-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-cream/70">
                {t('languageLabel')}
              </span>
              <LanguageSwitcher variant="mobile-menu" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] px-5 py-3 bg-brass text-ink font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>{t('requestQuote')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${companyConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-5 py-3 border border-brass/50 text-cream hover:border-brass text-sm font-medium flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-brass" />
                <span>WhatsApp: {companyConfig.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { companyConfig } from '@/config/company';
import { products } from '@/data/products';
import { ShieldCheck, ArrowUpRight, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const navT = useTranslations('Navigation');
  const locale = useLocale() as 'en' | 'zh';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream border-t border-brass/30">
      {/* Top Industrial Strip */}
      <div className="border-b border-cream/10 bg-forest-dark">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brass flex-shrink-0" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-wider text-cream/90">
              {t('fscBadgeText')} · {companyConfig.certifications.fscCertificateNumber}
            </span>
          </div>
          <div className="font-mono text-xs text-brass tracking-wider">
            {t('tradeTerms')}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-brass/60 bg-forest flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt={companyConfig.name[locale]}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-xl font-semibold text-cream">
                  {companyConfig.name.en}
                </h2>
                <p className="text-sm text-brass font-medium mt-0.5">
                  {companyConfig.name.zh}
                </p>
              </div>
            </div>

            <p className="text-sm text-cream/75 leading-relaxed max-w-sm">
              {t('description')}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={companyConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] px-3.5 py-2 border border-cream/20 hover:border-brass text-xs font-mono uppercase tracking-wider text-cream/85 hover:text-brass inline-flex items-center gap-2 transition-colors"
              >
                <span>Instagram {companyConfig.contact.instagramUsername}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Directory Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-brass border-b border-cream/10 pb-2.5">
              01 // {t('navigationHeader')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-cream/75 hover:text-brass editorial-link py-1 inline-block">
                  {navT('home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/75 hover:text-brass editorial-link py-1 inline-block">
                  {navT('about')}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-cream/75 hover:text-brass editorial-link py-1 inline-block">
                  {navT('products')}
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-cream/75 hover:text-brass editorial-link py-1 inline-block">
                  {navT('quality')}
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-cream/75 hover:text-brass editorial-link py-1 inline-block">
                  {navT('gallery')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/75 hover:text-brass editorial-link py-1 inline-block">
                  {navT('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Specifications (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-brass border-b border-cream/10 pb-2.5">
              02 // {t('productsHeader')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {products.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="text-cream/75 hover:text-brass editorial-link py-1 inline-block leading-snug"
                  >
                    <span className="font-mono text-[11px] text-brass/80 mr-1.5">
                      [{prod.code}]
                    </span>
                    {prod.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Export Desk Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-brass border-b border-cream/10 pb-2.5">
              03 // {t('contactHeader')}
            </h3>
            <ul className="space-y-3.5 text-sm text-cream/80">
              {/* Locale-aware priority: WeChat first in zh, WhatsApp first in en */}
              {locale === 'zh' ? (
                <>
                  <li className="flex items-start gap-2.5">
                    <MessageCircle className="w-4 h-4 text-brass mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-mono text-[11px] text-brass uppercase">
                        微信直联 (WeChat ID)
                      </span>
                      <span className="font-medium text-cream">{companyConfig.contact.wechatId}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-brass mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-mono text-[11px] text-brass uppercase">
                        WhatsApp / 电话
                      </span>
                      <a
                        href={`https://wa.me/${companyConfig.contact.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brass underline decoration-brass/40 underline-offset-4"
                      >
                        {companyConfig.contact.whatsappDisplay}
                      </a>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-brass mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-mono text-[11px] text-brass uppercase">
                        WhatsApp / Direct Line
                      </span>
                      <a
                        href={`https://wa.me/${companyConfig.contact.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brass underline decoration-brass/40 underline-offset-4"
                      >
                        {companyConfig.contact.whatsappDisplay}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <MessageCircle className="w-4 h-4 text-brass mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-mono text-[11px] text-brass uppercase">
                        WeChat Official ID
                      </span>
                      <span className="font-medium text-cream">{companyConfig.contact.wechatId}</span>
                    </div>
                  </li>
                </>
              )}

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brass mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-mono text-[11px] text-brass uppercase">
                    Email
                  </span>
                  <a
                    href={`mailto:${companyConfig.contact.email}`}
                    className="hover:text-brass break-all"
                  >
                    {companyConfig.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brass mt-1 flex-shrink-0" />
                <div>
                  <span className="block font-mono text-[11px] text-brass uppercase">
                    Mill Address
                  </span>
                  <span className="text-cream/75 leading-snug block">
                    {companyConfig.contact.address[locale]}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-cream/10 bg-ink">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>{t('copyright', { year: currentYear })}</p>
          <p className="font-mono text-[11px] text-cream/50">
            SENWEIDA TRADING CO., LTD. · 徐州森炜达贸易有限公司
          </p>
        </div>
      </div>
    </footer>
  );
}

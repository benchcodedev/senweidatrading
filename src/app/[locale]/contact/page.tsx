import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/seo';
import RfqForm from '@/components/RfqForm';
import { companyConfig } from '@/config/company';
import {
  MessageSquare,
  Mail,
  MapPin,
  Phone,
  QrCode,
  ArrowUpRight,
  ShieldCheck,
  Instagram,
} from 'lucide-react';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return buildPageMetadata({
    locale: locale as 'en' | 'zh',
    pathname: '/contact',
    title: t('contactTitle'),
    description: t('contactDescription'),
    ogImage: '/images/loading-1.jpg',
  });
}

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { product?: string };
}) {
  const t = useTranslations('Contact');
  const locale = useLocale() as 'en' | 'zh';
  const initialProductSlug = searchParams?.product;

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

      {/* Main Grid: RFQ Form (7 cols) + Direct Contact Channels (5 cols) */}
      <section className="py-14 lg:py-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <RfqForm initialProductSlug={initialProductSlug} />
            </div>

            {/* Direct Channels Column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-forest font-bold block mb-1">
                  DIRECT FACTORY DESK
                </span>
                <h2 className="font-serif text-2xl font-bold text-ink">
                  {t('directChannelsTitle')}
                </h2>
              </div>

              {/* Priority channels based on active locale */}
              {locale === 'zh' ? (
                <>
                  {/* WeChat Card (First in Chinese) */}
                  <div className="bg-white border-2 border-forest p-6 space-y-4 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <QrCode className="w-6 h-6 text-forest" />
                      <h3 className="font-serif text-xl font-bold text-ink">
                        {t('wechatCardTitle')}
                      </h3>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {t('wechatCardDesc')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5 pt-2">
                      <div className="relative w-36 h-36 border border-ink/15 bg-white p-1 flex-shrink-0">
                        <Image
                          src={companyConfig.contact.wechatQrCodePath}
                          alt="WeChat QR Code"
                          fill
                          sizes="144px"
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-2 text-center sm:text-left">
                        <span className="font-mono text-xs text-ink-subtle uppercase block">
                          {t('wechatIdLabel')}:
                        </span>
                        <span className="font-mono text-base font-bold text-forest bg-cream px-3 py-1.5 border border-ink/15 select-all inline-block">
                          {companyConfig.contact.wechatId}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Card */}
                  <div className="bg-white border border-ink/15 p-6 space-y-3 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-5 h-5 text-forest" />
                      <h3 className="font-serif text-lg font-bold text-ink">
                        {t('whatsappCardTitle')}
                      </h3>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {t('whatsappCardDesc')}
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/${companyConfig.contact.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] px-4 py-2.5 bg-brass hover:bg-brass-light text-ink font-mono text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 transition-colors"
                      >
                        <span>{t('whatsappCardCta')}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* WhatsApp Card (First in English) */}
                  <div className="bg-white border-2 border-forest p-6 space-y-3 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-6 h-6 text-forest" />
                      <h3 className="font-serif text-xl font-bold text-ink">
                        {t('whatsappCardTitle')}
                      </h3>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {t('whatsappCardDesc')}
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/${companyConfig.contact.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] px-5 py-2.5 bg-brass hover:bg-brass-light text-ink font-mono text-xs uppercase tracking-wider font-bold inline-flex items-center gap-2 transition-colors"
                      >
                        <span>{t('whatsappCardCta')}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* WeChat Card */}
                  <div className="bg-white border border-ink/15 p-6 space-y-4 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <QrCode className="w-5 h-5 text-forest" />
                      <h3 className="font-serif text-lg font-bold text-ink">
                        {t('wechatCardTitle')}
                      </h3>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {t('wechatCardDesc')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5 pt-1">
                      <div className="relative w-28 h-28 border border-ink/15 bg-white p-1 flex-shrink-0">
                        <Image
                          src={companyConfig.contact.wechatQrCodePath}
                          alt="WeChat QR Code"
                          fill
                          sizes="112px"
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-1 text-center sm:text-left">
                        <span className="font-mono text-xs text-ink-subtle uppercase block">
                          {t('wechatIdLabel')}:
                        </span>
                        <span className="font-mono text-sm font-bold text-forest bg-cream px-2.5 py-1 border border-ink/15 select-all inline-block">
                          {companyConfig.contact.wechatId}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Email & Phone Card */}
              <div className="bg-white border border-ink/15 p-6 space-y-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-forest mt-0.5" />
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-forest font-bold block">
                      {t('emailCardTitle')}
                    </span>
                    <a
                      href={`mailto:${companyConfig.contact.email}`}
                      className="text-sm font-medium text-ink hover:text-forest underline decoration-ink/20"
                    >
                      {companyConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-ink/10">
                  <Phone className="w-5 h-5 text-forest mt-0.5" />
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-forest font-bold block">
                      DIRECT MILL PHONE
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {companyConfig.contact.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-ink/10">
                  <MapPin className="w-5 h-5 text-forest mt-0.5" />
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-forest font-bold block">
                      {t('addressCardTitle')}
                    </span>
                    <span className="text-xs text-ink-muted leading-relaxed block">
                      {companyConfig.contact.address[locale]}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-ink/10">
                  <Instagram className="w-5 h-5 text-forest mt-0.5" />
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-forest font-bold block">
                      {t('instagramCardTitle')}
                    </span>
                    <a
                      href={companyConfig.contact.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-forest hover:text-brass font-bold inline-flex items-center gap-1"
                    >
                      <span>{companyConfig.contact.instagramUsername}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

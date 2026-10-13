import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import ScrollReveal from '@/components/ScrollReveal';
import { companyConfig } from '@/config/company';
import { ShieldCheck, ArrowRight, Factory, Cog, Layers, CheckCircle2 } from 'lucide-react';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return buildPageMetadata({
    locale: locale as 'en' | 'zh',
    pathname: '/about',
    title: t('aboutTitle'),
    description: t('aboutDescription'),
    ogImage: '/images/factory-1.jpg',
  });
}

export default function AboutPage() {
  const t = useTranslations('About');
  const commonT = useTranslations('Common');
  const locale = useLocale() as 'en' | 'zh';

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-forest text-cream py-14 lg:py-20 border-b border-brass/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <span className="font-mono text-xs uppercase tracking-widest text-brass block mb-2 font-bold">
            {t('sectionNumber')} // {t('eyebrow')}
          </span>
          <h1 className="text-fluid-h1 font-serif font-bold text-cream max-w-3xl">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg text-cream/80 max-w-2xl mt-4 leading-relaxed">
            {t('lead')}
          </p>
        </div>
      </section>

      {/* SECTION 01: Direct Manufacturing Story */}
      <section className="py-16 lg:py-24 border-b border-ink/15 bg-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-forest font-bold block">
                ORIGIN & STRATEGY
              </span>
              <h2 className="text-fluid-h2 font-serif font-bold text-ink">
                {t('storyTitle')}
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-ink-muted leading-relaxed">
                <p>{t('storyP1')}</p>
                <p>{t('storyP2')}</p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/contact"
                  className="min-h-[48px] px-6 py-3 bg-forest hover:bg-forest-light text-cream font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 border border-brass/40"
                >
                  <span>{commonT('requestQuote')}</span>
                  <ArrowRight className="w-4 h-4 text-brass" />
                </Link>
                <Link
                  href="/products"
                  className="min-h-[48px] px-6 py-3 border border-ink/20 hover:border-forest text-ink text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>{commonT('viewProducts')}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ScrollReveal>
                <div className="border border-ink/20 bg-white p-2 shadow-lg">
                  <div className="relative aspect-[16/11] w-full overflow-hidden duotone-forest">
                    <Image
                      src="/images/factory-1.jpg"
                      alt={t('storyTitle')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 bg-cream-dark flex items-center justify-between font-mono text-[11px] text-ink-subtle">
                    <span>MILL LOCATION: XUZHOU, JIANGSU, CHINA</span>
                    <span className="text-forest font-bold">{companyConfig.name[locale]}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: Workshop & Equipment Architecture */}
      <section className="py-16 lg:py-24 border-b border-ink/15 bg-cream-dark">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border-b border-ink/15 pb-8 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-forest block mb-1">
              ENGINEERING LINES
            </span>
            <h2 className="text-fluid-h2 font-serif font-bold text-ink">
              {t('capabilityTitle')}
            </h2>
            <p className="text-sm text-ink-muted max-w-2xl mt-2">
              {t('capabilityIntro')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-ink/15 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 bg-cream inline-block border border-ink/10">
                  <Cog className="w-6 h-6 text-forest" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink">
                  {t('cap1Title')}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {t('cap1Desc')}
                </p>
              </div>
              <div className="pt-3 border-t border-ink/10 font-mono text-[11px] text-forest font-semibold">
                TOLERANCE: ±0.3mm DOUBLE-SIDED
              </div>
            </div>

            <div className="bg-white border border-ink/15 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 bg-cream inline-block border border-ink/10">
                  <Factory className="w-6 h-6 text-forest" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink">
                  {t('cap2Title')}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {t('cap2Desc')}
                </p>
              </div>
              <div className="pt-3 border-t border-ink/10 font-mono text-[11px] text-forest font-semibold">
                PRESSURE: MULTI-DAYLIGHT HYDRAULIC
              </div>
            </div>

            <div className="bg-white border border-ink/15 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-3 bg-cream inline-block border border-ink/10">
                  <Layers className="w-6 h-6 text-forest" />
                </div>
                <h3 className="font-serif text-xl font-bold text-ink">
                  {t('cap3Title')}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {t('cap3Desc')}
                </p>
              </div>
              <div className="pt-3 border-t border-ink/10 font-mono text-[11px] text-forest font-semibold">
                FINISH: TRIPLE-LAYER ACRYLIC SEAL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Responsible Forestry & FSC Commitment */}
      <section className="py-16 lg:py-24 border-b border-brass/30 bg-forest text-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-7 h-7 text-brass flex-shrink-0" />
                <span className="font-mono text-xs uppercase tracking-widest text-brass font-bold">
                  CHAIN-OF-CUSTODY AUDITED TIMBER
                </span>
              </div>
              <h2 className="text-fluid-h2 font-serif font-bold text-cream">
                {t('fscTitle')}
              </h2>
              <p className="text-sm sm:text-base text-cream/80 leading-relaxed max-w-2xl">
                {t('fscDesc')}
              </p>
              <div className="pt-2 font-mono text-xs text-brass">
                CERTIFICATE ID: {companyConfig.certifications.fscCertificateNumber}
              </div>
            </div>

            <div className="lg:col-span-4 bg-forest-dark border-2 border-brass/60 p-6 space-y-4 text-center">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border border-brass/50 bg-forest">
                <Image
                  src="/logo.png"
                  alt={companyConfig.name[locale]}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-cream">
                {companyConfig.name[locale]}
              </h3>
              <p className="text-xs text-cream/70">
                {locale === 'zh'
                  ? 'FSC 产销监管链认证 · 绿色建筑模板出口商'
                  : 'FSC Chain-of-Custody Certified Structural Exporter'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: Editable Verification Data Sheet */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border-b border-ink/15 pb-6 mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-forest block mb-1">
              DATA TRANSPARENCY // 核心数据
            </span>
            <h2 className="text-fluid-h2 font-serif font-bold text-ink">
              {t('placeholdersTitle')}
            </h2>
            <p className="text-xs font-mono text-ink-subtle mt-1">
              * {t('placeholdersNotice')}
            </p>
          </div>

          <div className="border border-ink/15 bg-white overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-forest text-cream font-mono text-xs uppercase tracking-wider border-b border-ink/15">
                  <th className="py-3.5 px-6 font-semibold w-1/3">FIELD ATTRIBUTE</th>
                  <th className="py-3.5 px-6 font-semibold">VERIFIED FACTORY VALUE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10 font-sans">
                <tr>
                  <td className="py-3.5 px-6 font-mono text-xs text-forest font-semibold">
                    {t('tableCompanyEn')}
                  </td>
                  <td className="py-3.5 px-6 font-medium text-ink">
                    {companyConfig.name.en}
                  </td>
                </tr>
                <tr className="bg-cream-light/50">
                  <td className="py-3.5 px-6 font-mono text-xs text-forest font-semibold">
                    {t('tableCompanyZh')}
                  </td>
                  <td className="py-3.5 px-6 font-medium text-ink">
                    {companyConfig.name.zh}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-mono text-xs text-forest font-semibold">
                    {t('tableLocation')}
                  </td>
                  <td className="py-3.5 px-6 text-ink-muted">
                    {companyConfig.contact.factoryAddress[locale]}
                  </td>
                </tr>
                <tr className="bg-cream-light/50">
                  <td className="py-3.5 px-6 font-mono text-xs text-forest font-semibold">
                    {t('tableMainProducts')}
                  </td>
                  <td className="py-3.5 px-6 text-ink-muted">
                    {t('tableMainProductsValue')}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-mono text-xs text-forest font-semibold">
                    {t('tableFscCode')}
                  </td>
                  <td className="py-3.5 px-6 font-mono text-brass font-bold">
                    {companyConfig.certifications.fscCertificateNumber}
                  </td>
                </tr>
                <tr className="bg-cream-light/50">
                  <td className="py-3.5 px-6 font-mono text-xs text-forest font-semibold">
                    {t('tableExportReach')}
                  </td>
                  <td className="py-3.5 px-6 text-ink-muted">
                    {t('tableExportReachValue')}
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-mono text-xs text-forest font-semibold">
                    {t('tableCustomization')}
                  </td>
                  <td className="py-3.5 px-6 text-ink-muted">
                    {t('tableCustomizationValue')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

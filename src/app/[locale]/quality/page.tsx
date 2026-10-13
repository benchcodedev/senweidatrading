import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import ScrollReveal from '@/components/ScrollReveal';
import { companyConfig } from '@/config/company';
import { ShieldCheck, CheckCircle2, Box, ArrowRight } from 'lucide-react';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return buildPageMetadata({
    locale: locale as 'en' | 'zh',
    pathname: '/quality',
    title: t('qualityTitle'),
    description: t('qualityDescription'),
    ogImage: '/images/qc-1.jpg',
  });
}

export default function QualityPage() {
  const t = useTranslations('Quality');
  const commonT = useTranslations('Common');
  const locale = useLocale() as 'en' | 'zh';

  const qcSteps = [
    {
      code: t('qcSteps.q1Code'),
      title: t('qcSteps.q1Title'),
      desc: t('qcSteps.q1Desc'),
    },
    {
      code: t('qcSteps.q2Code'),
      title: t('qcSteps.q2Title'),
      desc: t('qcSteps.q2Desc'),
    },
    {
      code: t('qcSteps.q3Code'),
      title: t('qcSteps.q3Title'),
      desc: t('qcSteps.q3Desc'),
    },
    {
      code: t('qcSteps.q4Code'),
      title: t('qcSteps.q4Title'),
      desc: t('qcSteps.q4Desc'),
    },
    {
      code: t('qcSteps.q5Code'),
      title: t('qcSteps.q5Title'),
      desc: t('qcSteps.q5Desc'),
    },
  ];

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

      {/* SECTION 01: FSC Certification Box */}
      <section className="py-14 lg:py-20 border-b border-ink/15 bg-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border-2 border-forest bg-white p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-md">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-forest flex-shrink-0" />
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-brass font-bold block">
                    FORESTRY SUSTAINABILITY // 绿色认证
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                    {t('fscSection.title')}
                  </h2>
                </div>
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                {t('fscSection.desc')}
              </p>
            </div>

            <div className="lg:col-span-4 bg-forest text-cream p-6 border border-brass/40 text-center space-y-2">
              <span className="font-mono text-[11px] text-brass uppercase block">
                {t('fscSection.certLabel')}
              </span>
              <div className="font-mono text-base sm:text-lg font-bold text-cream select-all">
                {companyConfig.certifications.fscCertificateNumber}
              </div>
              <span className="text-[11px] text-cream/70 block">
                {t('fscSection.certStatus')}
              </span>
              <span className="text-[10px] font-mono text-brass/70 block">
                {t('fscSection.certPlaceholderHint')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: 5-Point Mill Inspection Protocol */}
      <section className="py-16 lg:py-24 border-b border-ink/15 bg-cream-dark">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border-b border-ink/15 pb-8 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-forest block mb-1">
              {t('qcSteps.number')} // MILL LAB PROTOCOL
            </span>
            <h2 className="text-fluid-h2 font-serif font-bold text-ink">
              {t('qcSteps.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Steps list (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {qcSteps.map((step) => (
                <div
                  key={step.code}
                  className="bg-white border border-ink/15 p-6 space-y-2 hover:border-forest transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-brass font-bold">
                      {step.code}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* QC Lab Photo (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal>
                <div className="border border-ink/20 bg-white p-2 shadow-lg">
                  <div className="relative aspect-[4/3] w-full overflow-hidden duotone-forest">
                    <Image
                      src="/images/qc-1.jpg"
                      alt={t('qcSteps.title')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 bg-cream-dark font-mono text-[11px] text-ink-subtle flex justify-between">
                    <span>LAB REF // 72h BOIL TEST</span>
                    <span className="text-forest font-bold">WBP PHENOLIC</span>
                  </div>
                </div>
              </ScrollReveal>

              <div className="p-6 bg-forest text-cream border border-brass/30 space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-brass block">
                  MILL QUALITY COMMITMENT
                </span>
                <p className="text-xs text-cream/80 leading-relaxed">
                  {locale === 'zh'
                    ? '所有出厂集装箱配货均附带班次出厂质检报告（包括平均厚度、含水率、耐水煮检验指标）。支持第三方检验机构（SGS / BV）进厂验货。'
                    : 'Every container shipment is accompanied by a mill inspection certificate covering moisture content, thickness calibration, and 72h boiling test. Third-party inspections (SGS / Bureau Veritas) are welcomed.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Seaworthy Export Packaging & Container Loading */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border-b border-ink/15 pb-8 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-forest block mb-1">
              {t('packaging.number')} // EXPORT CARGO ARMOR
            </span>
            <h2 className="text-fluid-h2 font-serif font-bold text-ink">
              {t('packaging.title')}
            </h2>
            <p className="text-sm text-ink-muted max-w-2xl mt-2">
              {t('packaging.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-ink/15 p-6 space-y-3 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-brass font-bold block mb-1">
                  ARMOR // 01
                </span>
                <h3 className="font-serif text-xl font-bold text-ink">
                  {t('packaging.p1Title')}
                </h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                  {t('packaging.p1Desc')}
                </p>
              </div>
              <div className="pt-3 border-t border-ink/10 font-mono text-[11px] text-forest font-semibold">
                BARRIER: 0.2mm POLY FILM
              </div>
            </div>

            <div className="bg-white border border-ink/15 p-6 space-y-3 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-brass font-bold block mb-1">
                  ARMOR // 02
                </span>
                <h3 className="font-serif text-xl font-bold text-ink">
                  {t('packaging.p2Title')}
                </h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                  {t('packaging.p2Desc')}
                </p>
              </div>
              <div className="pt-3 border-t border-ink/10 font-mono text-[11px] text-forest font-semibold">
                ARMOR: 6-SIDE SHEATHING
              </div>
            </div>

            <div className="bg-white border border-ink/15 p-6 space-y-3 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-brass font-bold block mb-1">
                  ARMOR // 03
                </span>
                <h3 className="font-serif text-xl font-bold text-ink">
                  {t('packaging.p3Title')}
                </h3>
                <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                  {t('packaging.p3Desc')}
                </p>
              </div>
              <div className="pt-3 border-t border-ink/10 font-mono text-[11px] text-forest font-semibold">
                STRAPPING: 4×8 HIGH-TENSILE STEEL
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="min-h-[48px] px-8 py-3.5 bg-forest hover:bg-forest-light text-cream font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 border border-brass/50 transition-colors"
            >
              <span>{commonT('requestQuote')}</span>
              <ArrowRight className="w-4 h-4 text-brass" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

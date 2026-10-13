import React from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import ScrollReveal from '@/components/ScrollReveal';
import {
  ArrowUpRight,
  ShieldCheck,
  Globe2,
  Settings2,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';
import { companyConfig } from '@/config/company';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return buildPageMetadata({
    locale: locale as 'en' | 'zh',
    pathname: '',
    title: t('homeTitle'),
    description: t('homeDescription'),
    ogImage: '/images/hero.jpg',
  });
}

export default function HomePage() {
  const t = useTranslations('Home');
  const commonT = useTranslations('Common');
  const locale = useLocale() as 'en' | 'zh';

  const processSteps = [
    {
      num: t('process.steps.step1Number'),
      title: t('process.steps.step1Title'),
      desc: t('process.steps.step1Desc'),
      img: '/images/process-cutting.jpg',
    },
    {
      num: t('process.steps.step2Number'),
      title: t('process.steps.step2Title'),
      desc: t('process.steps.step2Desc'),
      img: '/images/process-assembling.jpg',
    },
    {
      num: t('process.steps.step3Number'),
      title: t('process.steps.step3Title'),
      desc: t('process.steps.step3Desc'),
      img: '/images/process-sanding.jpg',
    },
    {
      num: t('process.steps.step4Number'),
      title: t('process.steps.step4Title'),
      desc: t('process.steps.step4Desc'),
      img: '/images/process-pressing.jpg',
    },
    {
      num: t('process.steps.step5Number'),
      title: t('process.steps.step5Title'),
      desc: t('process.steps.step5Desc'),
      img: '/images/process-stacking.jpg',
    },
    {
      num: t('process.steps.step6Number'),
      title: t('process.steps.step6Title'),
      desc: t('process.steps.step6Desc'),
      img: '/images/process-transport.jpg',
    },
  ];

  const factoryReasons = [
    {
      code: t('whyFactory.reasons.r1Code'),
      title: t('whyFactory.reasons.r1Title'),
      desc: t('whyFactory.reasons.r1Desc'),
    },
    {
      code: t('whyFactory.reasons.r2Code'),
      title: t('whyFactory.reasons.r2Title'),
      desc: t('whyFactory.reasons.r2Desc'),
    },
    {
      code: t('whyFactory.reasons.r3Code'),
      title: t('whyFactory.reasons.r3Title'),
      desc: t('whyFactory.reasons.r3Desc'),
    },
    {
      code: t('whyFactory.reasons.r4Code'),
      title: t('whyFactory.reasons.r4Title'),
      desc: t('whyFactory.reasons.r4Desc'),
    },
    {
      code: t('whyFactory.reasons.r5Code'),
      title: t('whyFactory.reasons.r5Title'),
      desc: t('whyFactory.reasons.r5Desc'),
    },
  ];

  const regions = [
    {
      name: t('globalReach.regions.reg1Name'),
      focus: t('globalReach.regions.reg1Ports'),
    },
    {
      name: t('globalReach.regions.reg2Name'),
      focus: t('globalReach.regions.reg2Ports'),
    },
    {
      name: t('globalReach.regions.reg3Name'),
      focus: t('globalReach.regions.reg3Ports'),
    },
    {
      name: t('globalReach.regions.reg4Name'),
      focus: t('globalReach.regions.reg4Ports'),
    },
    {
      name: t('globalReach.regions.reg5Name'),
      focus: t('globalReach.regions.reg5Ports'),
    },
    {
      name: t('globalReach.regions.reg6Name'),
      focus: t('globalReach.regions.reg6Ports'),
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 00: HERO */}
      <section className="relative bg-forest text-cream border-b border-brass/30 overflow-hidden">
        {/* Background Paper Texture & Asymmetric Grid */}
        <div className="absolute inset-0 bg-duotone-green opacity-90" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-16 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 border border-brass/40 bg-forest-dark/80 px-3 py-1.5">
                <span className="w-2 h-2 rounded-full bg-brass animate-pulse" />
                <span className="font-mono text-[11px] sm:text-xs text-brass uppercase tracking-widest font-semibold">
                  {t('hero.badge')}
                </span>
              </div>

              <h1 className="text-fluid-hero font-serif font-bold text-cream tracking-tight max-w-2xl">
                {t('hero.headline')}
              </h1>

              <p className="text-base sm:text-lg text-cream/80 max-w-xl leading-relaxed">
                {t('hero.subline')}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="min-h-[48px] px-8 py-3.5 bg-brass hover:bg-brass-light text-ink font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2.5 transition-colors border border-brass shadow-lg"
                >
                  <span>{t('hero.primaryCta')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/products"
                  className="min-h-[48px] px-7 py-3.5 border border-cream/35 hover:border-brass text-cream hover:text-brass text-xs uppercase font-mono tracking-wider inline-flex items-center gap-2 transition-colors"
                >
                  <span>{t('hero.secondaryCta')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Spec Tickers */}
              <div className="pt-8 border-t border-brass/20 grid grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <span className="font-mono text-[10px] text-brass block uppercase">
                    {t('hero.specTicker1Label')}
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-cream block mt-0.5">
                    {t('hero.specTicker1Value')}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brass block uppercase">
                    {t('hero.specTicker2Label')}
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-cream block mt-0.5">
                    {t('hero.specTicker2Value')}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-brass block uppercase">
                    {t('hero.specTicker3Label')}
                  </span>
                  <span className="font-serif text-sm sm:text-base font-bold text-cream block mt-0.5">
                    {t('hero.specTicker3Value')}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Industrial Image Showcase (5 cols) */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal>
                <div className="relative border-2 border-brass/60 bg-forest-dark p-2 shadow-2xl">
                  {/* Aspect Ratio Box with Photography */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden duotone-forest">
                    <Image
                      src="/images/hero.jpg"
                      alt={t('hero.headline')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Corner Accent Tabs */}
                  <div className="pt-3 pb-1 px-2 flex items-center justify-between font-mono text-[11px] text-brass">
                    <span>{t('hero.index')}</span>
                    <span className="text-cream/70 text-[10px]">
                      {companyConfig.name[locale]}
                    </span>
                  </div>
                </div>

                <p className="font-mono text-[11px] text-cream/60 mt-3 italic">
                  {t('hero.imageCaption')}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-cream-dark border-b border-ink/15 text-ink">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/15">
            {/* Item 1 */}
            <div className="py-4 md:py-0 md:px-6 first:pl-0 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-forest" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-forest font-bold">
                  {t('trustStrip.item1Code')}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-ink">
                {t('trustStrip.item1Title')}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                {t('trustStrip.item1Desc')}
              </p>
            </div>

            {/* Item 2 */}
            <div className="py-4 md:py-0 md:px-6 space-y-2">
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-forest" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-forest font-bold">
                  {t('trustStrip.item2Code')}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-ink">
                {t('trustStrip.item2Title')}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                {t('trustStrip.item2Desc')}
              </p>
            </div>

            {/* Item 3 */}
            <div className="py-4 md:py-0 md:px-6 last:pr-0 space-y-2">
              <div className="flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-forest" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-forest font-bold">
                  {t('trustStrip.item3Code')}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-ink">
                {t('trustStrip.item3Title')}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                {t('trustStrip.item3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: PRODUCT HIGHLIGHTS (ASYMMETRIC EDITORIAL GRID) */}
      <section className="py-16 lg:py-24 border-b border-ink/15 bg-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-ink/15 pb-8 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-forest block mb-1">
                {t('productHighlights.sectionNumber')} // {t('productHighlights.eyebrow')}
              </span>
              <h2 className="text-fluid-h2 font-serif font-bold text-ink">
                {t('productHighlights.title')}
              </h2>
              <p className="text-sm text-ink-muted max-w-2xl mt-2">
                {t('productHighlights.subtitle')}
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-forest hover:text-brass font-bold editorial-link min-h-[44px]"
            >
              <span>{t('productHighlights.viewAllCta')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetric Product Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Card 1: Large Featured Shuttering Panel (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-ink/15 flex flex-col justify-between group hover:border-forest transition-colors">
              <div className="relative aspect-[16/10] w-full overflow-hidden duotone-forest">
                <Image
                  src="/images/formwork-1.jpg"
                  alt={t('productHighlights.card1Title')}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-forest text-cream font-mono text-[10px] px-2.5 py-1 tracking-wider uppercase">
                  {t('productHighlights.card1Tag')}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-baseline justify-between gap-2 border-b border-ink/10 pb-3">
                  <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-forest transition-colors">
                    {t('productHighlights.card1Title')}
                  </h3>
                  <span className="font-mono text-xs text-brass font-bold">
                    SWD-FFP-101
                  </span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {t('productHighlights.card1Desc')}
                </p>
                <div className="font-mono text-xs text-forest font-semibold pt-1">
                  {t('productHighlights.card1Specs')}
                </div>
                <div className="pt-3 flex items-center justify-between border-t border-ink/10">
                  <Link
                    href="/products/phenolic-film-faced-plywood"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-forest font-bold editorial-link min-h-[44px]"
                  >
                    <span>{commonT('viewSpecs')}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="min-h-[44px] px-4 py-2 bg-forest text-cream hover:bg-forest-light text-xs font-mono uppercase tracking-wider inline-flex items-center gap-1.5"
                  >
                    <span>{commonT('requestQuote')}</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Stacked Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Card 2: Hardwood Plywood */}
              <div className="bg-white border border-ink/15 p-6 flex flex-col justify-between group hover:border-forest transition-colors flex-1">
                <div>
                  <div className="relative aspect-[16/8] w-full overflow-hidden duotone-forest mb-4">
                    <Image
                      src="/images/hardwood-1.jpg"
                      alt={t('productHighlights.card2Title')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-forest text-cream font-mono text-[9px] px-2 py-0.5 tracking-wider uppercase">
                      {t('productHighlights.card2Tag')}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink group-hover:text-forest transition-colors">
                    {t('productHighlights.card2Title')}
                  </h3>
                  <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                    {t('productHighlights.card2Desc')}
                  </p>
                  <div className="font-mono text-[11px] text-forest font-semibold mt-2">
                    {t('productHighlights.card2Specs')}
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-ink/10 flex items-center justify-between">
                  <Link
                    href="/products/structural-hardwood-commercial-plywood"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-forest font-bold editorial-link min-h-[44px]"
                  >
                    <span>{commonT('viewSpecs')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: H20 Timber Beams */}
              <div className="bg-white border border-ink/15 p-6 flex flex-col justify-between group hover:border-forest transition-colors flex-1">
                <div>
                  <div className="relative aspect-[16/8] w-full overflow-hidden duotone-forest mb-4">
                    <Image
                      src="/images/h20-beam-1.jpg"
                      alt={t('productHighlights.card3Title')}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-forest text-cream font-mono text-[9px] px-2 py-0.5 tracking-wider uppercase">
                      {t('productHighlights.card3Tag')}
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink group-hover:text-forest transition-colors">
                    {t('productHighlights.card3Title')}
                  </h3>
                  <p className="text-xs text-ink-muted mt-2 leading-relaxed">
                    {t('productHighlights.card3Desc')}
                  </p>
                  <div className="font-mono text-[11px] text-forest font-semibold mt-2">
                    {t('productHighlights.card3Specs')}
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-ink/10 flex items-center justify-between">
                  <Link
                    href="/products/h20-timber-formwork-beam"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-forest font-bold editorial-link min-h-[44px]"
                  >
                    <span>{commonT('viewSpecs')}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: FROM LOG TO LOAD-OUT (VERTICAL PROCESS TIMELINE) */}
      <section className="py-16 lg:py-24 border-b border-ink/15 bg-cream-dark">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border-b border-ink/15 pb-8 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-forest block mb-1">
              {t('process.sectionNumber')} // {t('process.eyebrow')}
            </span>
            <h2 className="text-fluid-h2 font-serif font-bold text-ink">
              {t('process.title')}
            </h2>
            <p className="text-sm text-ink-muted max-w-2xl mt-2">
              {t('process.subtitle')}
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <ScrollReveal key={step.num} delay={idx * 0.08}>
                <div className="bg-cream border border-ink/15 p-5 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] w-full overflow-hidden duotone-forest border border-ink/10">
                      <Image
                        src={step.img}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover"
                      />
                    </div>
                    <span className="font-mono text-xs text-brass font-bold block">
                      {step.num}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03: WHY BUY DIRECT FROM THE FACTORY */}
      <section className="py-16 lg:py-24 border-b border-brass/30 bg-forest text-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border-b border-brass/25 pb-8 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brass block mb-1">
              {t('whyFactory.sectionNumber')} // {t('whyFactory.eyebrow')}
            </span>
            <h2 className="text-fluid-h2 font-serif font-bold text-cream">
              {t('whyFactory.title')}
            </h2>
            <p className="text-sm text-cream/75 max-w-2xl mt-2">
              {t('whyFactory.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {factoryReasons.map((reason) => (
              <div
                key={reason.code}
                className="border border-brass/30 bg-forest-dark/70 p-6 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-brass font-bold block mb-1">
                    {reason.code}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-cream/80 mt-2 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-brass/15 flex items-center justify-between text-[11px] font-mono text-brass">
                  <span>FACTORY DIRECT</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            ))}

            {/* Quick Consultation Card */}
            <div className="border-2 border-brass bg-brass text-ink p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink-muted block mb-1">
                  SPEC // CONSULTATION
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  {locale === 'zh' ? '预约工程图纸定制测算' : 'Request Custom Shuttering Calculation'}
                </h3>
                <p className="text-xs text-ink/80 mt-2 leading-relaxed">
                  {locale === 'zh'
                    ? '提供您的混凝土结构标高与周转要求，外贸工程师为您推荐高性价比单板胶水组合。'
                    : 'Provide your structural pour height and reuse targets; our team will recommend the optimal veneer & resin configuration.'}
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="min-h-[44px] w-full px-5 py-3 bg-ink text-cream hover:bg-forest text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{commonT('requestQuote')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: GLOBAL REACH BLOCK */}
      <section className="py-16 lg:py-24 border-b border-ink/15 bg-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border-b border-ink/15 pb-8 mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-forest block mb-1">
              {t('globalReach.sectionNumber')} // {t('globalReach.eyebrow')}
            </span>
            <h2 className="text-fluid-h2 font-serif font-bold text-ink">
              {t('globalReach.title')}
            </h2>
            <p className="text-sm text-ink-muted max-w-2xl mt-2">
              {t('globalReach.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((reg, idx) => (
              <div
                key={reg.name}
                className="bg-white border border-ink/15 p-6 space-y-2 hover:border-forest transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-brass font-bold">
                    CORRIDOR // 0{idx + 1}
                  </span>
                  <Globe2 className="w-4 h-4 text-forest" />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink">
                  {reg.name}
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {reg.focus}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-cream-dark border border-ink/15 text-center font-mono text-xs text-forest tracking-wider uppercase font-semibold">
            {t('globalReach.shippingNote')}
          </div>
        </div>
      </section>

      {/* SECTION 05: FINAL RFQ BANNER */}
      <section className="py-16 lg:py-24 bg-forest-dark text-cream relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="border-2 border-brass/50 bg-forest p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="font-mono text-xs text-brass uppercase tracking-widest block font-bold">
                {t('rfqBanner.sectionNumber')} // {t('rfqBanner.eyebrow')}
              </span>
              <h2 className="text-fluid-h2 font-serif font-bold text-cream">
                {t('rfqBanner.title')}
              </h2>
              <p className="text-sm sm:text-base text-cream/80 leading-relaxed">
                {t('rfqBanner.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <Link
                href="/contact"
                className="min-h-[48px] px-8 py-3.5 bg-brass hover:bg-brass-light text-ink font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2.5 transition-colors shadow-lg"
              >
                <span>{t('rfqBanner.primaryCta')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${companyConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-8 py-3.5 border border-cream/40 hover:border-brass text-cream hover:text-brass font-mono text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2.5 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-brass" />
                <span>{t('rfqBanner.whatsappCta')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

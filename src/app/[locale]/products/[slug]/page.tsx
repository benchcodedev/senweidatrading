import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import { products, getProductBySlug, getRelatedProducts } from '@/data/products';
import { routing } from '@/i18n/routing';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  FileSpreadsheet,
} from 'lucide-react';
import { companyConfig } from '@/config/company';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const prod of products) {
      params.push({ locale, slug: prod.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(slug);
  if (!product) return {};

  const currentLocale = locale as 'en' | 'zh';
  return buildPageMetadata({
    locale: currentLocale,
    pathname: `/products/${slug}`,
    title: `${product.name[currentLocale]} | ${product.code}`,
    description: product.shortDescription[currentLocale],
    ogImage: product.images[0] || '/images/formwork-1.jpg',
  });
}

export default function ProductDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const locale = useLocale() as 'en' | 'zh';
  const t = useTranslations('Products.detail');
  const commonT = useTranslations('Common');

  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(slug, 2);

  const whatsappInquiryUrl = `https://wa.me/${companyConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    locale === 'zh'
      ? `您好，徐州森炜达贸易有限公司，我想咨询产品【${product.name.zh} (${product.code})】的出口报价。`
      : `Hello Senweida Trading Co., Ltd., I would like to request an export quote for ${product.name.en} (${product.code}).`
  )}`;

  return (
    <div className="w-full bg-cream">
      {/* Breadcrumb Bar */}
      <div className="border-b border-ink/15 bg-cream-dark py-3.5">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-mono text-xs text-forest hover:text-brass font-bold editorial-link min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{commonT('backToProducts')}</span>
          </Link>
          <div className="font-mono text-xs text-brass font-semibold">
            {t('productCode')}: [{product.code}]
          </div>
        </div>
      </div>

      {/* Main Spec Sheet Header Grid */}
      <section className="py-10 sm:py-14 border-b border-ink/15">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Product Images Gallery (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="border border-ink/20 bg-white p-2 shadow-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden duotone-forest">
                  <Image
                    src={product.images[0] || '/images/formwork-1.jpg'}
                    alt={product.name[locale]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-forest text-cream font-mono text-xs px-3 py-1 font-bold">
                    {product.code}
                  </div>
                </div>
              </div>

              {/* Secondary Thumbnails */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {product.images.map((img, idx) => (
                    <div
                      key={img}
                      className="border border-ink/15 bg-white p-1 relative aspect-[16/10] overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${product.name[locale]} view ${idx + 1}`}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Overview & Quick Spec Actions (6 cols) */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-forest font-bold">
                    SPECIFICATION DOCUMENT //
                  </span>
                  <span className="font-mono text-xs text-brass font-semibold">
                    {product.code}
                  </span>
                </div>

                <h1 className="text-fluid-h2 font-serif font-bold text-ink leading-tight">
                  {product.name[locale]}
                </h1>

                <p className="font-serif italic text-sm sm:text-base text-forest font-medium">
                  {product.subtitle[locale]}
                </p>

                <p className="text-sm text-ink-muted leading-relaxed pt-2">
                  {product.fullDescription[locale]}
                </p>
              </div>

              {/* Action Box */}
              <div className="border border-ink/20 bg-cream-dark p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-forest" />
                  <span className="font-mono text-xs uppercase tracking-wider text-forest font-bold">
                    {t('rfqBoxTitle')}
                  </span>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {t('rfqBoxDesc')}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="min-h-[48px] px-6 py-3 bg-forest hover:bg-forest-light text-cream font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors border border-brass/50 flex-1"
                  >
                    <span>{t('addToQuoteBtn')}</span>
                    <ArrowRight className="w-4 h-4 text-brass" />
                  </Link>

                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[48px] px-5 py-3 border border-ink/30 hover:border-forest text-ink text-xs font-mono uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-forest" />
                    <span>{t('whatsappProductBtn')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: TECHNICAL SPECIFICATION TABLE (Desktop Table / Mobile Stacked Cards) */}
      <section className="py-14 border-b border-ink/15 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="border-b border-ink/15 pb-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-forest block mb-1 font-bold">
                DATA SHEET // 规格参数表
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                {t('specTableTitle')}
              </h2>
            </div>
            <p className="text-xs font-mono text-ink-subtle">
              * {t('specTableNotice')}
            </p>
          </div>

          {/* Desktop Table View (hidden on small screens) */}
          <div className="hidden md:block border border-ink/20 overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-forest text-cream font-mono text-xs uppercase tracking-wider border-b border-ink/20">
                  <th className="py-3.5 px-6 font-semibold w-2/5">
                    {t('specParamHeader')}
                  </th>
                  <th className="py-3.5 px-6 font-semibold">
                    {t('specValueHeader')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10 font-sans">
                {product.specs.map((row, idx) => (
                  <tr
                    key={row.key}
                    className={idx % 2 === 1 ? 'bg-cream-light/60' : 'bg-white'}
                  >
                    <td className="py-3.5 px-6 font-mono text-xs text-forest font-bold">
                      {row.label[locale]}
                    </td>
                    <td className="py-3.5 px-6 text-ink font-medium leading-relaxed">
                      {row.value[locale]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Spec Cards (visible on phones < 768px) */}
          <div className="md:hidden space-y-3">
            {product.specs.map((row) => (
              <div
                key={row.key}
                className="border border-ink/15 bg-cream p-4 space-y-1.5"
              >
                <span className="font-mono text-xs text-forest uppercase font-bold block">
                  {row.label[locale]}
                </span>
                <p className="text-sm text-ink font-medium leading-snug">
                  {row.value[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 03 & 04: HIGHLIGHTS & APPLICATIONS */}
      <section className="py-14 border-b border-ink/15 bg-cream">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Highlights */}
            <div className="bg-white border border-ink/15 p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-ink/10 pb-3">
                {t('highlightsTitle')}
              </h3>
              <ul className="space-y-3">
                {product.highlights[locale].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-ink-muted">
                    <CheckCircle2 className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-white border border-ink/15 p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-ink border-b border-ink/10 pb-3">
                {t('applicationsTitle')}
              </h3>
              <ul className="space-y-3">
                {product.applications[locale].map((app) => (
                  <li key={app} className="flex items-start gap-3 text-sm text-ink-muted">
                    <ShieldCheck className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: RELATED PRODUCTS */}
      {related.length > 0 && (
        <section className="py-14 bg-cream-dark">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="font-serif text-2xl font-bold text-ink mb-8 border-b border-ink/15 pb-4">
              {t('relatedTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {related.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white border border-ink/15 p-6 flex flex-col justify-between group hover:border-forest transition-colors"
                >
                  <div className="flex gap-4 items-center">
                    <div className="relative w-24 h-24 overflow-hidden border border-ink/10 flex-shrink-0 duotone-forest">
                      <Image
                        src={rel.images[0] || '/images/formwork-1.jpg'}
                        alt={rel.name[locale]}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-brass font-bold">
                        [{rel.code}]
                      </span>
                      <h3 className="font-serif text-lg font-bold text-ink group-hover:text-forest transition-colors">
                        {rel.name[locale]}
                      </h3>
                      <p className="text-xs text-ink-muted mt-1 line-clamp-2">
                        {rel.shortDescription[locale]}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-ink/10 flex items-center justify-between">
                    <Link
                      href={`/products/${rel.slug}`}
                      className="font-mono text-xs uppercase tracking-wider text-forest font-bold editorial-link min-h-[44px] inline-flex items-center gap-1"
                    >
                      <span>{commonT('viewSpecs')}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

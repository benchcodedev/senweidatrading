'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { companyConfig } from '@/config/company';
import { products } from '@/data/products';
import { Send, CheckCircle2, AlertCircle, MessageSquare, ArrowRight, RotateCcw } from 'lucide-react';

interface RfqFormProps {
  initialProductSlug?: string;
}

export default function RfqForm({ initialProductSlug }: RfqFormProps) {
  const t = useTranslations('Contact.form');
  const locale = useLocale() as 'en' | 'zh';

  const defaultProduct = products.find((p) => p.slug === initialProductSlug);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    product: defaultProduct ? defaultProduct.name[locale] : '',
    sizeThickness: defaultProduct ? defaultProduct.specs[0]?.value[locale] : '',
    quantity: '',
    port: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const buildWhatsappUrl = (data: typeof formData) => {
    const template = t('whatsappMessageTemplate');
    const msg = template
      .replace('{name}', data.name || '-')
      .replace('{company}', data.company || '-')
      .replace('{country}', data.country || '-')
      .replace('{phone}', data.phone || '-')
      .replace('{email}', data.email || '-')
      .replace('{product}', data.product || '-')
      .replace('{sizeThickness}', data.sizeThickness || '-')
      .replace('{quantity}', data.quantity || '-')
      .replace('{port}', data.port || '-')
      .replace('{message}', data.message || 'None');

    return `https://wa.me/${companyConfig.contact.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Client validation
    if (
      !formData.name ||
      !formData.company ||
      !formData.country ||
      !formData.email ||
      !formData.phone ||
      !formData.product ||
      !formData.sizeThickness ||
      !formData.quantity ||
      !formData.port
    ) {
      setErrorMessage(t('validationError'));
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit to API route
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, locale }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || 'Failed to submit RFQ');
      }

      const generatedWaUrl = buildWhatsappUrl(formData);
      setInquiryId(json.inquiryId || `SWD-${Date.now().toString().slice(-6)}`);
      setWhatsappUrl(generatedWaUrl);
      setSubmitted(true);

      // 2. Open WhatsApp in a new tab
      if (typeof window !== 'undefined') {
        window.open(generatedWaUrl, '_blank', 'noopener,noreferrer');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error submitting quote';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      country: '',
      email: '',
      phone: '',
      product: '',
      sizeThickness: '',
      quantity: '',
      port: '',
      message: '',
    });
    setSubmitted(false);
    setErrorMessage('');
    setInquiryId('');
    setWhatsappUrl('');
  };

  if (submitted) {
    return (
      <div className="bg-forest text-cream border-2 border-brass p-8 sm:p-12 space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-brass text-ink rounded-none flex-shrink-0">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <span className="font-mono text-xs text-brass uppercase tracking-widest">
              INQUIRY REF // {inquiryId}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream mt-1">
              {t('successTitle')}
            </h3>
            <p className="text-sm text-cream/80 mt-2 leading-relaxed">
              {t('successDesc')}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-brass/25 flex flex-col sm:flex-row gap-3">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-6 py-3 bg-brass hover:bg-brass-light text-ink font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t('openWhatsappAgain')}</span>
            </a>
          )}
          <button
            type="button"
            onClick={handleReset}
            className="min-h-[48px] px-6 py-3 border border-cream/30 hover:border-brass text-cream text-xs uppercase font-mono tracking-wider inline-flex items-center justify-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t('resetForm')}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-cream-light border border-ink/15 p-6 sm:p-10 space-y-6 shadow-sm"
    >
      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-forest block">
          SPECIFICATION INTAKE // 规格录入
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink mt-1">
          {t('title')}
        </h3>
        <p className="text-xs text-ink-subtle mt-1">{t('subtitle')}</p>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="p-4 bg-film/10 border-l-4 border-film text-film-dark text-xs flex items-center gap-3 font-medium"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-film" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Contact Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
            {t('nameLabel')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={t('namePlaceholder')}
            className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
            {t('companyLabel')}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder={t('companyPlaceholder')}
            className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Country, Email, Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="country" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
            {t('countryLabel')}
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            placeholder={t('countryPlaceholder')}
            className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
            {t('emailLabel')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t('emailPlaceholder')}
            className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
            {t('phoneLabel')}
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('phonePlaceholder')}
            className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Product Select & Size/Thickness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="product" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
            {t('productLabel')}
          </label>
          <select
            id="product"
            name="product"
            required
            value={formData.product}
            onChange={handleChange}
            className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          >
            <option value="">{t('productPlaceholder')}</option>
            {products.map((p) => (
              <option key={p.id} value={p.name[locale]}>
                [{p.code}] {p.name[locale]}
              </option>
            ))}
            <option value={t('productOptionCustom')}>{t('productOptionCustom')}</option>
          </select>
        </div>

        <div>
          <label htmlFor="sizeThickness" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
            {t('sizeThicknessLabel')}
          </label>
          <input
            type="text"
            id="sizeThickness"
            name="sizeThickness"
            required
            value={formData.sizeThickness}
            onChange={handleChange}
            placeholder={t('sizeThicknessPlaceholder')}
            className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>
      </div>

      {/* Row 4: Quantity & Port */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="quantity" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
            {t('quantityLabel')}
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            required
            value={formData.quantity}
            onChange={handleChange}
            placeholder={t('quantityPlaceholder')}
            className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>

        <div>
          <label htmlFor="port" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
            {t('portLabel')}
          </label>
          <input
            type="text"
            id="port"
            name="port"
            required
            value={formData.port}
            onChange={handleChange}
            placeholder={t('portPlaceholder')}
            className="w-full min-h-[44px] px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors"
          />
        </div>
      </div>

      {/* Row 5: Detailed Requirements */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-ink mb-1.5 font-semibold">
          {t('messageLabel')}
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder={t('messagePlaceholder')}
          className="w-full px-3.5 py-2.5 bg-white border border-ink/20 text-ink text-sm focus:border-forest focus:ring-1 focus:ring-forest transition-colors resize-y"
        />
      </div>

      {/* Submit Action */}
      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-[48px] px-8 py-3.5 bg-forest hover:bg-forest-light text-cream font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2.5 border border-brass/50 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>{t('submittingBtn')}</span>
          ) : (
            <>
              <Send className="w-4 h-4 text-brass" />
              <span>{t('submitBtn')}</span>
              <ArrowRight className="w-4 h-4 text-brass" />
            </>
          )}
        </button>

        <span className="text-[11px] font-mono text-ink-subtle">
          * DIRECT MILL EXPORT DISPATCH · RESPONSE WITHIN 12H
        </span>
      </div>
    </form>
  );
}

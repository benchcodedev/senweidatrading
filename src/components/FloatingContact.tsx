'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { companyConfig } from '@/config/company';
import { MessageSquare, QrCode, X } from 'lucide-react';

export default function FloatingContact() {
  const locale = useLocale() as 'en' | 'zh';
  const t = useTranslations('Common');
  const contactT = useTranslations('Contact');
  const [wechatOpen, setWechatOpen] = useState(false);

  const whatsappHref = `https://wa.me/${companyConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    locale === 'zh'
      ? '您好，徐州森炜达贸易有限公司，我想咨询建筑覆膜模板与胶合板出口报价。'
      : 'Hello Senweida Trading Co., Ltd., I would like to inquire about your plywood and construction formwork.'
  )}`;

  return (
    <>
      <div className="fixed bottom-5 right-4 sm:right-6 z-30 flex flex-col items-end gap-2.5">
        {/* In Chinese locale, show WeChat QR trigger above WhatsApp; in English, show WhatsApp primary */}
        {locale === 'zh' && (
          <button
            type="button"
            onClick={() => setWechatOpen(true)}
            aria-label={t('wechatUs')}
            className="min-h-[48px] px-4 py-2.5 bg-forest text-cream border border-brass shadow-xl hover:bg-forest-light inline-flex items-center gap-2.5 text-xs font-medium transition-all"
          >
            <QrCode className="w-4 h-4 text-brass flex-shrink-0" />
            <span>{t('wechatUs')}</span>
          </button>
        )}

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t('whatsappUs')}
          className="min-h-[48px] px-4 py-3 bg-brass hover:bg-brass-light text-ink font-bold text-xs uppercase tracking-wider shadow-xl border border-ink/20 inline-flex items-center gap-2.5 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-ink/10 flex-shrink-0" />
          <span>WhatsApp RFQ</span>
        </a>
      </div>

      {/* Quick WeChat QR Modal */}
      {wechatOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={contactT('wechatCardTitle')}
          className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setWechatOpen(false)}
        >
          <div
            className="bg-cream border-2 border-brass max-w-sm w-full p-6 relative text-ink shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setWechatOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-ink hover:text-film"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="font-mono text-[11px] uppercase tracking-widest text-forest block mb-1">
              WECHAT DIRECT // 微信外贸专席
            </span>
            <h3 className="font-serif text-xl font-bold text-ink mb-2">
              {companyConfig.name.zh}
            </h3>
            <p className="text-xs text-ink-muted mb-4">
              {contactT('wechatCardDesc')}
            </p>
            <div className="relative w-56 h-56 mx-auto border border-ink/15 bg-white p-2">
              <Image
                src={companyConfig.contact.wechatQrCodePath}
                alt="WeChat QR Code"
                fill
                sizes="224px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 pt-3 border-t border-ink/10 text-center">
              <span className="font-mono text-xs text-ink-muted block">
                {contactT('wechatIdLabel')}:
              </span>
              <span className="font-mono text-sm font-bold text-forest select-all">
                {companyConfig.contact.wechatId}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

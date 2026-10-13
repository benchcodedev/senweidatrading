import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { routing } from '@/i18n/routing';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.senweidatrading.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/products', '/quality', '/gallery', '/contact'];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const route of routes) {
    for (const locale of routing.locales) {
      const url = `${BASE_URL}/${locale}${route}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${route}`,
            'zh-CN': `${BASE_URL}/zh${route}`,
          },
        },
      });
    }
  }

  // Dynamic product pages
  for (const prod of products) {
    for (const locale of routing.locales) {
      const url = `${BASE_URL}/${locale}/products/${prod.slug}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        alternates: {
          languages: {
            en: `${BASE_URL}/en/products/${prod.slug}`,
            'zh-CN': `${BASE_URL}/zh/products/${prod.slug}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}

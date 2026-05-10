import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/data/site';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: { default: 'MinibusInsurance.co.nz — Compare Minibus Insurance', template: '%s | MinibusInsurance.co.nz' },
  description: 'Compare minibus insurance from leading NZ providers. Schools, councils, tourism, and commercial fleets. Expert advice, no broker fees.',
  metadataBase: new URL(SITE.domain),
  openGraph: { siteName: SITE.name, locale: 'en_NZ', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.domain,
    email: SITE.email,
    description: 'NZ minibus insurance comparison and broker referral service.',
    areaServed: 'New Zealand',
  };
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.domain,
    potentialAction: { '@type': 'SearchAction', target: `${SITE.domain}/blog/` },
  };
  return (
    <html lang="en-NZ">
      <body className="font-sans bg-white text-gray-900 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

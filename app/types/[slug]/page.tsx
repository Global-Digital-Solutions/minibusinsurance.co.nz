import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { SITE } from '@/data/site';

export function generateStaticParams() {
  return COVERAGE_TYPES.map(ct => ({ slug: ct.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ct = COVERAGE_TYPES.find(c => c.slug === params.slug);
  if (!ct) return {};
  return { title: ct.metaTitle, description: ct.metaDesc, alternates: { canonical: `${SITE.domain}/types/${ct.slug}/` } };
}

export default function CoverageTypePage({ params }: { params: { slug: string } }) {
  const ct = COVERAGE_TYPES.find(c => c.slug === params.slug);
  if (!ct) notFound();

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'Cover Types', item: `${SITE.domain}/types/` },
      { '@type': 'ListItem', position: 3, name: ct.name, item: `${SITE.domain}/types/${ct.slug}/` },
    ],
  };

  const heroImages = ['/minibus_1.jpg', '/minibus_2.jpg', '/minibus_3.jpg'];
  const allSlugs = COVERAGE_TYPES.map(c => c.slug);
  const heroImage = heroImages[allSlugs.indexOf(ct.slug) % heroImages.length];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="relative bg-gray-900 py-14 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-gray-200">Home</Link><span className="mx-2">/</span>
            <Link href="/types/" className="hover:text-gray-200">Cover Types</Link><span className="mx-2">/</span>
            <span className="text-gray-200">{ct.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-4">{ct.name}</h1>
              <p className="text-gray-300 text-lg mb-3">{ct.shortDesc}</p>
              <p className="text-xl font-bold" style={{ color: '#70e8b0' }}>{ct.fromPrice}</p>
            </div>
            <div><QuoteForm /></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {ct.name}</h2>
                <p className="text-gray-600 leading-relaxed">{ct.description}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
                <ul className="space-y-2">
                  {ct.includes.map(item => (
                    <li key={item} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Other Cover Types</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {COVERAGE_TYPES.filter(c => c.slug !== ct.slug).map(other => (
                    <Link key={other.slug} href={`/types/${other.slug}/`}
                      className="border border-gray-200 rounded-xl p-4 hover:border-[#70e8b0] hover:shadow-sm transition-all group">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#136771]">{other.name}</h3>
                      </div>
                      <p className="text-gray-500 text-xs">{other.shortDesc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <QuoteForm compact />
              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-white text-sm font-bold mb-1">Pricing Guide</p>
                <p className="text-[#70e8b0] font-semibold text-sm">{ct.fromPrice}</p>
                <p className="text-gray-400 text-xs mt-1">Actual premiums depend on vehicle value, use, and driver history.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" style={{ backgroundColor: '#136771' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get {ct.name} Quotes</h2>
          <p className="text-teal-200 mb-6">Licensed NZ brokers — fast, no obligation.</p>
          <Link href="/contact/" className="inline-block text-gray-900 font-bold px-8 py-3.5 rounded-xl" style={{ backgroundColor: '#70e8b0' }}>Request My Quotes →</Link>
        </div>
      </section>
    </>
  );
}

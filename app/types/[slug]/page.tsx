import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import QuoteForm from '../../components/QuoteForm';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { BLOG_POSTS } from '@/data/blog-posts';
import { SECTORS } from '@/data/sectors';
import { SITE } from '@/data/site';

export function generateStaticParams() {
  return COVERAGE_TYPES.map(ct => ({ slug: ct.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const ct = COVERAGE_TYPES.find(c => c.slug === params.slug);
  if (!ct) return {};
  return {
    title: ct.metaTitle,
    description: ct.metaDesc,
    alternates: { canonical: `${SITE.domain}/types/${ct.slug}/` },
    openGraph: { title: ct.metaTitle, description: ct.metaDesc, url: `${SITE.domain}/types/${ct.slug}/` },
  };
}

function renderLongContent(text: string) {
  return text.split('\n\n').map((para, i) => {
    if (para.startsWith('**') && para.endsWith('**') && para.split('**').length === 3) {
      return <h2 key={i} className="text-xl font-bold text-[#136771] mt-8 mb-3">{para.replace(/\*\*/g, '')}</h2>;
    }
    const html = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    return <p key={i} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default function CoverageTypePage({ params }: { params: { slug: string } }) {
  const ct = COVERAGE_TYPES.find(c => c.slug === params.slug);
  if (!ct) notFound();

  const relatedPosts = ct.relatedBlogSlugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean) as typeof BLOG_POSTS;

  const heroImages = ['/minibus_1.jpg', '/minibus_2.jpg', '/minibus_3.jpg'];
  const allSlugs = COVERAGE_TYPES.map(c => c.slug);
  const heroImage = heroImages[allSlugs.indexOf(ct.slug) % heroImages.length];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: ct.name,
    description: ct.description,
    offers: { '@type': 'Offer', price: ct.fromPrice, priceCurrency: 'NZD' },
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.domain },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    url: `${SITE.domain}/types/${ct.slug}/`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ct.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'Cover Types', item: `${SITE.domain}/types/` },
      { '@type': 'ListItem', position: 3, name: ct.name, item: `${SITE.domain}/types/${ct.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section className="relative bg-gray-900 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-5">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/types/" className="hover:text-gray-200">Cover Types</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{ct.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-4">{ct.name}</h1>
              <p className="text-gray-300 text-lg mb-4">{ct.shortDesc}</p>
              <p className="text-xl font-bold" style={{ color: '#70e8b0' }}>{ct.fromPrice}</p>
            </div>
            <div className="flex justify-end"><QuoteForm /></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <article className="lg:col-span-2 space-y-8">

            <div>
              <p className="text-gray-700 text-lg leading-relaxed">{ct.description}</p>
            </div>

            <div>{renderLongContent(ct.longContent)}</div>

            {/* Includes / Excludes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                <h2 className="font-bold text-green-800 mb-3">What&apos;s Included</h2>
                <ul className="space-y-2">
                  {ct.includes.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <h2 className="font-bold text-red-800 mb-3">Common Exclusions</h2>
                <ul className="space-y-2">
                  {ct.excludes.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sectors */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Who This Cover Suits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SECTORS.map((s) => (
                  <Link key={s.slug} href={`/sectors/${s.slug}/`}
                    className="group border border-gray-200 rounded-xl p-3 hover:border-[#70e8b0] hover:shadow-sm transition-all flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 group-hover:text-[#136771]">{s.name}</div>
                      <div className="text-xs text-gray-500 leading-tight mt-0.5">{s.shortDesc.split('—')[0].trim()}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {ct.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related articles */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {relatedPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}/`}
                      className="group border border-gray-200 rounded-xl overflow-hidden hover:border-[#70e8b0] hover:shadow-md transition-all">
                      <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${post.heroImage})` }} />
                      <div className="p-4">
                        <span className="text-xs font-semibold uppercase tracking-wide text-[#136771]">{post.category}</span>
                        <div className="font-semibold text-gray-900 text-sm mt-1 group-hover:text-[#136771]">{post.title}</div>
                        <div className="text-xs text-gray-400 mt-1">{post.readTime}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other cover types */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Other Cover Types</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COVERAGE_TYPES.filter(c => c.slug !== ct.slug).map(other => (
                  <Link key={other.slug} href={`/types/${other.slug}/`}
                    className="border border-gray-200 rounded-xl p-4 hover:border-[#70e8b0] hover:shadow-sm transition-all group">
                    <div className="text-xl mb-1">{other.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-[#136771]">{other.name}</h3>
                    <p className="text-gray-500 text-xs mt-0.5">{other.shortDesc}</p>
                    <p className="text-xs font-semibold text-[#136771] mt-1">{other.fromPrice}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="border-t pt-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#136771] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">MI</div>
              <div>
                <div className="font-semibold text-[#136771]">MinibusInsurance.co.nz Editorial Team</div>
                <div className="text-sm text-gray-500 mt-0.5">Content reviewed by licensed NZ commercial motor insurance advisers. Information is general in nature — seek advice from a licensed adviser for your specific circumstances.</div>
              </div>
            </div>

            {/* Disclosure */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <h3 className="font-bold text-amber-900 mb-1 text-sm">Important Disclosure</h3>
              <p className="text-amber-800 text-xs leading-relaxed">MinibusInsurance.co.nz is a referral service only. We do not provide financial advice. Information on this page is general in nature and does not constitute a recommendation to purchase any specific insurance product. Always seek advice from a licensed financial adviser.</p>
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-6 space-y-5">
              <QuoteForm compact />
              <div className="bg-gray-900 rounded-xl p-4">
                <p className="text-white text-sm font-bold mb-1">Pricing Guide</p>
                <p className="text-[#70e8b0] font-semibold text-sm">{ct.fromPrice}</p>
                <p className="text-gray-400 text-xs mt-1">Actual premiums depend on vehicle value, use type, and driver history.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#136771] mb-3 text-sm">All Cover Types</h3>
                <ul className="space-y-2">
                  {COVERAGE_TYPES.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/types/${c.slug}/`}
                        className={`text-sm hover:underline flex items-center gap-1.5 ${c.slug === ct.slug ? 'font-bold text-[#136771]' : 'text-[#136771]'}`}>
                        <span>{c.icon}</span><span>{c.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#136771] mb-3 text-sm">By Sector</h3>
                <ul className="space-y-2">
                  {SECTORS.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/sectors/${s.slug}/`} className="text-sm text-[#136771] hover:underline flex items-center gap-1.5">
                        <span>{s.icon}</span><span>{s.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/compare/" className="text-[#136771] hover:underline">Compare Providers</Link></li>
                  <li><Link href="/faqs/" className="text-[#136771] hover:underline">FAQs</Link></li>
                  <li><Link href="/contact/" className="text-[#136771] hover:underline">Get a Quote</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-12" style={{ backgroundColor: '#136771' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get {ct.name} Quotes</h2>
          <p className="text-teal-200 mb-6">Licensed NZ advisers compare the best options — fast, no obligation.</p>
          <Link href="/contact/" className="inline-block text-gray-900 font-bold px-8 py-3.5 rounded-xl" style={{ backgroundColor: '#70e8b0' }}>Request My Quotes →</Link>
        </div>
      </section>
    </>
  );
}

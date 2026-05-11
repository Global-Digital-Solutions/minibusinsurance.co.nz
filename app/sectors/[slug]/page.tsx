import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SECTORS } from '@/data/sectors';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { BLOG_POSTS } from '@/data/blog-posts';
import { SITE } from '@/data/site';
import QuoteForm from '@/app/components/QuoteForm';

export async function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const sector = SECTORS.find((s) => s.slug === params.slug);
  if (!sector) return { title: 'Not Found' };
  return {
    title: sector.metaTitle,
    description: sector.metaDesc,
    alternates: { canonical: `${SITE.domain}/sectors/${sector.slug}/` },
    openGraph: { title: sector.metaTitle, description: sector.metaDesc, url: `${SITE.domain}/sectors/${sector.slug}/`, images: [{ url: sector.heroImage }] },
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

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = SECTORS.find((s) => s.slug === params.slug);
  if (!sector) notFound();

  const relatedPosts = sector.relatedBlogSlugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean) as typeof BLOG_POSTS;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${sector.name} Minibus Insurance`,
    description: sector.description,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.domain },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    url: `${SITE.domain}/sectors/${sector.slug}/`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sector.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.domain },
      { '@type': 'ListItem', position: 2, name: 'Who We Cover', item: `${SITE.domain}/sectors/` },
      { '@type': 'ListItem', position: 3, name: sector.name, item: `${SITE.domain}/sectors/${sector.slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${sector.heroImage}')` }} />
        <div className="absolute inset-0 bg-[#136771]/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="text-sm text-[#70e8b0] mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/sectors/" className="hover:underline">Who We Cover</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{sector.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#70e8b0]/20 border border-[#70e8b0]/40 text-[#70e8b0] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            ✓ Specialist Cover Available
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl">{sector.name} Minibus Insurance</h1>
          <p className="text-[#70e8b0] mt-3 text-lg max-w-2xl">{sector.shortDesc}</p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Article content */}
          <article className="lg:col-span-2 space-y-8">

            {/* Intro */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">{sector.description}</p>
            </div>

            {/* Long-form content */}
            <div>
              {renderLongContent(sector.longContent)}
            </div>

            {/* Key insurance needs */}
            <div className="bg-[#136771]/5 border border-[#136771]/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-[#136771] mb-4">Key Insurance Needs for {sector.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sector.keyNeeds.map((need) => (
                  <div key={need} className="flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#70e8b0]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{need}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cover types */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Cover Types for {sector.name}</h2>
              <p className="text-gray-500 mb-5 text-sm">Explore the policy types most relevant to your operation.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COVERAGE_TYPES.map((ct) => (
                  <Link key={ct.slug} href={`/types/${ct.slug}/`}
                    className="group border border-gray-200 rounded-xl p-4 hover:border-[#70e8b0] hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">{ct.icon}</div>
                    <div className="font-semibold text-[#136771] group-hover:text-[#0e4f56]">{ct.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{ct.shortDesc}</div>
                    <div className="text-sm font-semibold text-[#136771] mt-2">{ct.fromPrice}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {sector.faqs.map((faq, i) => (
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

            {/* Author */}
            <div className="border-t pt-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#136771] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">MI</div>
              <div>
                <div className="font-semibold text-[#136771]">MinibusInsurance.co.nz Editorial Team</div>
                <div className="text-sm text-gray-500 mt-0.5">Specialist content reviewed by our panel of licensed NZ commercial motor advisers. Information is general in nature — seek advice from a licensed adviser for your specific circumstances.</div>
              </div>
            </div>

            {/* Disclosure */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <h3 className="font-bold text-amber-900 mb-1 text-sm">Important Disclosure</h3>
              <p className="text-amber-800 text-xs leading-relaxed">MinibusInsurance.co.nz is a referral service only. We do not provide financial advice. Information on this page is general in nature and does not constitute a recommendation to purchase any specific insurance product. Always seek advice from a licensed financial adviser for your individual circumstances.</p>
            </div>

            {/* CTA */}
            <div className="bg-[#136771] rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Get a Quote for {sector.name}</h2>
              <p className="text-[#70e8b0] mb-6 max-w-xl mx-auto">Our advisers specialise in {sector.name.toLowerCase()} minibus insurance. Get connected with the right provider for your operation — no obligation.</p>
              <Link href="/contact/" className="inline-block bg-[#70e8b0] text-[#136771] font-bold px-8 py-3 rounded-lg hover:bg-[#5dd4a0] transition-colors">
                Request a Free Quote →
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-6 space-y-6">
              <QuoteForm compact />

              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#136771] mb-3 text-sm">Other Sectors We Cover</h3>
                <ul className="space-y-2">
                  {SECTORS.filter((s) => s.slug !== sector.slug).map((s) => (
                    <li key={s.slug}>
                      <Link href={`/sectors/${s.slug}/`} className="text-sm text-[#136771] hover:underline flex items-center gap-2">
                        <span>{s.icon}</span><span>{s.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#136771] mb-3 text-sm">Cover Types</h3>
                <ul className="space-y-2">
                  {COVERAGE_TYPES.map((ct) => (
                    <li key={ct.slug}>
                      <Link href={`/types/${ct.slug}/`} className="text-sm text-[#136771] hover:underline">{ct.name}</Link>
                      <div className="text-xs text-gray-400">{ct.fromPrice}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#136771] text-white rounded-2xl p-5">
                <h3 className="font-semibold mb-2 text-sm">Speak to a Specialist</h3>
                <p className="text-sm text-[#70e8b0] mb-3">Licensed NZ advisers compare the best options for your operation.</p>
                <Link href="/contact/" className="block text-center bg-[#70e8b0] text-[#136771] font-bold py-2 rounded-lg text-sm hover:bg-[#5dd4a0] transition-colors">
                  Contact Us
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Useful Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/compare/" className="text-[#136771] hover:underline">Compare Providers</Link></li>
                  <li><Link href="/faqs/" className="text-[#136771] hover:underline">FAQs</Link></li>
                  <li><Link href="/blog/" className="text-[#136771] hover:underline">Insurance Guides</Link></li>
                  <li><Link href="/contact/" className="text-[#136771] hover:underline">Get a Quote</Link></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from './components/QuoteForm';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { SECTORS } from '@/data/sectors';
import { BLOG_POSTS } from '@/data/blog-posts';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'MinibusInsurance.co.nz — Compare Minibus Insurance',
  description: 'Compare minibus insurance from leading NZ providers. Schools, councils, tourism, and commercial fleets. Expert advice, no broker fees.',
  alternates: { canonical: `${SITE.domain}/` },
};

const faqs = [
  { q: 'Do I need commercial insurance for my minibus?', a: 'Yes. Any minibus used to carry passengers — even for non-profit or community purposes — typically requires commercial motor vehicle insurance. Standard private vehicle policies exclude passenger-carrying operations.' },
  { q: 'What is the difference between fleet and individual minibus cover?', a: 'Individual policies cover a single named vehicle. Fleet insurance covers multiple vehicles (usually 2+) under one policy, often with a single excess, single renewal date, and discounted per-vehicle premiums.' },
  { q: 'How much does minibus insurance cost?', a: 'Premiums vary significantly based on vehicle age and value, number of seats, intended use, driver history, and annual kilometres. Schools and community operators typically pay less than commercial hire and reward operators.' },
  { q: 'Do volunteer drivers need to be listed on the policy?', a: 'This depends on your policy type. Named driver policies require all drivers — including volunteers — to be listed. Some policies offer volunteer driver extensions that automatically cover unlisted volunteers.' },
  { q: 'Can I get agreed value cover for my minibus?', a: 'Yes — agreed value policies are available for minibuses. The sum insured is agreed at inception, and you receive that amount in the event of total loss regardless of market depreciation at the time of claim.' },
];

export default function HomePage() {
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1400&h=600&fit=crop)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-medium px-3 py-1.5 rounded-full mb-5 border" style={{ backgroundColor: 'rgba(112,232,176,0.1)', borderColor: 'rgba(112,232,176,0.3)', color: '#70e8b0' }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span>Licensed NZ Insurance Brokers</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
                Protect Your Minibus<br /><span style={{ color: '#70e8b0' }}>With Confidence</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Compare minibus insurance from leading NZ providers. Schools, councils, tourism operators, and commercial fleets — we connect you with licensed brokers who know your sector.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['NZ Owned & Operated', 'No Broker Fees', 'Fast Response', 'All Operator Types'].map(pill => (
                  <span key={pill} className="inline-flex items-center space-x-1.5 text-xs font-medium px-3 py-1.5 rounded-full border" style={{ backgroundColor: 'rgba(112,232,176,0.1)', borderColor: 'rgba(112,232,176,0.3)', color: '#70e8b0' }}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>{pill}</span>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="inline-block text-gray-900 font-bold px-6 py-3 rounded-xl text-sm" style={{ backgroundColor: '#70e8b0' }}>Get a Quote →</Link>
                <Link href="/compare/" className="inline-block border text-white font-semibold px-6 py-3 rounded-xl text-sm border-gray-600 hover:border-gray-400">Compare Providers</Link>
              </div>
            </div>
            <div className="flex justify-end">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-gray-100 py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { val: '50+', label: 'Insurance Products' },
              { val: '6', label: 'Operator Sectors' },
              { val: '24hr', label: 'Response Time' },
              { val: '100%', label: 'No Broker Fees' },
            ].map(s => (
              <div key={s.val}>
                <p className="text-2xl font-extrabold" style={{ color: '#136771' }}>{s.val}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">How Our Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Tell Us About Your Minibus', desc: 'Share your operator type, vehicle details, passenger capacity, and how you use it. Takes about 2 minutes.' },
              { step: '2', title: 'We Match You with Brokers', desc: 'Licensed NZ brokers who specialise in your sector compare policies from leading commercial insurers.' },
              { step: '3', title: 'Choose the Right Cover', desc: 'Review your quotes, ask questions, and select the policy that best protects your operation.' },
            ].map(s => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg mx-auto mb-4" style={{ backgroundColor: '#70e8b0' }}>{s.step}</div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Coverage for Every Minibus Operation</h2>
          <p className="text-gray-500 mb-8">From basic third-party cover to comprehensive fleet policies — find the right protection.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {COVERAGE_TYPES.map(ct => (
              <Link key={ct.slug} href={`/types/${ct.slug}/`}
                className="border border-gray-200 rounded-xl p-5 hover:border-[#70e8b0] hover:shadow-sm transition-all group">
                <div className="text-2xl mb-3">{ct.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#136771]">{ct.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{ct.shortDesc}</p>
                <p className="text-xs font-semibold" style={{ color: '#136771' }}>{ct.fromPrice}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-14" style={{ backgroundColor: '#136771' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-2">Why Minibus Insurance is Essential</h2>
          <p className="text-teal-200 mb-8">Specialist cover tailored to your sector.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SECTORS.map(s => (
              <Link key={s.slug} href={`/sectors/${s.slug}/`}
                className="bg-white/10 border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-all group">
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-bold text-white mb-1 text-sm">{s.name}</h3>
                <p className="text-teal-200 text-xs leading-relaxed">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Minibus Insurance Guides</h2>
            <Link href="/blog/" className="text-sm font-medium hover:underline" style={{ color: '#136771' }}>View all →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}/`}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all group">
                <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${post.heroImage})` }} />
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#136771' }}>{post.category}</span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2 text-sm leading-snug group-hover:text-[#136771]">{post.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get Your Minibus Insurance Quotes Today</h2>
          <p className="text-gray-400 mb-6">Licensed NZ brokers compare policies from leading commercial insurers — no obligation.</p>
          <Link href="/contact/" className="inline-block text-gray-900 font-bold px-8 py-3.5 rounded-xl text-base" style={{ backgroundColor: '#70e8b0' }}>Request My Quotes →</Link>
        </div>
      </section>
    </>
  );
}

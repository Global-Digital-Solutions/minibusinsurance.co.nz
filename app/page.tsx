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
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/minibus_1.jpg)' }} />
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
              <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 mb-8">
                {['NZ Owned & Operated', 'No Broker Fees', 'Fast Response', 'All Operator Types'].map(pill => (
                  <span key={pill} className="inline-flex items-center space-x-1.5 text-xs font-medium px-3 py-1.5 rounded-full border whitespace-nowrap" style={{ backgroundColor: 'rgba(112,232,176,0.1)', borderColor: 'rgba(112,232,176,0.3)', color: '#70e8b0' }}>
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
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

      {/* Trust badges */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                val: 'Licensed Advisers',
                label: 'FMCA-licensed NZ brokers only',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                val: '24hr Response',
                label: 'Reply within one business day',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                val: 'Multiple Providers',
                label: 'NZI, Vero, Ando, Gallagher & more',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 01-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                val: 'No Broker Fees',
                label: 'Free comparison service',
              },
            ].map(b => (
              <div key={b.val} className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 hover:border-[#136771]/30 hover:bg-[#136771]/5 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: '#136771' }}>
                  {b.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm leading-tight">{b.val}</div>
                  <div className="text-xs text-gray-500 mt-0.5 leading-tight">{b.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full border" style={{ color: '#70e8b0', borderColor: 'rgba(112,232,176,0.3)', backgroundColor: 'rgba(112,232,176,0.08)' }}>How It Works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Three Steps to the Right Cover</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Our advisers handle the hard work — you just tell us about your operation.</p>
          </div>

          <style>{`
            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(32px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            .hiw-card {
              opacity: 0;
              animation: fadeUp 0.6s ease forwards;
            }
            .hiw-card:nth-child(1) { animation-delay: 0.1s; }
            .hiw-card:nth-child(2) { animation-delay: 0.3s; }
            .hiw-card:nth-child(3) { animation-delay: 0.5s; }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-14 left-1/4 right-1/4 h-0.5 z-0" style={{ background: 'linear-gradient(90deg, rgba(112,232,176,0.15) 0%, rgba(112,232,176,0.5) 50%, rgba(112,232,176,0.15) 100%)' }} />

            {[
              {
                step: '01',
                title: 'Tell Us About Your Operation',
                desc: 'Share your operator type, vehicle details, passenger capacity, and how you use your minibus. Takes about two minutes — no pressure, no jargon.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
              },
              {
                step: '02',
                title: 'We Match You to the Right Adviser',
                desc: 'A licensed NZ adviser who specialises in your sector compares policies across NZI, Vero, Ando, Gallagher, and other commercial insurers on your behalf.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                step: '03',
                title: 'Choose Your Cover & Get Protected',
                desc: 'Review your quotes side by side, ask questions, and pick the policy that fits your operation — not the most expensive one, the most appropriate one.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                  </svg>
                ),
              },
            ].map((s, i) => (
              <div key={s.step} className="hiw-card relative z-10 bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-[#70e8b0]/50 hover:bg-gray-750 transition-all group">
                {/* Step number top-right */}
                <div className="absolute top-5 right-6 text-5xl font-black opacity-10 text-white select-none">{s.step}</div>

                {/* Icon circle */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#70e8b0' }}>
                  {s.icon}
                </div>

                {/* Step badge */}
                <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#70e8b0' }}>Step {i + 1}</div>

                <h3 className="text-lg font-bold text-white mb-3 leading-snug">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>

                {/* Arrow connector — shows between cards on desktop */}
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full items-center justify-center border border-gray-700 bg-gray-900">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact/" className="inline-block font-bold px-8 py-4 rounded-xl text-gray-900 text-base hover:opacity-90 transition-opacity" style={{ backgroundColor: '#70e8b0' }}>
              Get Started — Free &amp; No Obligation →
            </Link>
            <p className="text-gray-500 text-xs mt-3">Response within 24 business hours · Licensed NZ advisers · No broker fees</p>
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

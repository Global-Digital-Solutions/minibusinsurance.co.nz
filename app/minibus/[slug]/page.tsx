import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LOCATIONS } from '@/data/locations';
import { COVERAGE_TYPES } from '@/data/coverage-types';
import { SECTORS } from '@/data/sectors';
import QuoteForm from '@/app/components/QuoteForm';

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);
  if (!loc) return { title: 'Not Found' };
  return {
    title: loc.metaTitle,
    description: loc.metaDesc,
    alternates: { canonical: `https://www.minibusinsurance.co.nz/minibus/${loc.slug}/` },
    openGraph: { title: loc.metaTitle, description: loc.metaDesc, url: `https://www.minibusinsurance.co.nz/minibus/${loc.slug}/` },
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = LOCATIONS.find((l) => l.slug === params.slug);
  if (!loc) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Minibus Insurance ${loc.name}`,
    description: loc.description,
    areaServed: { '@type': 'City', name: loc.name, addressRegion: loc.region, addressCountry: 'NZ' },
    provider: { '@type': 'Organization', name: 'MinibusInsurance.co.nz', url: 'https://www.minibusinsurance.co.nz' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-[#136771] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-[#70e8b0] mb-4">
            <Link href="/" className="hover:underline">Home</Link> › <span className="text-white">Minibus Insurance {loc.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#70e8b0]/20 border border-[#70e8b0]/40 text-[#70e8b0] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            📍 {loc.region}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Minibus Insurance {loc.name}</h1>
          <p className="text-[#70e8b0] text-lg max-w-2xl">Specialist minibus insurance for {loc.name} operators — schools, community groups, commercial fleets, and more. Get connected with a licensed NZ adviser.</p>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-[#70e8b0]/10 border-y border-[#70e8b0]/30 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-6 justify-center text-sm text-[#136771] font-medium">
          <span>✓ Licensed NZ Advisers</span>
          <span>✓ Multiple Providers Compared</span>
          <span>✓ Free Service</span>
          <span>✓ No Obligation</span>
          <span>✓ Fast Response</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">

            {/* Main content */}
            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-4">Minibus Insurance in {loc.name}</h2>
              <p className="text-gray-700 leading-relaxed">{loc.description}</p>
            </div>

            {/* Operator types */}
            <div className="bg-[#136771]/5 border border-[#136771]/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-[#136771] mb-4">Operator Types We Cover in {loc.name}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {loc.operatorTypes.map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <span className="text-[#70e8b0]">✓</span>
                    <span className="text-gray-700 text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cover types */}
            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-5">Available Cover Types</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COVERAGE_TYPES.slice(0, 4).map((ct) => (
                  <Link key={ct.slug} href={`/types/${ct.slug}/`} className="group border border-gray-200 rounded-xl p-4 hover:border-[#70e8b0] hover:shadow-md transition-all">
                    <div className="text-xl mb-2">{ct.icon}</div>
                    <div className="font-semibold text-[#136771]">{ct.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{ct.fromPrice}</div>
                  </Link>
                ))}
              </div>
              <Link href="/types/" className="inline-block mt-4 text-sm text-[#136771] hover:underline font-medium">View all cover types →</Link>
            </div>

            {/* Who we cover */}
            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-5">Sectors We Cover</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SECTORS.map((s) => (
                  <Link key={s.slug} href={`/sectors/${s.slug}/`} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:border-[#70e8b0] hover:bg-[#136771]/5 transition-all text-sm text-[#136771]">
                    <span>{s.icon}</span><span>{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Why use us */}
            <div className="bg-[#136771] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-5">Why Get Your Quote Through MinibusInsurance.co.nz?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🏆', text: 'Licensed advisers only — every referral goes to a Financial Markets Authority licensed professional' },
                  { icon: '🔄', text: 'Multiple providers compared — NZI, Vero, Ando, Gallagher and specialist commercial insurers' },
                  { icon: '⚡', text: 'Fast response — most operators hear back within one business day' },
                  { icon: '💬', text: 'No obligation — compare options and decide in your own time' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[#70e8b0] text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclosure */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <p className="text-amber-800 text-sm"><strong>Disclosure:</strong> MinibusInsurance.co.nz is a referral service only. We do not provide insurance advice or sell policies directly. Information on this page is general in nature and should not be relied upon as financial advice. The referred advisers are licensed under the Financial Markets Conduct Act 2013.</p>
            </div>

            {/* Other locations */}
            <div>
              <h2 className="text-xl font-bold text-[#136771] mb-4">Other Locations</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {LOCATIONS.filter((l) => l.slug !== loc.slug).map((l) => (
                  <Link key={l.slug} href={`/minibus/${l.slug}/`} className="text-sm text-[#136771] hover:underline p-2 border border-gray-200 rounded-lg hover:border-[#70e8b0] text-center transition-colors">
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-6 space-y-6">
              <QuoteForm />
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#136771] mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/compare/" className="text-sm text-[#136771] hover:underline">Compare Providers</Link></li>
                  <li><Link href="/types/" className="text-sm text-[#136771] hover:underline">Cover Types</Link></li>
                  <li><Link href="/sectors/" className="text-sm text-[#136771] hover:underline">Who We Cover</Link></li>
                  <li><Link href="/faqs/" className="text-sm text-[#136771] hover:underline">FAQs</Link></li>
                  <li><Link href="/blog/" className="text-sm text-[#136771] hover:underline">Blog & Guides</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

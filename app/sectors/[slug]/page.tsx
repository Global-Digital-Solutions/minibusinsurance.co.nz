import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SECTORS } from '@/data/sectors';
import { COVERAGE_TYPES } from '@/data/coverage-types';
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
    alternates: { canonical: `https://www.minibusinsurance.co.nz/sectors/${sector.slug}/` },
    openGraph: { title: sector.metaTitle, description: sector.metaDesc, url: `https://www.minibusinsurance.co.nz/sectors/${sector.slug}/` },
  };
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const sector = SECTORS.find((s) => s.slug === params.slug);
  if (!sector) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${sector.name} Minibus Insurance`,
    description: sector.description,
    provider: { '@type': 'Organization', name: 'MinibusInsurance.co.nz', url: 'https://www.minibusinsurance.co.nz' },
    areaServed: 'NZ',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${sector.heroImage}')` }} />
        <div className="absolute inset-0 bg-[#136771]/80" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <nav className="text-sm text-[#70e8b0] mb-3">
            <Link href="/" className="hover:underline">Home</Link> › <Link href="/sectors/" className="hover:underline">Who We Cover</Link> › <span className="text-white">{sector.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#70e8b0]/20 border border-[#70e8b0]/40 text-[#70e8b0] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            ✓ Specialist Cover Available
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white">{sector.icon} {sector.name}</h1>
          <p className="text-[#70e8b0] mt-2 text-lg">{sector.shortDesc}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed">{sector.description}</p>
            </div>

            {/* Key Needs */}
            <div className="bg-[#136771]/5 border border-[#136771]/20 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-[#136771] mb-4">Key Insurance Needs for {sector.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sector.keyNeeds.map((need) => (
                  <div key={need} className="flex items-start gap-2">
                    <span className="text-[#70e8b0] text-lg mt-0.5">✓</span>
                    <span className="text-gray-700">{need}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cover types */}
            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-5">Available Cover Types</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COVERAGE_TYPES.map((ct) => (
                  <Link key={ct.slug} href={`/types/${ct.slug}/`} className="group border border-gray-200 rounded-xl p-4 hover:border-[#70e8b0] hover:shadow-md transition-all">
                    <div className="text-2xl mb-2">{ct.icon}</div>
                    <div className="font-semibold text-[#136771] group-hover:text-[#0e4f56]">{ct.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{ct.shortDesc}</div>
                    <div className="text-sm font-semibold text-[#136771] mt-2">{ct.fromPrice}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Why specialist */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <h3 className="font-bold text-amber-900 mb-2">Why {sector.name} Operators Need Specialist Cover</h3>
              <p className="text-amber-800 text-sm">Standard personal vehicle insurance is void the moment you carry passengers in a commercial or community setting. A specialist minibus policy ensures you are legally compliant, properly covered, and that your passengers are protected in the event of an incident.</p>
            </div>

            {/* CTA */}
            <div className="bg-[#136771] rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">Get a Quote for {sector.name}</h2>
              <p className="text-[#70e8b0] mb-6">Our advisers specialise in {sector.name.toLowerCase()} minibus insurance. Get connected with the right provider today.</p>
              <Link href="/contact/" className="inline-block bg-[#70e8b0] text-[#136771] font-bold px-8 py-3 rounded-lg hover:bg-[#5dd4a0] transition-colors">
                Request a Free Quote
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-6 space-y-6">
              <QuoteForm />

              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#136771] mb-3">Other Sectors We Cover</h3>
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

              <div className="bg-[#136771] text-white rounded-2xl p-5">
                <h3 className="font-semibold mb-2">📞 Speak to an Adviser</h3>
                <p className="text-sm text-[#70e8b0] mb-3">Our panel of licensed advisers can match you with the right cover for your operation.</p>
                <Link href="/contact/" className="block text-center bg-[#70e8b0] text-[#136771] font-bold py-2 rounded-lg text-sm hover:bg-[#5dd4a0] transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

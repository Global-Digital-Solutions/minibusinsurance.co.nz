import { Metadata } from 'next';
import Link from 'next/link';
import { SECTORS } from '@/data/sectors';

export const metadata: Metadata = {
  title: 'Who We Cover | Minibus Operators | MinibusInsurance.co.nz',
  description: 'Specialist minibus insurance for schools, councils, community groups, commercial operators, tourism providers, and disability support services across New Zealand.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/sectors/' },
};

export default function SectorsIndex() {
  return (
    <>
      <section className="bg-[#136771] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-[#70e8b0] mb-4">
            <Link href="/" className="hover:underline">Home</Link> › <span className="text-white">Who We Cover</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Who We Cover</h1>
          <p className="text-[#70e8b0] text-lg max-w-2xl">Specialist minibus insurance solutions for every type of operator — from schools and councils to commercial transport and tourism providers.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector) => (
            <Link key={sector.slug} href={`/sectors/${sector.slug}/`} className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-[#70e8b0] hover:shadow-lg transition-all">
              <div className="h-48 overflow-hidden">
                <img src={sector.heroImage} alt={sector.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <div className="text-2xl mb-2">{sector.icon}</div>
                <h2 className="font-bold text-[#136771] text-lg group-hover:text-[#0e4f56]">{sector.name}</h2>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">{sector.shortDesc}</p>
                <div className="mt-4 text-sm font-semibold text-[#136771]">Learn more →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

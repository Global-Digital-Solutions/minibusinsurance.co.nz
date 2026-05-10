import { Metadata } from 'next';
import Link from 'next/link';
import { COVERAGE_TYPES } from '@/data/coverage-types';

export const metadata: Metadata = {
  title: 'Minibus Cover Types | Compare Options | MinibusInsurance.co.nz',
  description: 'Compare all minibus insurance cover types — comprehensive, third party fire & theft, fleet cover, passenger liability, and agreed value. Find the right policy.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/types/' },
};

export default function TypesIndex() {
  return (
    <>
      <section className="bg-[#136771] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-[#70e8b0] mb-4">
            <Link href="/" className="hover:underline">Home</Link> › <span className="text-white">Cover Types</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Minibus Cover Types</h1>
          <p className="text-[#70e8b0] text-lg max-w-2xl">From comprehensive protection to basic third-party cover — compare all available options to find the right policy for your operation.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COVERAGE_TYPES.map((ct) => (
            <Link key={ct.slug} href={`/types/${ct.slug}/`} className="group border border-gray-200 rounded-2xl p-6 hover:border-[#70e8b0] hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{ct.icon}</div>
              <h2 className="font-bold text-[#136771] text-xl group-hover:text-[#0e4f56] mb-2">{ct.name}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{ct.shortDesc}</p>
              <div className="text-[#136771] font-semibold text-sm mb-3">{ct.fromPrice}</div>
              <div className="border-t pt-4">
                <div className="text-xs text-gray-500 font-semibold mb-2">Includes:</div>
                <ul className="space-y-1">
                  {ct.includes.slice(0, 3).map((item) => (
                    <li key={item} className="text-xs text-gray-600 flex items-center gap-2">
                      <span className="text-[#70e8b0]">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#136771]">Compare options →</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

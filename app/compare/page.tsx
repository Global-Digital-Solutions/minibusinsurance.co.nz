import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Compare Minibus Insurance Providers | NZI, Vero, Ando | MinibusInsurance.co.nz',
  description: 'Compare New Zealand\'s leading minibus insurance providers side by side. NZI, Vero, Ando, and specialist commercial insurers compared on price, cover, and service.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/compare/' },
};

const PROVIDERS = [
  {
    name: 'NZI',
    logo: '🏢',
    bestFor: 'Schools & community groups',
    minPrice: '$1,100',
    keyFeatures: ['Named driver policies', 'BOT cover available', 'Agreed value option', 'Windscreen included', 'Nationwide assessors'],
    rating: 4.5,
    highlight: true,
  },
  {
    name: 'Vero',
    logo: '🏢',
    bestFor: 'Commercial fleets',
    minPrice: '$1,250',
    keyFeatures: ['Fleet discounts', 'Any-driver options', 'Passenger liability add-on', 'Replacement vehicle', 'Online claims portal'],
    rating: 4.4,
    highlight: false,
  },
  {
    name: 'Ando',
    logo: '🏢',
    bestFor: 'Tourism & hire operators',
    minPrice: '$1,350',
    keyFeatures: ['Hire & reward cover', 'Tourist operator endorsement', 'High liability limits', 'Passenger protection', 'Flexible excess'],
    rating: 4.3,
    highlight: false,
  },
  {
    name: 'Gallagher',
    logo: '🏢',
    bestFor: 'Disability & care services',
    minPrice: '$1,150',
    keyFeatures: ['Disability sector expertise', 'Care & welfare cover', 'Specialist risk assessment', 'Incident support line', 'Policy review included'],
    rating: 4.4,
    highlight: false,
  },
];

const COMPARISON_TABLE = [
  { feature: 'Accidental damage', nzi: true, vero: true, ando: true, gallagher: true },
  { feature: 'Third-party liability', nzi: true, vero: true, ando: true, gallagher: true },
  { feature: 'Fire & theft', nzi: true, vero: true, ando: true, gallagher: true },
  { feature: 'Agreed value option', nzi: true, vero: true, ando: false, gallagher: true },
  { feature: 'Passenger liability', nzi: 'Add-on', vero: 'Add-on', ando: true, gallagher: 'Add-on' },
  { feature: 'Named driver policy', nzi: true, vero: false, ando: false, gallagher: false },
  { feature: 'Any-driver option', nzi: false, vero: true, ando: true, gallagher: true },
  { feature: 'Fleet discount', nzi: '3+ vehicles', vero: '2+ vehicles', ando: '3+ vehicles', gallagher: '2+ vehicles' },
  { feature: 'Hire & reward cover', nzi: 'Add-on', vero: 'Add-on', ando: true, gallagher: 'Add-on' },
  { feature: 'Windscreen included', nzi: true, vero: true, ando: false, gallagher: true },
  { feature: 'Replacement vehicle', nzi: false, vero: true, ando: true, gallagher: false },
  { feature: 'Online claims portal', nzi: true, vero: true, ando: true, gallagher: false },
];

const Check = () => <span className="text-green-500 font-bold">✓</span>;
const Cross = () => <span className="text-red-400">✗</span>;

function cellValue(val: boolean | string) {
  if (val === true) return <Check />;
  if (val === false) return <Cross />;
  return <span className="text-xs text-gray-600">{val}</span>;
}

export default function ComparePage() {
  return (
    <>
      <section className="relative bg-[#136771] py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/minibus_2.jpg)' }} />
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-[#70e8b0] mb-4">
            <Link href="/" className="hover:underline">Home</Link> › <span className="text-white">Compare Providers</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Compare Minibus Insurance Providers</h1>
          <p className="text-[#70e8b0] text-lg max-w-2xl">Side-by-side comparison of NZ's leading minibus insurance providers — helping you find the right cover for your operation.</p>
        </div>
      </section>

      {/* Provider cards */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {PROVIDERS.map((p) => (
            <div key={p.name} className={`rounded-2xl border-2 p-5 relative ${p.highlight ? 'border-[#70e8b0] shadow-lg' : 'border-gray-200'}`}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#70e8b0] text-[#136771] text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                </div>
              )}
              <div className="text-3xl mb-3">{p.logo}</div>
              <div className="font-bold text-[#136771] text-lg">{p.name}</div>
              <div className="text-xs text-gray-500 mb-3">{p.bestFor}</div>
              <div className="text-sm font-semibold text-[#136771] mb-3">From {p.minPrice}/year</div>
              <ul className="space-y-1.5 mb-4">
                {p.keyFeatures.map((f) => (
                  <li key={f} className="text-xs text-gray-600 flex items-center gap-1.5"><span className="text-[#70e8b0]">✓</span>{f}</li>
                ))}
              </ul>
              <div className="text-xs text-gray-500">Rating: {'⭐'.repeat(Math.floor(p.rating))} {p.rating}/5</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#136771] mb-5">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#136771] text-white">
                  <th className="text-left p-3 font-semibold">Feature</th>
                  <th className="text-center p-3 font-semibold">NZI</th>
                  <th className="text-center p-3 font-semibold">Vero</th>
                  <th className="text-center p-3 font-semibold">Ando</th>
                  <th className="text-center p-3 font-semibold">Gallagher</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_TABLE.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-gray-700">{row.feature}</td>
                    <td className="p-3 text-center">{cellValue(row.nzi)}</td>
                    <td className="p-3 text-center">{cellValue(row.vero)}</td>
                    <td className="p-3 text-center">{cellValue(row.ando)}</td>
                    <td className="p-3 text-center">{cellValue(row.gallagher)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">* Features are indicative and subject to policy terms. Prices are estimates for a standard 12-seat minibus. Contact an adviser for accurate quotes for your operation.</p>
        </div>

        {/* CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#136771] mb-4">Not Sure Which Provider Is Right for You?</h2>
            <p className="text-gray-600 mb-4">Every operation is different. A licensed adviser can assess your specific needs — fleet size, operator type, cover limits, compliance requirements — and find the right match across multiple providers.</p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-amber-800 text-sm">MinibusInsurance.co.nz is a referral service. We do not sell insurance directly. The comparison information above is general in nature and should not be relied upon as financial advice.</p>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

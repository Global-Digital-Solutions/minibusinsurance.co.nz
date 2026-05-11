import { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Compare Minibus Insurance Providers | NZI, Vero, Ando | MinibusInsurance.co.nz',
  description: 'Compare New Zealand\'s leading minibus insurance providers side by side. Expert advisers match you with the right cover — not the most expensive.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/compare/' },
};

const PROVIDERS = [
  {
    name: 'NZI',
    bestFor: 'Schools & community',
    fromPrice: '$1,100/yr',
    keyFeatures: ['Named driver policies', 'Board of Trustees cover', 'Agreed value option', 'Windscreen included', 'Nationwide assessors'],
    highlight: false,
  },
  {
    name: 'Vero',
    bestFor: 'Commercial fleets',
    fromPrice: '$1,250/yr',
    keyFeatures: ['Fleet discounts (2+ vehicles)', 'Any-driver options', 'Passenger liability add-on', 'Replacement vehicle', 'Online claims portal'],
    highlight: true,
  },
  {
    name: 'Ando',
    bestFor: 'Tourism & hire operators',
    fromPrice: '$1,350/yr',
    keyFeatures: ['Hire & reward endorsement', 'Tourist operator cover', 'High liability limits', 'Passenger protection', 'Flexible excess'],
    highlight: false,
  },
  {
    name: 'Gallagher',
    bestFor: 'Disability & care',
    fromPrice: '$1,150/yr',
    keyFeatures: ['Disability sector expertise', 'Care & welfare cover', 'Specialist risk assessment', 'Incident support line', 'Policy review included'],
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

function Check() { return <span className="text-[#70e8b0] font-bold text-lg">✓</span>; }
function Cross() { return <span className="text-gray-300 text-lg">–</span>; }
function cellValue(val: boolean | string) {
  if (val === true) return <Check />;
  if (val === false) return <Cross />;
  return <span className="text-xs text-gray-300 font-medium">{val}</span>;
}

const usps = [
  {
    icon: '🎯',
    title: 'Right Cover, Right Price',
    desc: 'We match you to the policy that fits your actual operation — not the most expensive option. Schools don\'t pay for hire & reward cover they\'ll never use.',
  },
  {
    icon: '🏆',
    title: 'Minibus Specialists',
    desc: 'Our advisers work exclusively in commercial passenger vehicle insurance. They know the NZ market inside out — underwriting criteria, policy wordings, claims track records.',
  },
  {
    icon: '🔄',
    title: 'We Compare, You Choose',
    desc: 'We present options from multiple providers side by side. No pressure, no commissions that bias our advice. You pick what works for your budget and operation.',
  },
  {
    icon: '⚡',
    title: 'Fast, No-Fuss Quotes',
    desc: 'Most operators receive their first quote comparison within one business day. Complex fleets and specialist risks may take slightly longer.',
  },
];

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: 'url(/minibus_2.jpg)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Compare Providers</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#70e8b0]/20 border border-[#70e8b0]/40 text-[#70e8b0] text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              ✓ NZ Minibus Insurance Specialists
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Compare Minibus Insurance — <span className="text-[#70e8b0]">Pay Only for What You Need</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              Our specialist advisers match your operation type to the right cover from NZI, Vero, Ando, and Gallagher. Schools won't pay for hire & reward rates. Commercial operators get the liability limits they actually need.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Licensed NZ Advisers', 'No Obligation', '4 Providers Compared', 'All Operator Types', 'Response Within 24hrs'].map(pill => (
                <span key={pill} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  <svg className="w-3 h-3 text-[#70e8b0]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USP strip */}
      <section className="bg-[#136771] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((u) => (
              <div key={u.title} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{u.icon}</div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{u.title}</h3>
                  <p className="text-[#70e8b0]/80 text-xs leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider cards */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#136771] mb-3">Providers We Compare</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Each provider has strengths for different operator types. Our advisers know which policy wording suits your specific situation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {PROVIDERS.map((p) => (
              <div key={p.name} className={`bg-white rounded-2xl border-2 p-6 relative shadow-sm ${p.highlight ? 'border-[#70e8b0] shadow-lg' : 'border-gray-200'}`}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#70e8b0] text-[#136771] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">Most Flexible</span>
                  </div>
                )}
                <div className="font-extrabold text-[#136771] text-2xl mb-1">{p.name}</div>
                <div className="text-xs text-gray-500 mb-3 font-medium">{p.bestFor}</div>
                <div className="text-sm font-bold text-[#136771] mb-4">{p.fromPrice}</div>
                <ul className="space-y-2">
                  {p.keyFeatures.map((f) => (
                    <li key={f} className="text-xs text-gray-600 flex items-start gap-2">
                      <span className="text-[#70e8b0] font-bold mt-0.5 flex-shrink-0">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-[#136771] mb-6 text-center">Feature Comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#136771] text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">NZI</th>
                    <th className="text-center p-4 font-semibold bg-[#0e4f56]">Vero</th>
                    <th className="text-center p-4 font-semibold">Ando</th>
                    <th className="text-center p-4 font-semibold">Gallagher</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="p-3.5 font-medium text-gray-700">{row.feature}</td>
                      <td className="p-3.5 text-center">{cellValue(row.nzi)}</td>
                      <td className="p-3.5 text-center bg-[#136771]/5">{cellValue(row.vero)}</td>
                      <td className="p-3.5 text-center">{cellValue(row.ando)}</td>
                      <td className="p-3.5 text-center">{cellValue(row.gallagher)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">Features are indicative. Actual policy terms vary. Prices are estimates for a standard 12-seat minibus. An adviser will confirm accurate pricing for your specific operation.</p>
          </div>

          {/* Bottom CTA */}
          <div className="bg-[#136771] rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Provider Is Right for You?</h2>
              <p className="text-[#70e8b0] mb-6 leading-relaxed">That's exactly what we're here for. Tell us about your operation — fleet size, operator type, passenger numbers, annual kilometres — and our advisers will do the comparison work and come back with a shortlist suited to your actual needs.</p>
              <div className="space-y-3">
                {[
                  'No generic quotes — matched to your operation type',
                  'Policies explained in plain language',
                  'Compare before you commit — no obligation',
                  'Ongoing support from your dedicated adviser',
                ].map(point => (
                  <div key={point} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="text-[#70e8b0] font-bold flex-shrink-0">✓</span>{point}
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl">
                <p className="text-amber-800 text-xs"><strong>Disclosure:</strong> MinibusInsurance.co.nz is a referral service. We connect operators with licensed financial advisers. We do not sell insurance directly. Referred advisers are regulated under the Financial Markets Conduct Act 2013.</p>
              </div>
            </div>

            {/* Inline form */}
            <div className="bg-white rounded-2xl p-7 shadow-xl">
              <h3 className="text-xl font-bold text-[#136771] mb-1">Get Your Comparison</h3>
              <p className="text-gray-500 text-sm mb-5">Licensed advisers will respond within 24 hours.</p>
              <form method="POST" action={SITE.workerUrl} className="space-y-4">
                <input type="hidden" name="_cc" value={SITE.formCC} />
                <input type="hidden" name="_subject" value={SITE.formSubject} />
                <input type="hidden" name="_next" value={SITE.formNext} />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" name="name" required placeholder="Your name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" name="phone" placeholder="021 xxx xxxx"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" name="email" required placeholder="your@email.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Operator Type *</label>
                  <select name="operator_type" required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771] bg-white">
                    <option value="">Select type...</option>
                    <option>School / Kura</option>
                    <option>Council / Local Government</option>
                    <option>Commercial Operator</option>
                    <option>Tourism / Travel</option>
                    <option>Community / Charitable</option>
                    <option>Disability Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit"
                  className="w-full bg-[#70e8b0] text-[#136771] font-bold py-3.5 rounded-xl text-base hover:bg-[#5dd4a0] transition-colors">
                  Get My Comparison →
                </button>
                <p className="text-xs text-gray-400 text-center">No obligation · Licensed advisers · Details kept private</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'About Us | MinibusInsurance.co.nz | NZ Specialist Minibus Insurance',
  description: 'MinibusInsurance.co.nz connects NZ operators with licensed advisers specialising in minibus insurance. Schools, community groups, commercial fleets — we cover them all.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/about/' },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-[#136771] py-16 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/minibus_3.jpg)' }} />
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-[#70e8b0] mb-4">
            <Link href="/" className="hover:underline">Home</Link> › <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">About MinibusInsurance.co.nz</h1>
          <p className="text-[#70e8b0] text-lg max-w-2xl">Impartial specialist referral service matching NZ minibus operators with the right cover for their needs — regardless of fleet size.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">MinibusInsurance.co.nz is a specialist referral service connecting New Zealand minibus operators with licensed insurance advisers. We work with a curated panel of advisers who have deep expertise in commercial motor vehicle insurance for vehicles carrying 9 to 25 passengers.</p>
              <p className="text-gray-700 leading-relaxed">Whether you operate a single school minibus, a community shuttle, a tourism vehicle, or a growing commercial fleet, we make it easy to get connected with an adviser who understands your specific needs — and the regulatory environment you operate in. We work with operators of every size, from single-vehicle owners to multi-vehicle fleets.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-4">What We Do</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We are not an insurer and we do not sell insurance policies directly. Our role is to help operators navigate the specialist minibus insurance market — which can be complex, with different requirements for schools, commercial operators, community groups, and tourism providers.</p>
              <p className="text-gray-700 leading-relaxed">When you submit an enquiry through our site, your details are passed to a licensed financial adviser on our panel who will contact you, assess your needs, and present the most suitable options — not the most expensive or the easiest to sell. Providers on our panel include NZI, Vero, Ando, Gallagher, DUAL NZ, and other specialist commercial insurers.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { stat: 'All Sizes', label: 'Single vehicle to full fleet' },
                { stat: '100%', label: 'Impartial — not tied to any insurer' },
                { stat: '6+', label: 'NZ insurance providers compared' },
              ].map((item) => (
                <div key={item.label} className="bg-[#136771]/5 border border-[#136771]/20 rounded-2xl p-5 text-center">
                  <div className="text-2xl font-bold text-[#136771]">{item.stat}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-4">Our Commitment</h2>
              <div className="space-y-3">
                {[
                  'We only refer to advisers who are licensed under the Financial Markets Conduct Act 2013 and hold appropriate professional indemnity insurance.',
                  'We are impartial — our only goal is to match you with the most suitable provider for your specific operation, whether you run one minibus or twenty.',
                  'We welcome operators of all sizes: single-vehicle community groups, school kura, disability support services, tourism operators, and commercial fleets.',
                  'We provide clear, general information about minibus insurance so you can make informed decisions before speaking with an adviser.',
                  'We protect your personal information in accordance with the Privacy Act 2020 and never sell your data to third parties.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#70e8b0] text-lg mt-0.5">✓</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-4">How We Match You</h2>
              <p className="text-gray-700 leading-relaxed mb-4">The NZ minibus insurance market includes a range of providers — from large commercial insurers like NZI (IAG) and Vero (Suncorp) through to specialist underwriters like DUAL NZ and Gallagher who serve tour operators, disability transport, and smaller community fleets. Not every provider is right for every operator.</p>
              <p className="text-gray-700 leading-relaxed">Our advisers look at your actual operation — how many vehicles, how they're used, who drives them, and what level of cover you genuinely need — and match you with the provider that fits best. The goal is always appropriate cover at a fair premium, not the broadest policy at the highest price.</p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <h3 className="font-bold text-amber-900 mb-2">Important Disclosure</h3>
              <p className="text-amber-800 text-sm">MinibusInsurance.co.nz is a referral service only. We do not provide financial advice. The information on this website is general in nature and should not be relied upon as a recommendation to purchase any particular insurance product. Always seek advice from a licensed financial adviser for your specific circumstances.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="sticky top-6 space-y-6">
              <QuoteForm />
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#136771] mb-3">Quick Links</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/types/', label: 'Cover Types' },
                    { href: '/sectors/', label: 'Who We Cover' },
                    { href: '/compare/', label: 'Compare Providers' },
                    { href: '/faqs/', label: 'FAQs' },
                    { href: '/contact/', label: 'Get a Quote' },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-[#136771] hover:underline">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

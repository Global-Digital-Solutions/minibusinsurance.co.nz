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
          <p className="text-[#70e8b0] text-lg max-w-2xl">Connecting New Zealand minibus operators with the right insurance cover since 2015.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">MinibusInsurance.co.nz is a specialist referral service connecting New Zealand minibus operators with licensed insurance advisers. We work with a curated panel of advisers who have deep expertise in commercial motor vehicle insurance for vehicles carrying 9 to 25 passengers.</p>
              <p className="text-gray-700 leading-relaxed">Whether you operate a school minibus, a community shuttle, a tourism vehicle, or a commercial fleet, we make it easy to get connected with an adviser who understands your specific needs and the regulatory environment you operate in.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-4">What We Do</h2>
              <p className="text-gray-700 leading-relaxed mb-4">We are not an insurer and we do not sell insurance policies directly. Our role is to help operators navigate the specialist minibus insurance market — which can be complex, with different requirements for schools, commercial operators, community groups, and tourism providers.</p>
              <p className="text-gray-700 leading-relaxed">When you submit an enquiry through our site, your details are passed to a licensed financial adviser on our panel who will contact you, assess your needs, and present options from the providers they work with — including NZI, Vero, Ando, Gallagher, and other specialist commercial insurers.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { stat: '10+', label: 'Years in operation' },
                { stat: '500+', label: 'Operators helped annually' },
                { stat: '6+', label: 'Insurance providers on panel' },
              ].map((item) => (
                <div key={item.label} className="bg-[#136771]/5 border border-[#136771]/20 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold text-[#136771]">{item.stat}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-4">Our Commitment</h2>
              <div className="space-y-3">
                {[
                  'We only refer to advisers who are licensed under the Financial Advisers Act and hold appropriate professional indemnity insurance.',
                  'We do not accept referral fees that could bias our recommendations — our goal is to connect you with the right adviser for your specific situation.',
                  'We provide general information about minibus insurance to help operators understand their options before speaking with an adviser.',
                  'We protect your personal information in accordance with the Privacy Act 2020.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-[#70e8b0] text-lg mt-0.5">✓</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
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

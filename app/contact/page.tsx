import { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'Get Minibus Insurance Quotes | MinibusInsurance.co.nz',
  description: 'Get minibus insurance quotes from licensed NZ advisers. Schools, community groups, commercial fleets — we compare NZI, Vero, Ando and more. No obligation.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/contact/' },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Get Minibus Insurance Quotes',
  url: 'https://www.minibusinsurance.co.nz/contact/',
  description: 'Minibus insurance quotes from licensed NZ advisers.',
  mainEntity: {
    '@type': 'Organization',
    name: 'MinibusInsurance.co.nz',
    email: SITE.email,
    url: 'https://www.minibusinsurance.co.nz',
  },
};

const trustPills = [
  'Licensed NZ Advisers',
  'Response Within 24hrs',
  'No Obligation',
  'Multiple Providers',
  'All Operator Types',
];

const trustItems = [
  {
    icon: '🏅',
    title: 'Licensed NZ Advisers',
    desc: 'Every adviser on our panel is licensed under the Financial Markets Conduct Act 2013 and holds appropriate professional indemnity insurance.',
  },
  {
    icon: '⏰',
    title: 'Response Within 24 Hours',
    desc: 'A licensed adviser will contact you within 24 business hours of your enquiry — often the same day for urgent requirements.',
  },
  {
    icon: '🔄',
    title: 'Multiple Providers Compared',
    desc: 'We compare options across NZI, Vero, Ando, Gallagher and specialist commercial insurers — not tied to any single provider.',
  },
  {
    icon: '🚐',
    title: 'All Operator Types',
    desc: 'Schools, councils, community groups, commercial fleets, tourism operators, and disability support services — we cover every sector.',
  },
  {
    icon: '🔒',
    title: 'Your Details Are Safe',
    desc: 'We only share your enquiry with licensed advisers on our panel. Your information is never sold or shared with third parties.',
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <section className="relative bg-gray-900 overflow-hidden py-14">
        <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: 'url(/minibus_1.jpg)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Get Quotes</span>
          </nav>
          <h1 className="text-4xl font-extrabold text-white mb-3">Get Minibus Insurance Quotes</h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-5">
            Share your operator type, vehicle details, passenger capacity, and how you use your minibus. Takes about two minutes — no pressure, no jargon. Licensed NZ advisers will compare NZI, Vero, Ando, and Gallagher and come back to you within 24 hours.
          </p>
          <div className="flex flex-wrap gap-2">
            {trustPills.map((pill) => (
              <span key={pill} className="inline-flex items-center space-x-1.5 bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                <svg className="w-3.5 h-3.5 text-[#70e8b0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{pill}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Trust badge strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { icon: '🏅', label: 'Licensed Advisers' },
              { icon: '⏰', label: '24hr Response' },
              { icon: '🔄', label: 'Multiple Providers' },
              { icon: '🔒', label: 'Details Secure' },
            ].map((b) => (
              <div key={b.label} className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center space-x-3 shadow-sm">
                <span className="text-2xl flex-shrink-0">{b.icon}</span>
                <span className="text-sm font-semibold text-gray-800">{b.label}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border-2 border-[#136771] rounded-2xl shadow-xl p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Tell Us About Your Operation</h2>
                  <p className="text-gray-500 text-sm">Share your operator type, vehicle details, and how you use your minibus. No pressure, no jargon — takes about two minutes.</p>
                </div>

                <form method="POST" action={SITE.workerUrl}>
                  <input type="hidden" name="_cc" value={SITE.formCC} />
                  <input type="hidden" name="_subject" value={SITE.formSubject} />
                  <input type="hidden" name="_next" value={SITE.formNext} />

                  <div className="space-y-4">

                    {/* Step 1: Contact details */}
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide pt-1">Your Details</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="c-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" id="c-name" name="name" required placeholder="Your name"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
                      </div>
                      <div>
                        <label htmlFor="c-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" id="c-phone" name="phone" placeholder="021 xxx xxxx"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" id="c-email" name="email" required placeholder="your@email.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
                    </div>

                    {/* Step 2: Operation details */}
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide pt-2">Your Operation</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="c-type" className="block text-sm font-medium text-gray-700 mb-1">Operator Type *</label>
                        <select id="c-type" name="operator_type" required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771] bg-white">
                          <option value="">Select type...</option>
                          <option value="School / Kura">School / Kura</option>
                          <option value="Council / Local Government">Council / Local Government</option>
                          <option value="Commercial Operator">Commercial Operator</option>
                          <option value="Tourism / Travel">Tourism / Travel</option>
                          <option value="Community / Charitable">Community / Charitable</option>
                          <option value="Disability Support">Disability Support</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="c-use" className="block text-sm font-medium text-gray-700 mb-1">How You Use It *</label>
                        <select id="c-use" name="minibus_use" required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771] bg-white">
                          <option value="">Select use...</option>
                          <option value="Daily scheduled transport">Daily scheduled transport</option>
                          <option value="School / educational trips">School / educational trips</option>
                          <option value="Community / occasional use">Community / occasional use</option>
                          <option value="Commercial hire and reward">Commercial hire and reward</option>
                          <option value="Tourism / guided tours">Tourism / guided tours</option>
                          <option value="Mixed use">Mixed use</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 3: Vehicle details */}
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide pt-2">Your Vehicle</p>

                    <div>
                      <label htmlFor="c-vehicle" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Make &amp; Model</label>
                      <input type="text" id="c-vehicle" name="vehicle" placeholder="e.g. Toyota HiAce, Mercedes Sprinter, Fuso Rosa"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="c-year" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Year</label>
                        <select id="c-year" name="vehicle_year"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771] bg-white">
                          <option value="">Year range...</option>
                          <option value="2022 or newer">2022 or newer</option>
                          <option value="2018–2021">2018–2021</option>
                          <option value="2014–2017">2014–2017</option>
                          <option value="2010–2013">2010–2013</option>
                          <option value="Before 2010">Before 2010</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="c-seats" className="block text-sm font-medium text-gray-700 mb-1">Passenger Seats *</label>
                        <select id="c-seats" name="passenger_seats" required
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771] bg-white">
                          <option value="">Seats...</option>
                          <option value="9 seats">9 seats</option>
                          <option value="10–12 seats">10–12 seats</option>
                          <option value="13–15 seats">13–15 seats</option>
                          <option value="16–20 seats">16–20 seats</option>
                          <option value="21–25 seats">21–25 seats</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="c-cover" className="block text-sm font-medium text-gray-700 mb-1">Cover Type</label>
                        <select id="c-cover" name="cover_type"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771] bg-white">
                          <option value="">Not sure</option>
                          <option value="Comprehensive">Comprehensive</option>
                          <option value="Third Party Fire & Theft">Third Party Fire &amp; Theft</option>
                          <option value="Fleet Cover">Fleet Cover</option>
                          <option value="Passenger Liability">Passenger Liability</option>
                          <option value="Agreed Value">Agreed Value</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-message" className="block text-sm font-medium text-gray-700 mb-1">Anything Else?</label>
                      <textarea id="c-message" name="message" rows={3}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771] resize-none"
                        placeholder="Number of vehicles in your fleet, current insurer, renewal date, or anything else relevant…" />
                    </div>

                    <button type="submit"
                      className="w-full text-gray-900 font-bold py-3.5 px-4 rounded-xl text-base bg-[#70e8b0] hover:bg-[#5dd4a0] transition-colors">
                      Request My Quotes →
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 mt-4 text-center">
                    Licensed NZ advisers · No obligation · Details kept private
                  </p>
                </form>
              </div>
            </div>

            {/* Trust sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">Why MinibusInsurance.co.nz?</h2>
                <div className="space-y-4">
                  {trustItems.map((item) => (
                    <div key={item.title} className="flex space-x-3">
                      <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-0.5">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Providers block */}
              <div className="bg-gray-900 rounded-xl p-5">
                <h3 className="font-bold text-white mb-3 text-sm">Providers We Compare</h3>
                <div className="space-y-2">
                  {[
                    { name: 'NZI', tag: 'Schools & Community' },
                    { name: 'Vero', tag: 'Commercial Fleets' },
                    { name: 'Ando', tag: 'Tourism & Hire' },
                    { name: 'Gallagher', tag: 'Disability & Care' },
                  ].map((p) => (
                    <div key={p.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 flex-shrink-0 text-[#70e8b0]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white text-sm font-semibold">{p.name}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{p.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email direct */}
              <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <p className="text-gray-500 text-sm leading-relaxed">
                  <strong className="text-gray-700 block mb-1">Prefer to email directly?</strong>
                  <a href={`mailto:${SITE.email}`} className="font-medium text-[#136771] hover:underline">{SITE.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

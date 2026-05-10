import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Minibus Insurance FAQs | Common Questions Answered | MinibusInsurance.co.nz',
  description: 'Answers to the most common questions about minibus insurance in New Zealand — cover types, pricing, compliance, schools, fleets, and commercial operators.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/faqs/' },
};

const FAQS = [
  {
    q: 'Do I need specialist minibus insurance or will standard vehicle insurance cover me?',
    a: 'Standard private vehicle insurance will not cover you if you carry passengers in a commercial or community setting. Once you transport passengers — whether paying or not — you require a specialist commercial motor vehicle policy. Operating without the correct cover can void your policy entirely and leave you personally liable for claims.',
  },
  {
    q: 'How much does minibus insurance cost in New Zealand?',
    a: 'Minibus insurance premiums vary significantly based on vehicle value, operator type, annual kilometres, driver history, cover level, and the number of passengers. As a rough guide, comprehensive cover for a 12-seat minibus starts from around $1,100–$1,500 per year for a community operator and higher for commercial hire and reward use. Fleet discounts are available for 2+ vehicles.',
  },
  {
    q: 'Can a school use a named driver policy instead of any-driver cover?',
    a: 'Yes. Named driver policies are common in school settings where only specific staff members are authorised to drive the school minibus. This can reduce premiums compared to any-driver policies. Some insurers also offer volunteer driver extensions for parent volunteers, though this typically requires a specific endorsement.',
  },
  {
    q: 'What is agreed value cover and should I choose it?',
    a: 'Agreed value means the insurer and the policyholder agree on the vehicle\'s value at the start of the policy. In the event of a total loss, the agreed amount is paid out regardless of depreciation. Market value policies pay out the vehicle\'s market value at the time of loss, which may be less than what you paid. Agreed value is generally recommended for newer or higher-value minibuses.',
  },
  {
    q: 'Does standard minibus insurance cover passenger liability?',
    a: 'Most standard minibus policies do not automatically include passenger liability — it is usually an optional add-on. Passenger liability covers claims made by injured passengers. For commercial operators and schools, passenger liability cover is strongly recommended. Always check the policy wording carefully and discuss your needs with an adviser.',
  },
  {
    q: 'What is a Passenger Service Licence and do I need one?',
    a: 'A Passenger Service Licence (PSL) is required if you carry passengers for hire or reward — i.e., if passengers pay for transport. PSL holders have specific insurance requirements under the Land Transport Act. Some operators (schools, community groups) carrying passengers without payment are exempt from PSL requirements but still need appropriate insurance.',
  },
  {
    q: 'Can I get fleet cover for multiple minibuses?',
    a: 'Yes. Fleet policies cover multiple vehicles under a single policy, typically at a reduced per-vehicle rate. Most insurers offer fleet discounts for 2 or more vehicles. Fleet policies often also simplify administration — single renewal date, combined limits, and a dedicated fleet manager contact.',
  },
  {
    q: 'Does hire and reward cover cost more than standard cover?',
    a: 'Yes. Hire and reward cover — for commercial operators charging passengers for transport — typically costs 20–40% more than community or school use cover. This reflects the higher risk profile of commercial operations, greater annual kilometres, and specific regulatory requirements. The exact premium depends on your operation type and history.',
  },
  {
    q: 'What happens if an unlisted driver has an accident in our minibus?',
    a: 'If your policy has a named driver restriction and an unlisted driver causes an accident, your claim may be declined or subject to a higher excess. Any-driver policies cover any licensed driver operating the vehicle with your permission. Always check your policy\'s driver conditions and discuss any volunteer or ad-hoc drivers with your adviser.',
  },
  {
    q: 'How do I make a claim if there is an incident involving our minibus?',
    a: 'Contact your insurer\'s claims line as soon as possible after any incident. Document the scene, collect details from any third parties involved, and do not admit liability at the scene. Your adviser can assist you through the claims process. Most NZ insurers have 24/7 claims lines for urgent incidents.',
  },
  {
    q: 'Is GST included in minibus insurance premiums?',
    a: 'Insurance premiums in New Zealand are generally subject to GST. If your organisation is GST-registered, you may be able to claim back the GST component of your premium. Consult your accountant for advice specific to your organisation\'s GST status.',
  },
  {
    q: 'How do I get a quote through MinibusInsurance.co.nz?',
    a: 'Simply complete the enquiry form on our Contact page. We\'ll pass your details to a licensed adviser on our panel who will contact you, discuss your specific needs, and present options from the providers they represent. The service is free and there is no obligation to take out a policy.',
  },
];

export default function FAQsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[#136771] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-[#70e8b0] mb-4">
            <Link href="/" className="hover:underline">Home</Link> › <span className="text-white">FAQs</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Minibus Insurance FAQs</h1>
          <p className="text-[#70e8b0] text-lg max-w-2xl">Answers to the most common questions from NZ minibus operators about cover types, pricing, compliance, and getting the right policy.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {FAQS.map((faq, i) => (
              <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-[#136771] hover:bg-gray-50">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-[#70e8b0] group-open:rotate-180 transition-transform text-xl flex-shrink-0">▾</span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="space-y-6">
            <div className="sticky top-6 space-y-6">
              <QuoteForm />
              <div className="bg-[#136771] text-white rounded-2xl p-5">
                <h3 className="font-semibold mb-2">Still have questions?</h3>
                <p className="text-sm text-[#70e8b0] mb-4">Our licensed advisers can answer specific questions about your operation and find the right cover.</p>
                <Link href="/contact/" className="block text-center bg-[#70e8b0] text-[#136771] font-bold py-2.5 rounded-lg text-sm hover:bg-[#5dd4a0] transition-colors">
                  Ask an Adviser
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

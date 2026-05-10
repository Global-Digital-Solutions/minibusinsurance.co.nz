import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/app/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Minibus Insurance Quote | MinibusInsurance.co.nz',
  description: 'Get a free minibus insurance quote from our panel of licensed NZ advisers. Schools, community groups, commercial operators — we find the right cover for you.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/contact/' },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#136771] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-[#70e8b0] mb-4">
            <Link href="/" className="hover:underline">Home</Link> › <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Get a Free Quote</h1>
          <p className="text-[#70e8b0] text-lg max-w-2xl">Tell us about your operation and we'll connect you with a licensed NZ minibus insurance adviser who can find the right cover.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#136771] mb-6">Request a Callback</h2>
            <QuoteForm />
            <p className="text-xs text-gray-500 mt-4">By submitting this form, you agree to be contacted by a licensed financial adviser. We do not share your details with third parties. View our <Link href="/privacy/" className="underline hover:text-[#136771]">Privacy Policy</Link>.</p>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#136771] mb-4">Why Contact Us?</h2>
              <div className="space-y-4">
                {[
                  { icon: '🏆', title: 'Licensed Advisers', desc: 'Every adviser on our panel is licensed under the Financial Advisers Act and holds appropriate professional indemnity insurance.' },
                  { icon: '⚡', title: 'Fast Turnaround', desc: 'Most operators receive their first quote within one business day. Fleet and complex risks may take slightly longer.' },
                  { icon: '🔄', title: 'Multiple Providers', desc: 'We compare options across NZ\'s leading minibus insurance providers including NZI, Vero, Ando, and specialist commercial insurers.' },
                  { icon: '💰', title: 'No Obligation', desc: 'Getting a quote is completely free. You\'re under no obligation to accept any policy we present.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-[#136771]">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#136771] rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Contact Details</h3>
              <p className="text-[#70e8b0] text-sm mb-4">Prefer to reach us directly?</p>
              <div className="space-y-2 text-sm text-white">
                <div>📧 <a href="mailto:hello@cover4you.co.nz" className="hover:text-[#70e8b0] transition-colors">hello@cover4you.co.nz</a></div>
                <div>🕐 Mon–Fri 8:30am – 5:00pm NZST</div>
                <div>📍 New Zealand</div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <p className="text-amber-800 text-sm"><strong>Disclosure:</strong> MinibusInsurance.co.nz is a referral service. We connect operators with licensed financial advisers. We do not provide insurance advice or sell policies directly. The referred advisers are regulated under the Financial Markets Conduct Act 2013.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

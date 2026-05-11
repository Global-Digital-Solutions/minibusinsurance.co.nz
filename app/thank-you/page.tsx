import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | MinibusInsurance.co.nz',
  description: 'Your enquiry has been received. A licensed minibus insurance adviser will be in touch shortly.',
};

export default function ThankYouPage() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/minibus_2.jpg)' }} />
      <div className="absolute inset-0 bg-gray-900/75" />

      <div className="relative max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-[#70e8b0] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Enquiry Received!</h1>
        <p className="text-gray-200 text-lg mb-6">Thank you for getting in touch. A licensed New Zealand minibus insurance adviser will contact you within one business day to discuss your needs and present cover options.</p>
        <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-5 mb-8 text-left">
          <h2 className="font-semibold text-[#70e8b0] mb-3">What happens next?</h2>
          <div className="space-y-3">
            {['An adviser on our panel will review your enquiry', 'They will contact you by phone or email — usually within 1 business day', 'They will assess your specific needs and present cover options', 'You decide whether to proceed — no obligation at any stage'].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#70e8b0] text-gray-900 text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                <span className="text-gray-200 text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="bg-[#136771] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#0e4f56] transition-colors">
            Back to Home
          </Link>
          <Link href="/blog/" className="border border-[#136771] text-[#136771] font-bold px-6 py-3 rounded-lg hover:bg-[#136771]/5 transition-colors">
            Read Our Guides
          </Link>
        </div>
      </div>
    </section>
  );
}

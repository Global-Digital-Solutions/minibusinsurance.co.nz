import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | MinibusInsurance.co.nz',
  description: 'Terms of Use for MinibusInsurance.co.nz — governing your use of our minibus insurance referral service and website.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/terms/' },
};

const TERMS = [
  {
    title: 'Nature of Service',
    body: 'MinibusInsurance.co.nz is a referral service that connects minibus operators with licensed financial advisers. We do not provide insurance advice, sell insurance policies, or act as an insurer or financial adviser. Your use of this website is subject to these Terms of Use.',
  },
  {
    title: 'Information on Website',
    body: 'All information on this website is provided for general informational purposes only. It does not constitute financial advice and should not be relied upon as such. We make no representations as to the accuracy, completeness, or currency of any information. Always obtain advice from a licensed financial adviser before making insurance decisions.',
  },
  {
    title: 'Referral Relationship',
    body: 'By submitting an enquiry through this website, you consent to your contact details and enquiry information being passed to a licensed financial adviser on our referral panel. The referred adviser will contact you to discuss your needs. MinibusInsurance.co.nz is not responsible for the advice provided by referred advisers, nor for any insurance policies you may choose to purchase.',
  },
  {
    title: 'Your Obligations',
    body: 'You agree to provide accurate and complete information when using our services. You must not use this website for any unlawful purpose, attempt to gain unauthorised access to any part of the site, or use the site in a way that could damage, disable, or impair it. You must be at least 18 years old to submit an enquiry.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on this website — including text, images, graphics, logos, and data — is the property of MinibusInsurance.co.nz or its content suppliers and is protected by copyright law. You may not reproduce, distribute, or use any content without our prior written consent.',
  },
  {
    title: 'Third-Party Links',
    body: 'This website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse the content of any linked website and are not responsible for the content, accuracy, or privacy practices of third-party sites. Visiting linked sites is at your own risk.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the fullest extent permitted by law, MinibusInsurance.co.nz excludes all liability for any loss or damage (including indirect, consequential, or economic loss) arising from your use of this website or reliance on any information contained herein. Our total liability to you in any circumstances shall not exceed NZ$100.',
  },
  {
    title: 'Privacy',
    body: 'Your use of this website is also subject to our Privacy Policy, which is incorporated into these Terms by reference. By using this website, you consent to the collection and use of your information as described in our Privacy Policy.',
  },
  {
    title: 'Amendments',
    body: 'We reserve the right to amend these Terms at any time by posting an updated version on this page. Your continued use of the website following any changes constitutes acceptance of the updated Terms. We recommend checking these Terms periodically.',
  },
  {
    title: 'Governing Law',
    body: 'These Terms are governed by the laws of New Zealand. Any disputes arising from your use of this website or these Terms shall be subject to the exclusive jurisdiction of the New Zealand courts.',
  },
  {
    title: 'Contact',
    body: 'For any queries about these Terms, contact us at hello@cover4you.co.nz.',
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-gray-800 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › <span className="text-white">Terms of Use</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Terms of Use</h1>
          <p className="text-gray-400 mt-2">Last updated: May 2026 · Governing law: New Zealand</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-7">
            {TERMS.map((term, i) => (
              <div key={term.title}>
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  <span className="text-[#136771] mr-2">{i + 1}.</span>{term.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{term.body}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-bold text-gray-800 mb-3">Legal Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/disclaimer/" className="text-sm text-[#136771] hover:underline">Disclaimer</Link></li>
                <li><Link href="/privacy/" className="text-sm text-[#136771] hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms/" className="text-sm text-[#136771] hover:underline font-semibold">Terms of Use</Link></li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-semibold text-gray-800 mb-2">⚖️ Governing Law</h3>
              <p className="text-sm text-gray-600">These Terms are governed by the laws of New Zealand and subject to the jurisdiction of NZ courts.</p>
            </div>
            <div className="bg-[#136771] rounded-2xl p-5 text-white">
              <h3 className="font-semibold mb-2">About Our Service</h3>
              <p className="text-sm text-[#70e8b0] mb-4">We connect operators with licensed advisers — not a financial advice provider.</p>
              <Link href="/about/" className="block text-center bg-[#70e8b0] text-[#136771] font-bold py-2.5 rounded-lg text-sm hover:bg-[#5dd4a0] transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

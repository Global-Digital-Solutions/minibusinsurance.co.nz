import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | MinibusInsurance.co.nz',
  description: 'Privacy Policy for MinibusInsurance.co.nz — how we collect, use, and protect your personal information under the Privacy Act 2020.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/privacy/' },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gray-800 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-400 mt-2">Last updated: May 2026 · Governed by the Privacy Act 2020 (NZ)</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Overview</h2>
              <p className="text-gray-700 leading-relaxed">MinibusInsurance.co.nz ("we", "us", "our") is committed to protecting your personal information in accordance with the Privacy Act 2020. This policy explains how we collect, use, store, and share your personal information when you use our website and services.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">What We Collect</h2>
              <p className="text-gray-700 mb-3">We may collect the following personal information when you use our site or submit an enquiry:</p>
              <div className="space-y-2">
                {['Your name', 'Email address', 'Phone number', 'Organisation or operation type', 'Number and type of vehicles', 'Location (general area)', 'Any additional information you provide in your enquiry'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#136771]">✓</span><span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-3">We also collect standard website analytics data (page views, browser type, referring URLs) through tools like Google Analytics. This data is anonymised and does not identify you personally.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">How We Use Your Information</h2>
              <div className="space-y-2">
                {['To pass your enquiry to a licensed financial adviser on our panel', 'To respond to your questions or requests', 'To improve our website and services', 'To comply with our legal obligations'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#136771]">✓</span><span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Who We Share Your Information With</h2>
              <div className="space-y-2">
                {['Licensed financial advisers on our referral panel (to respond to your enquiry)', 'Analytics providers (anonymised data only)', 'Legal or regulatory authorities (where required by law)'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#136771]">✓</span><span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-3">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Data Storage & Security</h2>
              <p className="text-gray-700 leading-relaxed">Your information is stored securely using industry-standard encryption and access controls. We retain your personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. Enquiry data is typically retained for 2 years.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Your Rights Under the Privacy Act 2020</h2>
              <p className="text-gray-700 mb-3">Under the Privacy Act 2020, you have the right to:</p>
              <div className="space-y-2">
                {['Access the personal information we hold about you', 'Request correction of any inaccurate information', 'Ask us to delete your information (subject to legal requirements)', 'Complain to the Office of the Privacy Commissioner if you believe your privacy rights have been breached'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="text-[#136771]">✓</span><span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-3">To exercise these rights, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-[#136771] hover:underline">hello@cover4you.co.nz</a>. For privacy complaints, you may also contact the <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="text-[#136771] hover:underline">Office of the Privacy Commissioner</a>.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">Our website uses cookies to improve your browsing experience and collect anonymous analytics data. You can disable cookies in your browser settings, though this may affect some functionality. We do not use cookies to track you across third-party websites.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">We may update this policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes are posted constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Contact</h2>
              <p className="text-gray-700 leading-relaxed">For privacy-related queries, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-[#136771] hover:underline">hello@cover4you.co.nz</a>.</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-bold text-gray-800 mb-3">Legal Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/disclaimer/" className="text-sm text-[#136771] hover:underline">Disclaimer</Link></li>
                <li><Link href="/privacy/" className="text-sm text-[#136771] hover:underline font-semibold">Privacy Policy</Link></li>
                <li><Link href="/terms/" className="text-sm text-[#136771] hover:underline">Terms of Use</Link></li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Privacy Commissioner</h3>
              <p className="text-sm text-gray-600 mb-3">For privacy complaints or information about your rights:</p>
              <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="text-sm text-[#136771] hover:underline">www.privacy.org.nz →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

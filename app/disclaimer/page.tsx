import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | MinibusInsurance.co.nz',
  description: 'Important disclaimer information for users of MinibusInsurance.co.nz — a referral service connecting operators with licensed NZ insurance advisers.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/disclaimer/' },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-gray-800 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> › <span className="text-white">Disclaimer</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Disclaimer</h1>
          <p className="text-gray-400 mt-2">Last updated: May 2026</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <h2 className="font-bold text-amber-900 text-lg mb-2">Referral Service Only</h2>
              <p className="text-amber-800">MinibusInsurance.co.nz is a referral service. We do not provide insurance advice, sell insurance policies, or act as an insurer. We connect minibus operators with licensed financial advisers who can provide appropriate advice for their specific circumstances.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Licensed Advisers</h2>
              <p className="text-gray-700 leading-relaxed">The financial advisers we refer you to are independently licensed under the Financial Markets Conduct Act 2013. They hold Financial Adviser licences issued by the Financial Markets Authority (FMA) and are required to comply with the Code of Professional Conduct for Financial Advice Services. MinibusInsurance.co.nz does not provide financial advice and is not regulated as a financial advice provider.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">General Information Only</h2>
              <p className="text-gray-700 leading-relaxed">All content on this website — including articles, guides, comparison tables, and pricing information — is provided for general informational purposes only. It does not constitute financial advice, insurance advice, or a recommendation to purchase any particular product. You should always seek advice from a licensed financial adviser before making insurance decisions.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Pricing Information</h2>
              <p className="text-gray-700 leading-relaxed">Any pricing information on this website is indicative only and based on general market estimates. Actual premiums will vary significantly based on your vehicle, operation type, driver history, coverage levels, and other factors. Only a licensed adviser can provide accurate pricing for your specific circumstances.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Provider Information</h2>
              <p className="text-gray-700 leading-relaxed">References to insurance providers (NZI, Vero, Ando, Gallagher, and others) are for general informational purposes. MinibusInsurance.co.nz is not affiliated with, endorsed by, or an agent of any of these providers. Provider information may change and should be verified directly with the provider or your adviser.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">No Guarantee of Cover</h2>
              <p className="text-gray-700 leading-relaxed">Submitting an enquiry through this website does not guarantee that you will be offered insurance cover. Whether cover is offered, and on what terms, is at the discretion of the insurer. Acceptance of cover is subject to the insurer's underwriting criteria and your disclosure of all relevant information.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">This website may contain links to third-party websites. These links are provided for convenience only. MinibusInsurance.co.nz does not endorse or take responsibility for the content of third-party websites. Visiting linked websites is at your own risk.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Accuracy & Updates</h2>
              <p className="text-gray-700 leading-relaxed">While we make every effort to keep the information on this website accurate and up to date, we make no representations or warranties regarding the accuracy, completeness, or currency of any content. Insurance regulations, provider offerings, and market conditions change regularly. Always verify information with an adviser before making decisions.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Contact</h2>
              <p className="text-gray-700 leading-relaxed">If you have any questions about this disclaimer or how we operate, please contact us at <a href="mailto:hello@cover4you.co.nz" className="text-[#136771] hover:underline">hello@cover4you.co.nz</a>.</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-bold text-gray-800 mb-3">Legal Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/disclaimer/" className="text-sm text-[#136771] hover:underline font-semibold">Disclaimer</Link></li>
                <li><Link href="/privacy/" className="text-sm text-[#136771] hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms/" className="text-sm text-[#136771] hover:underline">Terms of Use</Link></li>
              </ul>
            </div>
            <div className="bg-[#136771] rounded-2xl p-5 text-white">
              <h3 className="font-semibold mb-2">Need Advice?</h3>
              <p className="text-sm text-[#70e8b0] mb-4">Connect with a licensed adviser who can give you personalised guidance for your minibus operation.</p>
              <Link href="/contact/" className="block text-center bg-[#70e8b0] text-[#136771] font-bold py-2.5 rounded-lg text-sm hover:bg-[#5dd4a0] transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

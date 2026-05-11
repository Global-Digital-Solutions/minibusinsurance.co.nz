import Link from 'next/link';
import { SITE } from '@/data/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-900 font-bold text-sm" style={{ backgroundColor: '#70e8b0' }}>M</div>
              <span className="font-bold text-white text-sm">MinibusInsurance<span style={{ color: '#70e8b0' }}>.co.nz</span></span>
            </div>
            <p className="text-xs leading-relaxed mb-3">Connecting operators with licensed NZ insurance brokers. No broker fees. Fast quotes.</p>
            <a href={`mailto:${SITE.email}`} className="text-xs hover:text-white" style={{ color: '#70e8b0' }}>{SITE.email}</a>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Cover Types</h4>
            <ul className="space-y-2 text-xs">
              {[
                { href: '/types/comprehensive/', label: 'Comprehensive' },
                { href: '/types/third-party-fire-theft/', label: 'Third Party Fire & Theft' },
                { href: '/types/fleet-cover/', label: 'Fleet Cover' },
                { href: '/types/passenger-liability/', label: 'Passenger Liability' },
                { href: '/types/agreed-value/', label: 'Agreed Value' },
              ].map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Who We Cover</h4>
            <ul className="space-y-2 text-xs">
              {[
                { href: '/sectors/schools-education/', label: 'Schools & Education' },
                { href: '/sectors/commercial-transport/', label: 'Commercial Transport' },
                { href: '/sectors/tourism-travel/', label: 'Tourism & Travel' },
                { href: '/sectors/councils-local-government/', label: 'Councils & Local Govt' },
                { href: '/sectors/community-charitable/', label: 'Community & Charitable' },
                { href: '/sectors/disability-support/', label: 'Disability Support' },
              ].map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Locations</h4>
            <ul className="space-y-2 text-xs">
              {[
                { href: '/minibus/auckland/', label: 'Auckland' },
                { href: '/minibus/wellington/', label: 'Wellington' },
                { href: '/minibus/christchurch/', label: 'Christchurch' },
                { href: '/minibus/hamilton/', label: 'Hamilton' },
                { href: '/minibus/tauranga/', label: 'Tauranga' },
                { href: '/minibus/queenstown/', label: 'Queenstown' },
                { href: '/minibus/dunedin/', label: 'Dunedin' },
                { href: '/minibus/rotorua/', label: 'Rotorua' },
                { href: '/minibus/nelson/', label: 'Nelson' },
                { href: '/minibus/napier-hastings/', label: 'Napier & Hastings' },
                { href: '/minibus/new-plymouth/', label: 'New Plymouth' },
                { href: '/minibus/whangarei/', label: 'Whangārei' },
                { href: '/minibus/invercargill/', label: 'Invercargill' },
              ].map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Information</h4>
            <ul className="space-y-2 text-xs">
              {[
                { href: '/compare/', label: 'Compare Providers' },
                { href: '/blog/', label: 'Guides & Resources' },
                { href: '/faqs/', label: 'FAQs' },
                { href: '/about/', label: 'About Us' },
                { href: '/contact/', label: 'Get Quotes' },
                { href: '/disclaimer/', label: 'Disclaimer' },
                { href: '/privacy/', label: 'Privacy Policy' },
                { href: '/terms/', label: 'Terms of Use' },
              ].map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 space-y-3">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">Disclaimer:</strong> MinibusInsurance.co.nz is an information and referral service only. We connect minibus operators with licensed insurance brokers and advisers who are regulated under the Financial Markets Conduct Act 2013 (FMCA). MinibusInsurance.co.nz itself is not a registered financial adviser and does not provide financial advice. All insurance recommendations and quotations are provided by the referred licensed advisers, not by this website. The information on this site is of a general nature only and does not take into account your individual circumstances, objectives, financial situation, or needs. Before acting on any information, you should consider its appropriateness for your situation and seek advice from a licensed financial adviser. See our{' '}
            <Link href="/disclaimer/" className="hover:text-white underline">full disclaimer</Link>.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} MinibusInsurance.co.nz · All rights reserved.</p>
            <div className="flex flex-wrap gap-4 text-xs">
              <Link href="/privacy/" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="text-gray-500 hover:text-white transition-colors">Terms of Use</Link>
              <Link href="/disclaimer/" className="text-gray-500 hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

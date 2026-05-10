'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-900 font-bold text-sm" style={{ backgroundColor: '#70e8b0' }}>M</div>
            <span className="font-bold text-white text-sm">MinibusInsurance<span style={{ color: '#70e8b0' }}>.co.nz</span></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="text-gray-300 hover:text-white text-sm font-medium py-5">Cover Types ▾</button>
              <div className="absolute top-full left-0 bg-gray-900 border border-gray-700 rounded-xl shadow-xl w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
                {[
                  { href: '/types/comprehensive/', label: 'Comprehensive' },
                  { href: '/types/third-party-fire-theft/', label: 'Third Party Fire & Theft' },
                  { href: '/types/third-party-only/', label: 'Third Party Only' },
                  { href: '/types/fleet-cover/', label: 'Fleet Cover' },
                  { href: '/types/passenger-liability/', label: 'Passenger Liability' },
                  { href: '/types/agreed-value/', label: 'Agreed Value' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 text-sm">{item.label}</Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-300 hover:text-white text-sm font-medium py-5">Who We Cover ▾</button>
              <div className="absolute top-full left-0 bg-gray-900 border border-gray-700 rounded-xl shadow-xl w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
                {[
                  { href: '/sectors/schools-education/', label: 'Schools & Education' },
                  { href: '/sectors/councils-local-government/', label: 'Councils & Local Govt' },
                  { href: '/sectors/commercial-transport/', label: 'Commercial Transport' },
                  { href: '/sectors/tourism-travel/', label: 'Tourism & Travel' },
                  { href: '/sectors/community-charitable/', label: 'Community & Charitable' },
                  { href: '/sectors/disability-support/', label: 'Disability Support' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 text-sm">{item.label}</Link>
                ))}
              </div>
            </div>
            <Link href="/compare/" className="text-gray-300 hover:text-white text-sm font-medium">Compare</Link>
            <Link href="/blog/" className="text-gray-300 hover:text-white text-sm font-medium">Guides</Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link href="/contact/" className="hidden md:inline-flex items-center text-gray-900 text-sm font-bold px-4 py-2 rounded-lg" style={{ backgroundColor: '#70e8b0' }}>
              Get Quotes
            </Link>
            <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300 p-2">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-2">
          {[
            { href: '/types/comprehensive/', label: 'Comprehensive Cover' },
            { href: '/types/fleet-cover/', label: 'Fleet Cover' },
            { href: '/sectors/schools-education/', label: 'Schools & Education' },
            { href: '/sectors/commercial-transport/', label: 'Commercial Transport' },
            { href: '/compare/', label: 'Compare Providers' },
            { href: '/blog/', label: 'Guides' },
            { href: '/contact/', label: 'Get Quotes' },
          ].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-gray-300 hover:text-white text-sm py-2 border-b border-gray-800">{item.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}

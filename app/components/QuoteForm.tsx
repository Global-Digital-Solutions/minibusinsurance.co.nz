'use client';
import { SITE } from '@/data/site';

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`bg-white rounded-xl shadow-lg border-2 border-[#70e8b0] p-6 w-full ${compact ? 'max-w-sm' : 'max-w-md'}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-1">Get Your Quotes</h3>
      <p className="text-sm text-gray-500 mb-4">Licensed brokers — no obligation.</p>
      <form method="POST" action={SITE.workerUrl}>
        <input type="hidden" name="_cc" value={SITE.formCC} />
        <input type="hidden" name="_subject" value={SITE.formSubject} />
        <input type="hidden" name="_next" value={SITE.formNext} />
        <div className="space-y-3">
          <div>
            <label htmlFor="qf-name" className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
            <input type="text" id="qf-name" name="name" required placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0]" />
          </div>
          <div>
            <label htmlFor="qf-email" className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
            <input type="email" id="qf-email" name="email" required placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0]" />
          </div>
          <div>
            <label htmlFor="qf-phone" className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" id="qf-phone" name="phone" placeholder="021 xxx xxxx"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0]" />
          </div>
          <div>
            <label htmlFor="qf-type" className="block text-xs font-medium text-gray-700 mb-1">Operator Type *</label>
            <select id="qf-type" name="operator_type" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0] bg-white">
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
            <label htmlFor="qf-cover" className="block text-xs font-medium text-gray-700 mb-1">Cover Type *</label>
            <select id="qf-cover" name="cover_type" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0] bg-white">
              <option value="">Select cover...</option>
              <option value="Comprehensive">Comprehensive</option>
              <option value="Third Party Fire & Theft">Third Party Fire &amp; Theft</option>
              <option value="Fleet Cover">Fleet Cover</option>
              <option value="Passenger Liability">Passenger Liability</option>
              <option value="Agreed Value">Agreed Value</option>
              <option value="Not sure">Not sure — advise me</option>
            </select>
          </div>
          <button type="submit"
            className="w-full text-gray-900 font-bold py-3 px-4 rounded-xl text-sm bg-[#70e8b0] hover:bg-[#5ed4a0] transition-colors">
            Request My Quotes →
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-3 text-center">Licensed NZ brokers · No obligation</p>
      </form>
    </div>
  );
}

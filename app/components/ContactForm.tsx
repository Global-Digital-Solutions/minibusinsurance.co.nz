'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SITE } from '@/data/site';

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch(SITE.workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _subject: SITE.formSubject, _cc: SITE.formCC }),
      });
    } catch {
      // fire-and-forget — proceed to thank-you regardless
    }
    router.push('/thank-you/');
  }

  return (
    <form onSubmit={handleSubmit}>
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

        <button type="submit" disabled={submitting}
          className="w-full text-gray-900 font-bold py-3.5 px-4 rounded-xl text-base bg-[#70e8b0] hover:bg-[#5dd4a0] transition-colors disabled:opacity-60">
          {submitting ? 'Sending…' : 'Request My Quotes →'}
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        Licensed NZ advisers · No obligation · Details kept private
      </p>
    </form>
  );
}

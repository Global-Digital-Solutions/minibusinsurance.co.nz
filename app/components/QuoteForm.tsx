'use client';
import { useRef, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import TurnstileWidget, { type TurnstileHandle } from './TurnstileWidget';

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileHandle>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });

    setSubmitting(true);
    try {
      const cfToken = await turnstileRef.current?.execute();
      if (!cfToken) {
        setSubmitting(false);
        setError('Security check could not complete. Please try again.');
        return;
      }

      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: 'Minibus Insurance Quote Request — MinibusInsurance.co.nz',
          cfTurnstileToken: cfToken,
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      router.push('/thank-you/');
    } catch {
      setError('Something went wrong. Please try again.');
      setSubmitting(false);
    }
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg border-2 border-[#70e8b0] p-6 w-full ${compact ? 'max-w-xs' : 'max-w-sm'}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-0.5">Get Your Quotes</h3>
      <p className="text-xs text-gray-500 mb-4">Tell us about your operation — takes about two minutes.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
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

          <div className="pt-1 pb-0.5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Your Minibus</p>
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
            <label htmlFor="qf-vehicle" className="block text-xs font-medium text-gray-700 mb-1">Vehicle Make &amp; Model</label>
            <input type="text" id="qf-vehicle" name="vehicle" placeholder="e.g. Toyota HiAce, Mercedes Sprinter"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0]" />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="qf-year" className="block text-xs font-medium text-gray-700 mb-1">Vehicle Year</label>
              <select id="qf-year" name="vehicle_year"
                className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0] bg-white">
                <option value="">Year...</option>
                <option value="2022 or newer">2022 or newer</option>
                <option value="2018–2021">2018–2021</option>
                <option value="2014–2017">2014–2017</option>
                <option value="2010–2013">2010–2013</option>
                <option value="Before 2010">Before 2010</option>
              </select>
            </div>
            <div>
              <label htmlFor="qf-seats" className="block text-xs font-medium text-gray-700 mb-1">Passenger Seats *</label>
              <select id="qf-seats" name="passenger_seats" required
                className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0] bg-white">
                <option value="">Seats...</option>
                <option value="9 seats">9 seats</option>
                <option value="10–12 seats">10–12 seats</option>
                <option value="13–15 seats">13–15 seats</option>
                <option value="16–20 seats">16–20 seats</option>
                <option value="21–25 seats">21–25 seats</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="qf-use" className="block text-xs font-medium text-gray-700 mb-1">How You Use It *</label>
            <select id="qf-use" name="minibus_use" required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0] bg-white">
              <option value="">Select use...</option>
              <option value="Daily scheduled transport">Daily scheduled transport</option>
              <option value="School / educational trips">School / educational trips</option>
              <option value="Community / occasional use">Community / occasional use</option>
              <option value="Commercial hire and reward">Commercial hire and reward</option>
              <option value="Tourism / guided tours">Tourism / guided tours</option>
              <option value="Mixed use">Mixed use</option>
            </select>
          </div>

          <div>
            <label htmlFor="qf-cover" className="block text-xs font-medium text-gray-700 mb-1">Cover Type</label>
            <select id="qf-cover" name="cover_type"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#70e8b0] bg-white">
              <option value="">Not sure — advise me</option>
              <option value="Comprehensive">Comprehensive</option>
              <option value="Third Party Fire & Theft">Third Party Fire &amp; Theft</option>
              <option value="Fleet Cover">Fleet Cover</option>
              <option value="Passenger Liability">Passenger Liability</option>
              <option value="Agreed Value">Agreed Value</option>
            </select>
          </div>

          {error && (
            <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
          )}

          <TurnstileWidget ref={turnstileRef} />

          <button type="submit" disabled={submitting}
            className="w-full text-gray-900 font-bold py-3 px-4 rounded-xl text-sm bg-[#70e8b0] hover:bg-[#5ed4a0] transition-colors disabled:opacity-60">
            {submitting ? 'Sending…' : 'Request My Quotes →'}
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-3 text-center">Licensed NZ brokers · No obligation</p>
      </form>
    </div>
  );
}

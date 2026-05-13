'use client';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '0x4AAAAAADMnsakZUoyx534R';

export default function CompareForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const cfToken = fd.get('cf-turnstile-response');
    if (!cfToken) {
      setError('Please complete the security check and try again.');
      return;
    }
    const data: Record<string, string> = {};
    fd.forEach((value, key) => {
      if (typeof value === 'string') data[key] = value;
    });

    setSubmitting(true);
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: 'Minibus Insurance Comparison Request — MinibusInsurance.co.nz',
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
          <input type="text" name="name" required placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
          <input type="tel" name="phone" placeholder="021 xxx xxxx"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
        <input type="email" name="email" required placeholder="your@email.com"
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771]" />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Operator Type *</label>
        <select name="operator_type" required
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#136771] bg-white">
          <option value="">Select type...</option>
          <option>School / Kura</option>
          <option>Council / Local Government</option>
          <option>Commercial Operator</option>
          <option>Tourism / Travel</option>
          <option>Community / Charitable</option>
          <option>Disability Support</option>
          <option>Other</option>
        </select>
      </div>

      {error && (
        <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>
      )}

      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer strategy="afterInteractive" />
      <div className="flex justify-center">
        <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-size="invisible" />
      </div>

      <button type="submit" disabled={submitting}
        className="w-full bg-[#70e8b0] text-[#136771] font-bold py-3.5 rounded-xl text-base hover:bg-[#5dd4a0] transition-colors disabled:opacity-60">
        {submitting ? 'Sending…' : 'Get My Comparison →'}
      </button>
      <p className="text-xs text-gray-400 text-center">No obligation · Licensed advisers · Details kept private</p>
    </form>
  );
}

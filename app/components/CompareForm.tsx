'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SITE } from '@/data/site';

export default function CompareForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await fetch(SITE.workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _subject: SITE.formSubject, _cc: SITE.formCC }),
      });
    } catch {
      // fire-and-forget
    }
    router.push('/thank-you/');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <button type="submit" disabled={submitting}
        className="w-full bg-[#70e8b0] text-[#136771] font-bold py-3.5 rounded-xl text-base hover:bg-[#5dd4a0] transition-colors disabled:opacity-60">
        {submitting ? 'Sending…' : 'Get My Comparison →'}
      </button>
      <p className="text-xs text-gray-400 text-center">No obligation · Licensed advisers · Details kept private</p>
    </form>
  );
}

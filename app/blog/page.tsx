import { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Minibus Insurance Blog | Guides & Advice | MinibusInsurance.co.nz',
  description: 'Expert guides, compliance advice, and insurance tips for minibus operators across New Zealand. Schools, community groups, commercial fleets and more.',
  alternates: { canonical: 'https://www.minibusinsurance.co.nz/blog/' },
};

export default function BlogIndex() {
  const sorted = [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      {/* Hero */}
      <section className="bg-[#136771] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-[#70e8b0] mb-4">
            <Link href="/" className="hover:underline">Home</Link> › <span className="text-white">Blog & Resources</span>
          </nav>
          <h1 className="text-4xl font-bold text-white mb-3">Minibus Insurance Blog</h1>
          <p className="text-[#70e8b0] text-lg max-w-2xl">Expert guides, compliance checklists, and practical advice for minibus operators across New Zealand.</p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all hover:border-[#70e8b0]">
              <div className="relative h-48 overflow-hidden">
                <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#136771] text-[#70e8b0] text-xs font-semibold px-2 py-1 rounded-full">{post.category}</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span>{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-bold text-[#136771] text-lg leading-tight group-hover:text-[#0e4f56] mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 text-sm font-semibold text-[#136771] group-hover:text-[#0e4f56]">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#136771]/5 border-t border-[#136771]/10 py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#136771] mb-3">Need a Quote?</h2>
          <p className="text-gray-600 mb-6">Our licensed advisers can compare cover options across New Zealand's leading minibus insurance providers.</p>
          <Link href="/contact/" className="inline-block bg-[#136771] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0e4f56] transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

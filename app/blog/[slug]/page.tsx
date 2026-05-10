import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog-posts';
import QuoteForm from '@/app/components/QuoteForm';

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} | MinibusInsurance.co.nz`,
    description: post.excerpt,
    alternates: { canonical: `https://www.minibusinsurance.co.nz/blog/${post.slug}/` },
    openGraph: { title: post.title, description: post.excerpt, url: `https://www.minibusinsurance.co.nz/blog/${post.slug}/`, images: [{ url: post.heroImage }] },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: post.heroImage,
    url: `https://www.minibusinsurance.co.nz/blog/${post.slug}/`,
    author: { '@type': 'Organization', name: 'MinibusInsurance.co.nz', url: 'https://www.minibusinsurance.co.nz' },
    publisher: { '@type': 'Organization', name: 'MinibusInsurance.co.nz', url: 'https://www.minibusinsurance.co.nz' },
  };

  // Convert markdown-style **bold** to HTML
  const renderContent = (text: string) => {
    return text
      .split('\n\n')
      .map((para, i) => {
        if (para.startsWith('**') && para.endsWith('**') && para.split('**').length === 3) {
          return <h2 key={i} className="text-xl font-bold text-[#136771] mt-6 mb-2">{para.replace(/\*\*/g, '')}</h2>;
        }
        const htmlPara = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return <p key={i} className="text-gray-700 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: htmlPara }} />;
      });
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${post.heroImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#136771] via-[#136771]/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full pb-10">
          <nav className="text-sm text-[#70e8b0] mb-3">
            <Link href="/" className="hover:underline">Home</Link> › <Link href="/blog/" className="hover:underline">Blog</Link> › <span className="text-white">{post.title}</span>
          </nav>
          <span className="bg-[#70e8b0]/20 border border-[#70e8b0]/40 text-[#70e8b0] text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 max-w-3xl">{post.title}</h1>
          <div className="flex items-center gap-4 mt-3 text-sm text-[#70e8b0]">
            <span>{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            <div className="text-gray-700">
              {renderContent(post.content)}
            </div>

            {/* Author */}
            <div className="mt-10 border-t pt-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#136771] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">MI</div>
              <div>
                <div className="font-semibold text-[#136771]">MinibusInsurance.co.nz Editorial Team</div>
                <div className="text-sm text-gray-500">Published by the MinibusInsurance.co.nz team — specialist advisers helping NZ operators find the right cover since 2015.</div>
              </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-[#136771] mb-5">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {related.map((rp) => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}/`} className="group border border-gray-200 rounded-xl overflow-hidden hover:border-[#70e8b0] hover:shadow-md transition-all">
                      <img src={rp.heroImage} alt={rp.title} className="w-full h-32 object-cover" />
                      <div className="p-4">
                        <div className="text-xs text-gray-500 mb-1">{rp.readTime}</div>
                        <div className="font-semibold text-[#136771] text-sm group-hover:text-[#0e4f56]">{rp.title}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-6 space-y-6">
              <QuoteForm />
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-[#136771] mb-3">Recent Articles</h3>
                <ul className="space-y-3">
                  {BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 5).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}/`} className="text-sm text-[#136771] hover:underline leading-tight block">{p.title}</Link>
                      <div className="text-xs text-gray-400 mt-0.5">{p.readTime}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

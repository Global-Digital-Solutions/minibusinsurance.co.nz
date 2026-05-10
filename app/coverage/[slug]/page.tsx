import { redirect } from 'next/navigation';
import { COVERAGE_TYPES } from '@/data/coverage-types';

export async function generateStaticParams() {
  return COVERAGE_TYPES.map((c) => ({ slug: c.slug }));
}

export default function CoverageRedirect({ params }: { params: { slug: string } }) {
  redirect(`/types/${params.slug}/`);
}

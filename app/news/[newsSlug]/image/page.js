import { notFound } from 'next/navigation';

import { DUMMY_NEWS } from '@/dummy-news';

export default async function ImagePage({ params }) {
  const {newsSlug} = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
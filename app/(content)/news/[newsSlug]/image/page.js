import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';

export default async function ImagePage({ params }) {
  const { newsSlug } = await params;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
import { getNewsItem } from '@/lib/news';
import { notFound } from 'next/navigation';
import ModalBackdrop from '@/components/modal-backdrop';

export default async function ImageInterceptPage({ params }) {
    const { newsSlug } = await params;
    const newsItem = await getNewsItem(newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <ModalBackdrop />
            <dialog className='modal' open>
                <div className="fullscreen-image">
                    <img src={`/images/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>
    );
}
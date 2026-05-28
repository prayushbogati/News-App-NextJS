'use client'

import { notFound, useRouter } from 'next/navigation';
import { DUMMY_NEWS } from '@/dummy-news';
import { use } from 'react';

export default function ImageInterceptPage({ params }) {
    const router = useRouter()

    const { newsSlug } = use(params);
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
            <div className='modal-backdrop' onClick={router.back} />
            <dialog className='modal' open>
                <div className="fullscreen-image">
                    <img src={`/images/${newsItem.image}`} alt={newsItem.title} />
                </div>
            </dialog>
        </>
    );
}
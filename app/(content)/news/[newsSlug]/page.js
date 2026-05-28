import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsContent({ params }) {
    const { newsSlug } = await params;
    const newsItem = DUMMY_NEWS.find(item => item.slug === newsSlug)
    // console.log(newsItem);

    if (!newsItem) notFound()

    return (
        <div className="max-w-2xl mx-auto text-center slide">
            <div className="relative w-100 m-auto h-80">
                <Link href={`/news/${newsSlug}/image`}>
                    <Image src={`/images/${newsItem.image}`} alt={newsItem.title} fill className="rounded-lg object-cover" />
                </Link>
            </div>
            <div className="text-center mt-5">
                <h1 className="text-2xl font-bold capitalize text">{newsItem.title}</h1>
                <time dateTime={newsItem.date} className="font-bold mb-5 block">{newsItem.date}</time>
            </div>
            <p>{newsItem.content}</p>

            <Link href="/news" className="hover:underline text-blue-900 mt-5 block">Go back</Link>

        </div>
    )
}
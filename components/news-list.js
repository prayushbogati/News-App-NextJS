import Link from "next/link"
import Image from "next/image"

export default function NewsList({ news }) {
    return (
        <div className="grid grid-cols-3 my-5 gap-10 justify-items-center items-center">
            {
                news.map(newsItem => (
                    <div key={newsItem.id} className="p-10 transition-all duration-200 ease-out hover:scale-102 hover:bg-gray-200 rounded-lg">
                        <Link href={`/news/${newsItem.slug}`}>
                            <div className="relative w-80 h-60">
                                <Image src={`/images/${newsItem.image}`} alt={newsItem.title} fill className="rounded-lg object-cover" />
                            </div>
                            <div className="text-center mt-2">
                                <h1 className="text-2xl font-bold capitalize text">{newsItem.title}</h1>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
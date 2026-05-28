import Link from "next/link"
import { DUMMY_NEWS } from "@/dummy-news"
import Image from "next/image"
import NewsList from "@/components/news-list"

export default function NewsPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold capitalize mb-10">news page</h1>

            <NewsList news={DUMMY_NEWS} />
        </div>
    )
}
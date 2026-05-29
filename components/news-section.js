import { getAllNews } from "@/lib/news"
import NewsList from "@/components/news-list"

export default async function NewsSection() {
    const news = await getAllNews()

    return (
        <NewsList news={news}/>
    )
}
// not used page.js file for this parallel route as default.js is enough instead of all components needed as in another parallel route @archive. since to run this route also should have had dynamic route like [year] but as its not ideal for latest route to have year sub route, we can use default.js to cover the problem..

import NewsList from "@/components/news-list"
import { getLatestNews } from "@/lib/news"

export default async function LatestNewsPage() {
    const news = await getLatestNews()
    return (
        <div>
            
            <NewsList news={news} />
        </div>
    )
}
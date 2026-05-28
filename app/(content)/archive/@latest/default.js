// not used page.js file for this parallel route as default.js is enough instead of all components needed as in another parallel route @archive. since to run this route also should have had dynamic route like [year] but as its not ideal for latest route to have year sub route, we can use default.js to cover the problem..

import NewsList from "@/components/news-list"
import { getLatestNews } from "@/lib/news"

export default function LatestNewsPage(){
    const news = getLatestNews()
    return(
        <div>
            <h1 className="text-2xl font-bold capitalize mb-5 mt-10">Latest news</h1>
            <NewsList news={news}/>
        </div>
    )
}
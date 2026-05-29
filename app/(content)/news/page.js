import NewsSection from "@/components/news-section"
import { Suspense } from "react"

export default function NewsPage() {

    return (
        <div>
            <h1 className="text-4xl font-bold capitalize mb-5">news page</h1>
            <div className="w-full h-0.5 bg-black mb-5"></div>

            <Suspense fallback={
                <p className="text-3xl">Loading news...</p>
            }>
                <NewsSection />
            </Suspense>
        </div>
    )
}
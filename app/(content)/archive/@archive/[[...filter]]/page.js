import Link from "next/link";
import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import { MONTHS } from "@/lib/months-arr";

export async function generateStaticParams() {
    return [] // returns empty array for the base /archive route
}

export default async function FilteredNews({ params }) {
    const months = MONTHS;
    const { filter } = await params;
    // console.log(filter);

    let links = getAvailableNewsYears()

    const selectedYear = filter?.[0] // or filter ? filter[0] : undefined;
    const selectedMonth = filter?.[1] // or filter ? filter[1] : undefined;

    let news
    if (selectedYear && !selectedMonth) {
        news = getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear)
    }

    if (selectedYear && selectedMonth) {
        news = getNewsForYearAndMonth(selectedYear, months.indexOf(selectedMonth) + 1)
        links = []
    }

    let newsContent = <p className="text-xl p-5">No article found for current year!</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    if (selectedYear && !getAvailableNewsYears().includes(+selectedYear) || selectedMonth &&
        !getAvailableNewsMonths(selectedYear)
            .map(month => MONTHS[month - 1])
            .includes(selectedMonth)) {
        throw new Error("Invalid filter!")
    }

    return (
        <div>
            <h1 className="text-2xl font-bold capitalize mb-5 mt-10">Archive</h1>
            <div className="flex gap-5">
                {
                    links.map(link => {
                        const href = selectedYear ? `/archive/${selectedYear}/${months[link - 1]}` : `/archive/${link}`
                        link = selectedYear ? months[link - 1] : link
                        return (
                            <div key={link} className="border px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"><Link href={href}>{link}</Link></div>
                        )
                    })
                }
            </div>

            {newsContent}
        </div>
    )
}
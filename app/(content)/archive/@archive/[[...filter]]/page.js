import Link from "next/link";
import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import { MONTHS } from "@/lib/months-arr";
import { Suspense } from "react";


const FilteredNews = async ({ year, month }) => {
    let news
    if (year && !month) {
        news = await getNewsForYear(year)
    }
    else if (year && month) {
        const monthIndex = String(MONTHS.indexOf(month) + 1).padStart(2, '0') // "01", "02"
        news = await getNewsForYearAndMonth(year, monthIndex)
    }

    let newsContent = <p className="text-xl p-5">No article found for current year!</p>

    if (news && news.length > 0) {
        newsContent = <NewsList news={news} />
    }

    return newsContent
}

const FilterNav = async ({ year, month }) => {

    const availableYears = await getAvailableNewsYears()
    let links = availableYears


    if (year && !month) {
        links = getAvailableNewsMonths(year)
    }

    if (year && month) {
        links = []
    }

    if (year && !availableYears.includes(year) || month &&
        !getAvailableNewsMonths(year)
            .map(month => MONTHS[month - 1])
            .includes(month)) {
        throw new Error("Invalid filter!")
    }
    return (
        <nav>
            <div className="flex gap-5">
                {
                    links.map(link => {
                        const href = year ? `/archive/${year}/${MONTHS[link - 1]}` : `/archive/${link}`
                        link = year ? MONTHS[link - 1] : link
                        return (
                            <div key={link} className="border px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"><Link href={href}>{link}</Link></div>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default async function FilteredNewsPage({ params }) {
    const { filter } = await params;
    // console.log(filter);

    const selectedYear = filter?.[0] // or filter ? filter[0] : undefined;
    const selectedMonth = filter?.[1] // or filter ? filter[1] : undefined;
    return (
        <div>
            <Suspense fallback={<p className="text-x my-5 text-center">Loading filter links..</p>}>
                <FilterNav year={selectedYear} month={selectedMonth} />
            </Suspense>

            <Suspense fallback={<p className="text-x my-5 text-center">Loading filtered news..</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </div>
    )
}
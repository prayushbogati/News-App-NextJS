export default function ArchiveLayout({ archive, latest }) {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold capitalize mb-2">News Archive</h1><div className="h-0.5 bg-black w-full"></div>

            <h1 className="text-2xl font-bold capitalize mb-5 mt-10">Archive</h1>
            <section>{archive}</section>

            <div className="w-full h-0.5 bg-black"></div>

            <h1 className="text-2xl font-bold capitalize mb-5 mt-10">Latest news</h1>
            <section>{latest}</section>
        </div>
    )
}
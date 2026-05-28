export default function ArchiveLayout({ archive, latest }) {
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold capitalize mb-2">News Archive</h1><div className="h-[2px] bg-black w-full"></div>

            <section>{archive}</section>
            <section>{latest}</section>
        </div>
    )
}
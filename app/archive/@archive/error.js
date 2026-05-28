'use client'

export default function ArchiveErrorPage({error}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl">Error Occured!</h1>
            <p className="text-xl mt-2">{error.message}</p>
        </div>
    )
}
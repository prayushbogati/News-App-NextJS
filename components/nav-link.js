'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink({ href, children }) {
    const path = usePathname()

    const isActive = href === '/' ? path === '/' : path.startsWith(href)
    return (
        <div>
            <Link href={href} className={`block transition-all hover:scale-105 text-xl ${isActive ? 'font-bold' : null}`}>{children}</Link>
        </div>
    )
}
import Link from "next/link"
import NavLink from "./nav-link"

export default function Header() {
    return (
        <div className="flex justify-between bg-purple-900 text-white py-5 px-20">
            <div>
                <Link href="/" className="block transition-all hover:scale-105 text-2xl">
                    <h1 className="font-bold uppercase">News Site</h1>
                </Link>
            </div>
            <nav className="flex gap-10">
                <NavLink href='/'>Home</NavLink>
                <NavLink href='/news'>News</NavLink>
                <NavLink href='/archive'>Archive</NavLink>
            </nav>
        </div>
    )
}
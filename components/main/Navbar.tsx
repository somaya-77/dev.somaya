'use client'

import { links } from "@/utils/contact"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="flex gap-8">
            {links.map(link => {
                return <Link href={link.path}
                    key={link.name}
                    className={`${pathname === link.path && "text-accent border-b-2 border-accent"} hover:text-accent capitalize transition-all border-b-2 border-primary`}
                >{link.name}</Link>
            })}
        </nav>
    )
}

export default Navbar;


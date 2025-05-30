'use client'

import Link from "next/link";
import { links } from "@/utils/contact";
import { CiMenuFries } from 'react-icons/ci';
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const MobileNavbar = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>

            <SheetContent>
                <div className='mt-32 mb-40 text-center text-2xl' >

                    <Link href="/">
                        <h1 className='font-semibold text-4xl'>
                            Somaya<span className='text-accent'>.</span>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col gap-8 justify-center items-center">
                    {links.map(link => {
                        return <SheetClose asChild key={link.name}>
                            <Link href={link.path}
                                className={`${pathname === link.path && "text-accent border-b-2 border-accent"} text-xl hover:text-accent capitalize transition-all border-b-2 border-primary`}
                            >{link.name}
                            </Link>
                        </SheetClose>
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar;


'use client'

import { usePathname } from "next/navigation"

import {AnimatePresence, motion} from 'framer-motion'
import React from "react";

const PageTransition = ({ children }: {children: React.ReactNode}) => {
    const pathname = usePathname();
    return (
        <section>
            <AnimatePresence>
            <div key={pathname}>
                <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0, transition: { delay: 1, duration: 0.4, ease: "easeInOut" } }} className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" />
                {children}
            </div>
            </AnimatePresence>
        </section>
    )
}

export default PageTransition

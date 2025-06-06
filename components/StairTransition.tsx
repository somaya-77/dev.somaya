'use client'

import { usePathname } from "next/navigation"
import Stairs from "./Stairs";

import {AnimatePresence} from 'framer-motion'
const StairTransition = () => {
    const pathname = usePathname();
    return (
        <div>
            <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                    <Stairs />
                </div>
               
            </div>
            </AnimatePresence>
        </div>
    )
}

export default StairTransition;

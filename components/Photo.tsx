'use client'

import { motion } from 'framer-motion'
import Image from "next/image"

const Photo = () => {
    return (
        <div className="h-full w-full relative">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}>

                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
                    <div className="flex justify-center items-center w-full h-full p-5">
                        <div className="relative w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden">
                            <Image
                                src="/assets/s.jpeg"
                                alt="my photo"
                                priority
                                fill
                                quality={100}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 z-10 rounded-full" />
                        </div>
                    </div>

                </motion.div>


                <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="https://www.w3.org/2000/svg">
                    <motion.circle cx="253" cy="253" r="250" stroke="#ec4899" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20, repeat: Infinity, repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo

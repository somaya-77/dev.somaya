'use client'

import { state } from "@/utils/contact";

import CountUp from "react-countup"
const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {state.map((item, index) => (
                    <div key={index} className="flex flex-1 items-center justify-center xl:justify-start">
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                        <p className={`${item.text.length > 15 ? "max-w-[150px]" : "max-w-[100px]"} leading-snug text-white/80`}>{item.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Stats;

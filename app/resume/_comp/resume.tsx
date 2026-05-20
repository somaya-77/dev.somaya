"use client";

import About from "./about";
import Skills from "./skills";
import TabList from "./tabs-list";
import Education from "./education";
import Experience from "./experience";
import { motion } from 'framer-motion';
import { Tabs } from "@/components/ui/tabs";

export default function Resume() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    {/* Tabs List */}
                    <TabList />

                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <Experience />

                        {/* education */}
                        <Education />

                        {/* skills */}
                        <Skills />

                        {/* about */}
                        <About />
                    </div>

                </Tabs>
            </div>
        </motion.div>
    )
}
'use client';

// imports
import "swiper/css";
import { useState } from 'react';
import { motion } from 'framer-motion'
import { projects } from '@/utils/contact';
import ProjectDetails from './project-details';
import ImageSlider from './image-slider';

export default function Project() {
    const [project, setProject] = useState(projects[0]);

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='min-h-[80vh] flex flex-col justify-center py-6 mb-6 xl:px-0'>
            <div className="container mx-auto mb-10">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>

                        {/* project details */}
                        <ProjectDetails project={project} />
                    </div>

                    {/* image slider */}
                    <ImageSlider projects={projects} setProject={setProject} project={project} />

                </div>
            </div>
        </motion.section>
    )
}
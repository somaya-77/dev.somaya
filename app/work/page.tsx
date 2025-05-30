'use client'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { projects } from '@/utils/contact';
import Link from 'next/link';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';
import "swiper/css";
import Image from 'next/image';
import WorkSlideBtns from '@/components/WorkSlideBtns';
import { ScrollArea } from "@/components/ui/scroll-area";

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    console.log(swiper)
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className='min-h-[80vh] flex flex-col justify-center py-6  xl:px-0'>
      <div className="container mx-auto mb-10">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>

              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize '>{project.title}</h2>
              <h4 className='text-white/40 capitalize text-[22px]'>{project.category} project</h4>

              <p className='text-white/60'>{project.description}</p>
              {/* stack */}
              <ul className='flex gap-4 flex-wrap'>
                {project.stack.map((el, index) => {
                  return (
                    <li key={index} className='text-xl text-accent'>{el.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>

              <div className='border border-white/20'></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {project.demo && <Link href={project.demo}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>

                    </Tooltip>
                  </TooltipProvider>
                </Link>}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>

                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[720px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {

                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='h-[660px] relative group flex justify-center items-center bg-pink-50/20'>
                      {/* overlay */}
                      <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>

                      <ScrollArea className="h-full w-full relative  z-20">
                        <div className="relative w-[600px] h-[1000px] mx-auto">

                          <Image src={item.image} width={600}
                            height={1000} className='object-cover' alt={item.title} />
                        </div>
                      </ScrollArea>
                    </div>
                  </SwiperSlide>
                )
              })}

              <WorkSlideBtns />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Work;

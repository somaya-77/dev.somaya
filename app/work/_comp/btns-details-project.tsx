"use client";

import Link from 'next/link';
import { ProjectItem } from '@/utils/types';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

export default function BtnsDetailsProject({ project }: { project: ProjectItem }) {

    return (
        <div className="flex items-center gap-4">
            {project.demo && <Link target='_blank' href={project.demo}>
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

            <Link target='_blank' href={project.github}>
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

            {/* status */}
            <div>
                {project.status === "progress" && (
                    <span className="text-accent">
                        In Progress
                        <span className="ml-1 animate-dots">...</span>
                    </span>
                )}
            </div>

        </div>
    )
}
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

            {project.status && (
                <span
                    className={
                        "text-sm font-medium px-3 py-1.5 rounded-full border " +
                        (project.status === "live"
                            ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10"
                            : project.status === "development"
                                ? "text-amber-400 border-amber-400/30 bg-amber-400/10"
                                : "text-white/40 border-white/15 bg-white/5")
                    }
                >
                    {project.status === "live"
                        ? "Live"
                        : project.status === "development"
                            ? "In Development"
                            : "Archived"}
                </span>
            )}

        </div>
    )
}
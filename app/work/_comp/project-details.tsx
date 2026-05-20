import { ProjectItem } from '@/utils/types';
import BtnsDetailsProject from './btns-details-project';

export default function ProjectDetails({ project }: { project: ProjectItem }) {

    return (
        <div className='flex flex-col gap-[30px] h-[50%]'>
            {/* outline num */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">0{project.num}</div>

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
            <BtnsDetailsProject project={project} />
        </div>
    )
}
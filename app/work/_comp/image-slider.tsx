import { ProjectItem } from '@/utils/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import WorkSlideBtns from '@/components/WorkSlideBtns';
import type { Swiper as SwiperClass } from 'swiper/types';

// Type Props
type Props = { projects: ProjectItem[], setProject: React.Dispatch<React.SetStateAction<ProjectItem>>, project: ProjectItem }

export default function ImageSlider({ projects, setProject, project }: Props) {
    // constants
    const firstPro = projects[0].num === project.num;
    const lastPro = String(projects.length) == project.num;

    // handlers
    const handleSlideChange = (swiper: SwiperClass) => {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    }

    return (
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

                                <div className="w-full h-[460px] bg-[#141418] rounded-xl overflow-hidden flex items-center justify-center ">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain p-4 transition-all duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

                {/* slide buttons */}
                <WorkSlideBtns firstPro={firstPro} lastPro={lastPro} />
            </Swiper>
        </div>
    )
}
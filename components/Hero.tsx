import Social from "./Social";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";


const Hero = () => {
    return (
        <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl inline-flex mb-3">Software Developer</span>
            <h1 className="h1 mb-6">Hello I&apos;m <br /> <span className="mt-2 inline-flex text-accent">Somaya Adel El-khateeb</span></h1>
            <p className="max-w-[650px] mb-9 text-white/80">I’m passionate about building scalable, high-performance web applications using modern technologies. With a strong foundation in computer and information systems, I specialize in both front-end and back-end development. My core tech stack includes React, Next.js, Node.js, and Express — allowing me to deliver full-stack solutions that are efficient, secure, and user-focused.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button size="lg" variant="outline" className="flex gap-2 uppercase items-center">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                </Button>

                {/* social */}
                <div className="mb-8 xl:mb-0">
                    <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
            </div>
        </div>
    )
}

export default Hero;

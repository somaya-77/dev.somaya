import Link from "next/link";
import Social from "./Social";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";


const Hero = () => {
    return (
        <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl inline-flex mb-3">Software Developer</span>
            <h1 className="h1 mb-6">Hello I&apos;m <br /> <span className="mt-2 inline-flex text-accent">Somaya Adel El-khateeb</span></h1>
            <p className="max-w-[650px] mb-9 text-white/80">I’m a Frontend Developer with 3 years of experience building scalable, business-driven web applications and enterprise dashboards using modern technologies.

                I specialize in React.js and Next.js, with a strong focus on multi-tenant SaaS platforms, role-based access control (RBAC), and custom e-commerce systems. My expertise spans building reusable UI architectures, schema-based data validations using Zod, and optimizing server-state management via React Query.

                I take ownership of features end-to-end—translating complex business logic into high-quality, maintainable, and responsive interfaces. Adept at collaborating in Agile environments, I focus on delivering clean code and exceptional performance that drives business value.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button size="lg" variant="outline" >
                    <Link href="/cv.pdf" download className="flex gap-2 uppercase items-center">
                        <span>Download CV</span>
                        <FiDownload className="text-xl" />
                    </Link>
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

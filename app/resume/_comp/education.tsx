import { education } from "@/utils/contact";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function Education() {

    return (
        <TabsContent value="education" className="w-full mb-8 ">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/* title */}
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/* description */}
                <p className=" text-white/60 mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => (
                            // item
                            <li key={index} className="bg-[#232329] xl:h-[280px] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                <h3 className="h3">{item.institution}</h3>
                                <span className="text-accent">{item.specialization}</span>
                                <h3 className="text-xl text-center lg:text-left">{item.degree}</h3>

                                <div className="flex items-center gap-3">
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                    <p className="text-white/60">{item.duration}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </div>
        </TabsContent>
    )
}
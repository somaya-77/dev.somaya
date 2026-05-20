import { skills } from "@/utils/contact";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Skills() {

    return (
        <TabsContent value="skills" className="w-full mb-8">
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    {/* title */}
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    {/* description */}
                    <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>

                    <ScrollArea className="h-[400px]">
                        <ul className="gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                            {skills.skillsList.map((item, index) => (
                                // item
                                <li key={index} >

                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex  justify-center items-center group">
                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                    <item.icon />
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="capitalize">{item.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </div>
            </div>
        </TabsContent>
    )
}
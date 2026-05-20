import { about } from "@/utils/contact";
import { TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function About() {

    return (
        <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
                {/* title */}
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/* description */}
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">{about.description}</p>

                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-14  max-auto xl:mx-0">
                        {about.info.map((item, index) => (
                            // item
                            <li key={index} className="flex justify-center items-center lg:justify-start gap-4">
                                <span className="text-white/60">{item.fieldName}</span>
                                <span className="text-xl">{item.fieldValue}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </div>
        </TabsContent>
    )
}
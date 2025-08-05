import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import {ReactNode} from "react";
import {cn} from "@/app/lib/utils";

type TabItem = {
    value: string;
    label: string | ReactNode; // Можно передать как строку, так и React-элемент
    triggerClassName?: string;
    triggerIcon?: ReactNode;
};

interface CustomTabsProps {
    defaultValue: string;
    tabs: TabItem[];
    contents: {
        value: string;
        content: ReactNode; // Теперь content принимает любой React-элемент
    }[];
    className?: string;
    tabsListClassName?: string;
}
export function CustomTabs({
                               defaultValue,
                               tabs,
                               contents,
                               className,
                               tabsListClassName,
                           }: CustomTabsProps) {
    return (
        <div className={`w-full ${className}`}>
            <Tabs defaultValue={defaultValue}>
                <TabsList className={cn("bg-transparent gap-4", tabsListClassName)}>
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className={`px-[20px] h-[55px] text-lg w-[205px] py-[15px] text-[#015BFF] bg-[#E6EFFF] data-[state=active]:bg-[#015BFF] data-[state=active]:text-white ${tab.triggerClassName}`}
                        >
                            {tab.triggerIcon && <span className="mr-2">{tab.triggerIcon}</span>}
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {contents.map((content) => (
                    <TabsContent key={content.value} value={content.value} className="mt-6">
                        {content.content}
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}

'use client'
import {CustomTabs} from "@/app/components/CustomTabs";
import {Card} from "@/app/components/ui/card";
import {Button} from "@/app/components/ui/button";
import {Check, Monitor} from "lucide-react";
import Image from "next/image";

function Activity() {
    return (
        <section className='container !mt-30'>
            <div className=''>
                <h3 className='text-3xl mb-8'>Основные направления деятельности</h3>
                <CustomTabs
                    defaultValue="account"
                    tabs={[
                        { value: "account", label: "Account", triggerIcon: <Monitor className='!w-6 !h-6'/> },
                        { value: "settings", label: "Settings", triggerIcon: <Monitor className='!w-6 !h-6'/> },
                        { value: "stats", label: "Statistics", triggerIcon: <Monitor className='!w-6 !h-6'/> },
                    ]}
                    contents={[
                        {
                            value: "account",
                            content: (
                                <Card className="flex flex-col md:flex-row w-full overflow-hidden rounded-xl shadow-lg p-8">
                                    <div className="relative h-64 md:h-auto md:w-1/2">
                                        <Image
                                            src="/slide.png"
                                            alt="Feature image"
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>

                                    <div className="p-6 md:p-8 md:w-2/3">
                                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                                            Lorem ipsum dolor sit amet, consectetur
                                        </h2>

                                        <p className="text-muted-foreground mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="flex items-start space-x-2">
                                                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm">Lorem ipsum dolor sit amet</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button className="w-full sm:w-auto px-6 py-5">
                                            Button
                                        </Button>
                                    </div>
                                </Card>
                            ),
                        },
                        {
                            value: "settings",
                            content: (
                                <Card className="flex flex-col md:flex-row w-full overflow-hidden rounded-xl shadow-lg p-8">
                                    <div className="relative h-64 md:h-auto md:w-1/2">
                                        <Image
                                            src="/slide.png"
                                            alt="Feature image"
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>

                                    <div className="p-6 md:p-8 md:w-2/3">
                                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                                            Lorem ipsum dolor sit amet, consectetur
                                        </h2>

                                        <p className="text-muted-foreground mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="flex items-start space-x-2">
                                                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm">Lorem ipsum dolor sit amet</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button className="w-full sm:w-auto px-6 py-5">
                                            Button
                                        </Button>
                                    </div>
                                </Card>
                            ),
                        },
                        {
                            value: "stats",
                            content: (
                                <Card className="flex flex-col md:flex-row w-full overflow-hidden rounded-xl shadow-lg p-8">
                                    <div className="relative h-64 md:h-auto md:w-1/2">
                                        <Image
                                            src="/slide.png"
                                            alt="Feature image"
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>

                                    <div className="p-6 md:p-8 md:w-2/3">
                                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                                            Lorem ipsum dolor sit amet, consectetur
                                        </h2>

                                        <p className="text-muted-foreground mb-6">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="flex items-start space-x-2">
                                                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm">Lorem ipsum dolor sit amet</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Button className="w-full sm:w-auto px-6 py-5">
                                            Button
                                        </Button>
                                    </div>
                                </Card>
                            ),
                        },
                    ]}
                />
            </div>
        </section>
    );
}

export default Activity;

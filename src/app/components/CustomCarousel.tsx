"use client"

import * as React from "react"
import { useCallback, useEffect, useState } from "react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/app/components/ui/carousel"

export function CustomCarousel({ children }: { children: React.ReactNode[] }) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    // const scrollTo = useCallback((index: number) => {
    //     api?.scrollTo(index)
    // }, [api])

    useEffect(() => {
        const interval = setInterval(() => {
            if (api && count > 0) {
                const nextIndex = (current + 1) % count
                api.scrollTo(nextIndex)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [api, current, count])

    return (
        <div className="relative w-full h-full overflow-hidden rounded-xl">
            <Carousel
                setApi={setApi}
                className="w-full h-full"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="h-full">
                    {React.Children.map(children, (child, index) => (
                        <CarouselItem key={index} className="h-full">
                            <div className="h-full w-full flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-800 text-white">
                                {child}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="absolute bottom-10 left-0 right-0 px-4 flex items-center gap-2 text-white">
                01
                <div className="relative h-1 bg-gray-400 bg-opacity-50 rounded-full w-[200px]">
                    <div
                        className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-300"
                        style={{
                            width: `${(100 / count) * (current + 1)}%`,
                        }}
                    />
                </div>
                0{children.length}
            </div>
        </div>
    )
}

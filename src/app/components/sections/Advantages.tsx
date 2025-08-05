'use client'

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/app/components/ui/carousel";
import InfoCard from "@/app/components/InfoCard";

function Advantages() {
    const slides = [
        { title: "Качество по ГОСТ", description: "Описание 1", imageUrl: "/slide.png" },
        { title: "Собственные мощности", description: "Описание 2", imageUrl: "/slide.png" },
        { title: "Сертифицированные материалы", description: "Описание 3", imageUrl: "/slide.png" },
        { title: "Доставка по РФ", description: "Описание 4", imageUrl: "/slide.png" },
        { title: "Гарантия качества", description: "Описание 5", imageUrl: "/slide.png" },
        { title: "Профессиональный подход", description: "Описание 6", imageUrl: "/slide.png" }
    ];
    return (
        <section className='container !mt-10'>
            <div className='space-y-4'>
                <h3 className='text-3xl'>Преимущества</h3>
                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                            slidesToScroll: 3,
                            loop: true
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2">
                            {slides.map((slide, index) => (
                                <CarouselItem key={index} className="basis-1/3 pl-2 h-[500px]">
                                    <InfoCard
                                        title={slide.title}
                                        description={slide.description}
                                        imageUrl={slide.imageUrl}
                                        className="h-full"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6" />
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6" />
                    </Carousel>
                </div>
            </div>

        </section>
    );
}

export default Advantages;

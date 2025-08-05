import React from 'react';
import VideoCard from "@/app/components/VideoCard";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/app/components/ui/carousel";

function ChoiceSection() {
    return (
        <section className='container !mt-5'>
            <div className='space-y-5'>
                <h3 className='text-3xl'>Нас выбирают лучшие</h3>
                <Carousel
                    opts={{
                        align: "start",
                        slidesToScroll: 4,
                        loop: true
                    }}
                    className="w-full relative"
                >
                    <CarouselContent className="-ml-2">
                        {[...Array(8)].map((_, index) => (
                            <CarouselItem key={index} className="basis-1/4 pl-2 h-[500px]">
                                <VideoCard
                                    className='h-full'
                                    imageUrl={'/slide.png'}
                                    altText={`Slide ${index + 1}`}
                                    title={`Title ${index + 1}`}
                                    category={`Category ${index + 1}`}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6" />
                    <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6" />
                </Carousel>
            </div>

        </section>
    );
}

export default ChoiceSection;

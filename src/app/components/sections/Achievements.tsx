'use client'

import React, {useEffect, useState} from 'react';
import {Check, Leaf} from "lucide-react";
import {Card, CardFooter, CardHeader} from "@/app/components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/app/components/ui/carousel";
import Image from "next/image";

export function Achievements() {
    const [api, setApi] = useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!api) return;

        const handleSelect = () => {
            setCurrentSlide(api.selectedScrollSnap());
        };

        api.on("select", handleSelect);
        return () => {
            api.off("select", handleSelect);
        };
    }, [api]);

    return (
        <section className="container py-16">
            <div className="grid grid-cols-1 lg:grid-cols-14 gap-3">
                <div className="lg:col-span-3 max-w-4xl mx-auto mb-12 lg:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Наши достижения</h2>
                    <h3 className="text-xl md:text-2xl text-muted-foreground mb-4">
                        Экологичные материалы
                    </h3>
                    <p className='mb-8'>
                        Мы предлагаем строительные решения, безопасные для человека и окружающей среды. Все материалы проходят проверку на соответствие экологическим стандартам и не содержат вредных примесей. Строить можно не только качественно, но и с заботой о будущем.
                    </p>

                    <div className='flex items-center gap-2 mb-2'><Leaf className='text-[#51C535]'/> Безопасность для здоровья</div>
                    <div className='flex items-center gap-2 mb-2'><Leaf className='text-[#51C535]'/> Экологическая сертификация</div>
                    <div className='flex items-center gap-2'><Leaf className='text-[#51C535]'/> Поддержка зелёного строительства</div>
                </div>

                <div className="lg:col-span-6 lg:col-start-5 relative">
                    <div className="absolute inset-0 bg-[#E6EFFF] rounded-3xl -z-10 mx-[50px] my-[50px]" />

                    <div className="flex justify-center items-center h-full p-[50px]">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full h-[700px]"
                        >
                            <CarouselContent className="h-full ml-0">
                                {[...Array(3)].map((_, index) => (
                                    <CarouselItem key={index} className="pl-0 h-[700px]">
                                        <div className="h-full p-[30px]">
                                            <Card className="h-full flex flex-col justify-center bg-white relative overflow-hidden">
                                                <Image
                                                    src='/certificate.png'
                                                    alt='Сертификат'
                                                    fill
                                                    className="object-contain"
                                                />
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious className="absolute -left-[80px] top-1/2 -translate-y-1/2 w-[63px] h-[63px]" icon={<ArrowLeft/>} />
                            <CarouselNext className="absolute -right-[80px] top-1/2 -translate-y-1/2 w-[63px] h-[63px]" icon={<ArrowRight/>}/>

                            {/* Индикаторы точек */}
                            <div className="absolute bottom-[70px] left-0 right-0 flex justify-center gap-2">
                                {[...Array(3)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => api?.scrollTo(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${
                                            currentSlide === index ? 'bg-[#015BFF]' : 'bg-white'
                                        }`}
                                        aria-label={`Перейти к слайду ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className='lg:col-span-3 lg:col-start-12 space-y-6 flex flex-col items-center lg:items-start'>
                    {[
                        {
                            title: "3 сертификата ISO",
                            description: "Международные стандарты качества, экологии и безопасности."
                        },
                        {
                            title: "100% ГОСТ",
                            description: "Вся продукция соответствует государственным нормам."
                        },
                        {
                            title: "12 лет опыта",
                            description: "Работаем по стандартам ISO и ГОСТ с 2012 года."
                        }
                    ].map((card, index) => (
                        <Card key={index} className='h-[225px] w-full max-w-[375px] bg-[#F8F8F8] border-none shadow-none flex flex-col'>
                            <CardHeader>
                                <h3 className='text-2xl font-bold'>{card.title}</h3>
                            </CardHeader>
                            <CardFooter className='mt-auto'>
                                <p className='text-md text-muted-foreground'>{card.description}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievements;


function ArrowLeft(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none" className='!w-[43px] !h-[43px]'>
            <path d="M35.8337 21.5H7.16699M7.16699 21.5L17.917 32.25M7.16699 21.5L17.917 10.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

function ArrowRight(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none" className='!w-[43px] !h-[43px]'>
            <path d="M7.16634 21.5H35.833M35.833 21.5L25.083 32.25M35.833 21.5L25.083 10.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

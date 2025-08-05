'use client'
import {CustomCarousel} from "@/app/components/CustomCarousel";
import {Button} from "@/app/components/ui/button";

function Hero() {
    const slides = [
        {
            title: "Ваш надежный поставщик строительных материалов",
            description: "Мы знаем всё о строительных материалах и поставках. Работаем стабильно и точно, чтобы вы получали нужное — вовремя и без лишних хлопот. Подходим к каждому проекту с вниманием, независимо от его масштаба",
            imageUrl: '/slide.png'
        },
        {
            title: "Ваш надежный поставщик строительных материалов",
            description: "Мы знаем всё о строительных материалах и поставках. Работаем стабильно и точно, чтобы вы получали нужное — вовремя и без лишних хлопот. Подходим к каждому проекту с вниманием, независимо от его масштаба",
            imageUrl: '/slide.png'

        },
        {
            title: "Ваш надежный поставщик строительных материалов",
            description: "Мы знаем всё о строительных материалах и поставках. Работаем стабильно и точно, чтобы вы получали нужное — вовремя и без лишних хлопот. Подходим к каждому проекту с вниманием, независимо от его масштаба",
            imageUrl: '/slide.png'
        }
    ];
    return (
        <section className='container'>
            <CustomCarousel>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[calc(100vh-120px)] max-h-[820px]"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.imageUrl})` }}
                        />

                        <div className="absolute inset-0 w-[75%] bg-gradient-to-r from-black/30 via-black/20 to-transparent backdrop-blur-[2px] [mask-image:linear-gradient(to_right,_black_80%,_transparent)]" />

                        <div className="absolute inset-0 bg-black/10" />

                        <div className='relative z-10 top-1/2 left-10 transform -translate-y-1/2 max-w-[50%]'>
                            <h3 className='text-[42px] leading-[1.2] text-white drop-shadow-lg'>{slide.title}</h3>
                            <p className='text-lg mt-4 text-white/90 drop-shadow-md'>{slide.description}</p>
                            <Button className='mt-5'>Посмотреть каталог</Button>
                        </div>
                    </div>
                ))}
            </CustomCarousel>
        </section>
    );
}

export default Hero;

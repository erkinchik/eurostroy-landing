'use client'

import {
    Card,
    CardContent,

} from "@/app/components/ui/card";
import Image from "next/image";
import AboutCard from "@/app/components/AboutCard";

function About() {
    const cards = [
        {title: 'Более 10 лет на рынке', description: 'Опыт, проверенный временем и доверием сотен партнёров', imageUrl: '/ranking.png'},
        {title: '3 собственных завода', description: 'Контроль качества и стабильность поставок на каждом этапе', imageUrl: '/buildings-2.png'},
        {title: 'Более 10 лет на рынке', description: 'Опыт, проверенный временем и доверием сотен партнёров', imageUrl: '/ranking.png'},
        {title: '3 собственных завода', description: 'Контроль качества и стабильность поставок на каждом этапе', imageUrl: '/buildings-2.png'},
    ]

    return (
        <section className='container !mt-8'>
            <div className='grid grid-cols-3 gap-8'>
                <div className='col-span-1 row-span-2'>
                    <Card className={`relative w-full h-[640px] overflow-hidden rounded-3xl shadow-lg group transition`}>
                        <div className="absolute inset-0">
                            <Image
                                src={'/slide.png'}
                                alt={''}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent z-10" />
                        </div>
                        <div className="absolute bottom-0 z-20 w-full p-6">
                            <CardContent className="px-0 pb-0">
                                <h3 className="text-white text-xl font-medium mb-4">
                                    Основа надёжного строительства
                                </h3>
                                <p className="text-white/80 text-sm mb-1">В строительной сфере я более 15 лет и с первого дня ставлю во главу угла качество, надёжность и долгосрочные отношения. Я верю, что современное строительство — это не просто материалы, а ответственность перед людьми и будущим</p>
                                <span className='text-white font-medium text-md'>Айбек Нурбеков - генеральный директор</span>
                            </CardContent>
                        </div>
                    </Card>
                </div>

                <div className='col-span-2'>
                    <p className='mb-8'>
                        Наша история началась с идеи сделать поставки строительных материалов проще, быстрее и надёжнее. С момента основания мы прошли путь от локального поставщика до партнёра для строительных компаний по всей стране.

                        За годы работы мы наладили прямые связи с производителями, расширили складские мощности и сформировали команду, которой можно доверять. Сегодня мы гордимся тем, что участвуем в строительстве сотен объектов — от частных домов до крупных жилых и коммерческих комплексов.

                        Мы не стоим на месте и продолжаем развиваться, внедряя новые технологии, улучшая сервис и расширяя ассортимент, чтобы быть полезными каждому клиенту — от мастера-одиночки до генерального подрядчика.
                    </p>

                    <div className='grid grid-cols-2 gap-6'>
                        {cards.map((card, index) => (
                            <AboutCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                imageUrl={card.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

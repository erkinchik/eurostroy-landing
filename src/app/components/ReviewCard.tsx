import { Card } from "@/app/components/ui/card";
import Image from "next/image";
import {Check, Star} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/app/components/ui/avatar";

function ReviewCard() {
    return (
        <Card className="flex flex-col md:flex-row w-full overflow-hidden rounded-xl border-none p-6 h-full shadow-none bg-[#F8F8F8]">
            <div className="relative h-full md:w-1/2 md:h-[540px]">
                <Image
                    src="/slide.png"
                    alt="Product image"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            <div className="md:w-1/2 flex flex-col">
                <div className="flex items-start gap-2">
                    <Avatar className='w-12 h-12'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold">Александр</h3>
                                <p className="text-sm text-muted-foreground">г. Бишкек</p>
                            </div>
                            <div>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < 4 ? 'text-[#FFA502] fill-[#FFA502]' : 'text-[#D9D9D9] fill-[#D9D9D9]'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground">16 апреля</span> &nbsp;
                                <span className="text-sm text-muted-foreground">13:54</span>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="pt-4 flex-1">
                    <p className="text-black text-md">
                        Сотрудничаю с этой компанией уже несколько лет и всегда остаюсь доволен. Первый раз обратился к ним, когда делал капитальный ремонт в квартире — выбор материалов впечатлил, всё было в наличии, а консультанты помогли подобрать оптимальные варианты под мой бюджет. После этого опыта решил заказать материалы и для строительства загородного дома.
                        Хочу отметить высокое качество продукции — все материалы соответствуют заявленным характеристикам и стандартам. Доставка всегда пунктуальная, что для меня было очень важно, так как сроки строительства были жёсткими. Особую благодарность хочу выразить менеджерам — всегда оперативно отвечают на вопросы, дают полезные рекомендации и готовы помочь в любой ситуации.
                    </p>
                </div>
            </div>
        </Card>
    );
}

export default ReviewCard

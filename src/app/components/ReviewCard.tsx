import { Card } from "@/app/components/ui/card";
import Image from "next/image";
import {Check, Star} from "lucide-react";

function ReviewCard() {
    return (
        <Card className="flex flex-col md:flex-row w-full overflow-hidden rounded-xl shadow-lg p-6">
            <div className="relative h-64 md:h-auto md:w-1/3">
                <Image
                    src="/slide.png"
                    alt="Product image"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>

            <div className="md:w-2/3 md:pl-6 flex flex-col">
                <div className="flex items-start gap-4 pb-6 border-b">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                            src="/avatar.jpg"
                            alt="User avatar"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold">Алексей Петров</h3>
                                <p className="text-sm text-muted-foreground">г. Бишкек</p>
                            </div>
                            <span className="text-sm text-muted-foreground">15.05.2024</span>
                        </div>

                        <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                />
                            ))}
                            <span className="ml-2 text-sm font-medium">4.0</span>
                        </div>
                    </div>
                </div>

                <div className="pt-6 flex-1">
                    <p className="text-muted-foreground">
                        Очень доволен качеством продукции! Заказывал строительные материалы для ремонта дома.
                        Всё пришло в срок, без повреждений. Особенно порадовала профессиональная консультация
                        менеджера, который помог подобрать оптимальные материалы под мой бюджет.
                        Обязательно буду рекомендовать вашу компанию друзьям!
                    </p>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="flex items-center space-x-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Качество материалов</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                            <Check className="h-4 w-4 text-green-500" />
                            <span>Быстрая доставка</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ReviewCard

'use client'

import Image from "next/image";
import {Button} from "@/app/components/ui/button";

function StoreSection() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden container h-[700px] rounded-3xl ">
            <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                <Image
                    src="/tab-section.png"
                    alt="Фон магазина"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                />
            </div>

            <div className="relative z-10 h-full flex items-center p-8">
                <div className="flex-1 pr-10">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Наш интернет-магазин
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-[600px]">
                        5 000+ наименований в одном пространстве
                    </p>



                    <Button className="mt-8 px-8 py-4 text-lg bg-white text-blue-600 hover:bg-white/90" asChild>
                        <a href="https://online-store-murex-ten.vercel.app/">
                        Перейти в магазин
                        </a>
                    </Button>
                </div>

                <div className="relative w-[800px] h-[445px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/store.png"
                        alt="Интерьер нашего магазина"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default StoreSection;

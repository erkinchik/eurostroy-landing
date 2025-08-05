'use client'

import Image from 'next/image'
import { Card } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import { Play } from 'lucide-react'

interface VideoCardProps {
    imageUrl: string
    altText: string
    title: string
    category: string
    viewsCount?: number
    badgeText?: string
    className?: string
    badgeColor?: "blue" | "green" | "red" | "orange" | "purple"
}

export default function VideoCard({
                                      imageUrl,
                                      altText,
                                      badgeText,
                                      className = "",
                                      badgeColor = "blue"
                                  }: VideoCardProps) {
    const badgeColorClasses = {
        blue: "bg-blue-600",
        green: "bg-green-600",
        red: "bg-red-600",
        orange: "bg-orange-600",
        purple: "bg-purple-600"
    }

    return (
        <Card className={`relative w-full overflow-hidden rounded-3xl shadow-lg group hover:scale-[1.01] transition ${className}`}>
            {/* Фоновое изображение */}
            <div className="absolute inset-0">
                <Image
                    src={imageUrl}
                    alt={altText}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent z-10" />

                {/* Бейдж (если есть) */}
                {badgeText && (
                    <Badge className={`absolute top-6 left-6 ${badgeColorClasses[badgeColor]} text-white py-[7px] px-[20px] rounded-full text-sm font-bold`}>
                        {badgeText}
                    </Badge>
                )}
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 rounded-full bg-[#015BFF] backdrop-blur-sm flex items-center justify-center border-2 border-[#015BFF]/30 hover:bg-[#015BFF]/30 transition">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
            </div>

            {/*<div className="absolute bottom-0 z-20 w-full p-6">*/}
            {/*    <CardContent className="px-0 pb-0">*/}
            {/*        <p className="text-white/80 text-sm mb-1">{category}</p>*/}

            {/*        <h3 className="text-white text-xl font-medium mb-4">*/}
            {/*            {title}*/}
            {/*        </h3>*/}

            {/*        <div className="flex items-center gap-1 text-white/80 text-sm">*/}
            {/*            <Eye size={16} /> {viewsCount} просмотров*/}
            {/*        </div>*/}
            {/*    </CardContent>*/}
            {/*</div>*/}
        </Card>
    )
}

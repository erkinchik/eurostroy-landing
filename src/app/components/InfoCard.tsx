import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";
import React, { ReactNode } from "react";

interface InfoCardProps {
    title: string;
    imageUrl: string;
    badgeContent?: string | ReactNode;
    badgeClassName?: string;
    description?: string;
    className?: string;
    imageClassName?: string;
    gradientClassName?: string;
}

function InfoCard({
                      title,
                      description,
                      imageUrl = '/slide.png',
                      badgeContent,
                      badgeClassName = "bg-white/90 text-black px-4 py-2 rounded-full shadow-md font-medium text-sm backdrop-blur-sm",
                      className = "",
                      imageClassName = "object-cover",
                      gradientClassName = "bg-gradient-to-t from-black/90 via-black/25 to-transparent"
                  }: InfoCardProps) {
    return (
        <Card className={`relative w-full h-[640px] overflow-hidden rounded-3xl shadow-lg group transition ${className}`}>
            {badgeContent && (
                <div className={`absolute top-6 right-6 z-30 flex items-center justify-center ${badgeClassName}`}>
                    {typeof badgeContent === 'string' ? (
                        <span>{badgeContent}</span>
                    ) : (
                        badgeContent
                    )}
                </div>
            )}

            <div className="absolute inset-0">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className={imageClassName}
                    priority
                />
                <div className={`absolute inset-0 z-10 ${gradientClassName}`} />
            </div>

            <div className="absolute bottom-0 z-20 w-full p-6">
                <CardContent className="px-0 pb-0">
                    <h3 className="text-white text-xl font-medium mb-4">
                        {title}
                    </h3>
                    {description &&
                        <p className="text-white/80 text-sm">
                            {description}
                        </p>
                    }

                </CardContent>
            </div>
        </Card>
    );
}

export default InfoCard;

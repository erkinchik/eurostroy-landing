import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export type CategoryCardSize = 'small' | 'medium' | 'large';

interface CategoryCardProps {
    title: string;
    imageUrl: string;
    href: string;
    size?: CategoryCardSize;
}

export function CardGrid({ title, imageUrl, href, size = 'small' }: CategoryCardProps) {
    const imageSizeClass = {
        small: 'h-60 w-60',
        medium: 'h-80 w-80  -bottom-10 right-2',
        large: 'h-120 w-120',
    }[size];

    const titleSizeClass = {
        small: 'w-[175px]',
        medium: 'w-[240px]',
        large: 'w-[250px]',
    }[size]

    const imageSize = {
        small: '300px',
        medium: '300px',
        large: '500px',
    }[size];

    return (
        <Link href={href} className="group block h-full w-full">
            <Card className="h-full w-full relative flex flex-col bg-[#E6EFFF] transition-all hover:shadow-lg overflow-hidden rounded-4xl border-none shadow-none">
                <CardContent className="flex flex-col h-full p-4">

                    <div className="mt-auto flex justify-between items-end">
                        <div className={`absolute -bottom-10 -right-8 overflow-hidden ${imageSizeClass}`}>
                            <Image
                                src={imageUrl}
                                alt={title}
                                fill
                                className="object-contain transition-transform group-hover:scale-105"
                                sizes={imageSize}
                            />
                        </div>
                        <h3 className={`text-2xl font-bold z-10 ${titleSizeClass}`}>{title}</h3>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}

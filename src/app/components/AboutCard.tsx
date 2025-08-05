'use client'

import {Card, CardContent, CardHeader} from "@/app/components/ui/card";

interface AboutCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

function AboutCard({title, description}: AboutCardProps ) {
    return (
        <Card className="flex items-center flex-row bg-[#E6EFFF] p-3 shadow-none border-none rounded-4xl h-[200px]">
            <div className="">
                <CardHeader className='!mb-[70px]'>
                    <h3 className="text-2xl font-semibold text-[#015BFF]">{title}</h3>
                </CardHeader>
                <CardContent>
                    <p className="text-black text-md">{description}</p>
                </CardContent>
            </div>

            <div className="w-42 h-42">
                {/*<Image*/}
                {/*    src={imageUrl}*/}
                {/*    alt="10 лет на рынке"*/}
                {/*    width={180}*/}
                {/*    height={180}*/}
                {/*    className="w-full h-full object-cover"*/}
                {/*/>*/}
            </div>
        </Card>
    );
}

export default AboutCard;

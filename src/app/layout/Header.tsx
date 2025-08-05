'use client'

import { Button } from "@/app/components/ui/button"
import {CirclePercent, Menu, Phone, Truck, Wallet} from "lucide-react"
import Image from "next/image";

function Header() {
    return (
        <header className="max-w-[1590px] h-[75px] rounded-lg bg-[#F8F8F8] mx-auto flex items-center mb-8">
            <div className="container mx-auto flex items-center justify-between">


                <div className="text-sm text-gray-600 flex items-center gap-7">
                    <Button
                        variant="ghost"
                        className="h-10 w-10 p-5 hover:bg-gray-100"
                    >
                        <Menu className="!h-[40px] !w-[40px]" />
                    </Button>
                    <div className='flex items-center gap-4'>
                        <span className='flex items-center gap-2'><CirclePercent width={20} height={20}/>Акции</span>
                        <span className='flex items-center gap-2'><Truck width={20} height={20}/>Доставка</span>
                        <span className='flex items-center gap-2'><Wallet width={20} height={20}/>Оплата</span>
                    </div>
                </div>

               <div>
                   <Image src={'/logo.JPG'} alt={'logo'} width={140} height={140}/>
               </div>

                <div className="flex items-center gap-7">
                    <div className='flex items-center'>
                        <Phone className="h-4 w-4 mr-2" />
                        +996 700 700 700
                    </div>
                    <Button  size="lg" className="">
                        Посмотреть каталог
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header

import {CardGrid} from "@/app/components/CardGrid";


const services = [
    {
        title: 'Доставка',
        image: '/delivery-grid.png',
        size: 'small' as const
    },
    {
        title: 'Оплата',
        image: '/wallet-grid.png',
        size: 'small' as const
    },
    {
        title: 'Калькулятор расхода материалов',
        image: '/bank-grid.png',
        size: 'large' as const
    },
    {
        title: 'Академия КНАУФ и ЕВРОГИПС',
        image: '/calc-grid.png',
        size: 'medium' as const
    },
]

function Services() {
    return (
        <section className='container !mt-8'>
            <div className='space-y-4'>
            <h3 className='text-3xl'>Наши сервисы</h3>
            <div className="grid grid-cols-4 auto-rows-[210px] auto-cols-[185px] gap-4">
            {services.map((service) => {
                const size = service.size ?? 'small';
                const colSpan =
                    size === 'large' ? 'col-span-2 row-span-2' :
                        size === 'medium' ? 'col-span-2' : 'col-span-1';

                return (
                    <div key={service.title} className={colSpan}>
                        <CardGrid title={service.title} imageUrl={service.image} size={size} href={'#'}/>
                    </div>
                );
            })}
            </div>
            </div>
        </section>
    );
}

export default Services;

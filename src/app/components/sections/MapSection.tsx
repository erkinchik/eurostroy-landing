'use client'

import Map from '@/app/components/Map'

function MapSection() {
    return (
        <section className='container !mt-5'>
            <div className='space-y-5'>
                <h3 className='text-3xl'>География и партнёры</h3>
                <Map/>
            </div>
        </section>
    );
}

export default MapSection;

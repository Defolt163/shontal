import Link from 'next/link';

export default function Restaurants(){
    return(
        <div className='p-4 grid grid-rows-7 grid-flow-col gap-4 w-full text-accentText'>
            <div style={{background: `url(/restaurants/slice-cut-from-classic-pepperoni-pizza-with-green-pepper-rolls.jpeg) center center/cover no-repeat`}} className='bg-black row-span-3 col-span-2 p-3 flex flex-col justify-between relative before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-black/65 before:-z-0'>
                <div className='flex justify-between z-0'>
                    <div className='text-4xl'>Кафе: Рубин</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline z-0'>Подробнее</Link>
            </div>
            <div style={{background: `url(/restaurants/side-view-shawarma-with-fried-potatoes-ayran-mayonnaise-board-cookware_176474-3213.jpeg) center center/cover no-repeat`}} className='bg-black row-span-2 col-span-2 flex flex-col justify-between p-3 relative before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-black/65 before:-z-0'>
                <div className='flex justify-between z-0'>
                    <div className='text-4xl'>Шаурмешка</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline z-0'>Подробнее</Link>
            </div>
            <div style={{background: `url(/restaurants/barbecue-house-banner-template_23-2149084198.jpeg) center center/cover no-repeat`}} className='bg-black row-span-2 col-span-2 flex flex-col justify-between p-3 relative before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-black/65 before:-z-0'>
                <div className='flex justify-between z-0'>
                    <div className='text-4xl'>ARAM Ням ням</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline z-0'>Подробнее</Link>
            </div>
            <div style={{background: `url(/restaurants/cozy-wood-chair-illuminated-by-lantern-autumn-cityscape-generated-by-artificial-intelligence_188544-130056.jpeg) center center/cover no-repeat`}} className='bg-black row-span-3 flex flex-col justify-between p-3 relative before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-black/65 before:-z-0'>
                <div className='flex justify-between z-0'>
                    <div className='text-4xl'>Кофемания</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline z-0'>Подробнее</Link>
            </div>
            <div style={{background: `url(/restaurants/maki-roll-with-cucumber-served-with-sauce-sesame-seeds_141793-789.jpeg) center center/cover no-repeat`}} className='bg-black row-span-4 flex flex-col justify-between p-3 relative before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-black/65 before:-z-0'>
                <div className='flex justify-between z-0'>
                    <div className='text-4xl'>Инь-Янь</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline z-0'>Подробнее</Link>
            </div>
        </div>
    )
}
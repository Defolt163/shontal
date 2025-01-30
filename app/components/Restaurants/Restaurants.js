import Link from 'next/link';

export default function Restaurants(){
    return(
        <div className='p-4 grid grid-rows-7 grid-flow-col gap-4 w-full text-accentText'>
            <div className='bg-black row-span-3 col-span-2 p-3 flex flex-col justify-between'>
                <div className='flex justify-between'>
                    <div className='text-4xl'>Кафе: Рубин</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline'>Подробнее</Link>
            </div>
            <div className='bg-black row-span-2 col-span-2 flex flex-col justify-between p-3'>
                <div className='flex justify-between'>
                    <div className='text-4xl'>Шаурмешка</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline'>Подробнее</Link>
            </div>
            <div className='bg-black row-span-2 col-span-2 flex flex-col justify-between p-3'>
                <div className='flex justify-between'>
                    <div className='text-4xl'>ARAM Ням ням</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline'>Подробнее</Link>
            </div>
            <div className='bg-black row-span-3 flex flex-col justify-between p-3'>
                <div className='flex justify-between'>
                    <div className='text-4xl'>Кофемания</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline'>Подробнее</Link>
            </div>
            <div className='bg-black row-span-4 flex flex-col justify-between p-3'>
                <div className='flex justify-between'>
                    <div className='text-4xl'>Инь-Янь</div>
                    <div>
                        <span className='mb-2'>Средний чек</span>
                        <div className='h-px w-full bg-white my-2'></div>
                        <span>500-700р</span>
                    </div>
                </div>
                <Link href={'/'} className='text-3xl underline'>Подробнее</Link>
            </div>
        </div>
    )
}
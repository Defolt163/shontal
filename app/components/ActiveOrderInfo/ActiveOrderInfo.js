export default function ActiveOrderInfo(){
    return(
        <div className='z-40 w-max h-max flex items-center bg-white absolute top-10 right-0 pt-3 pb-5 px-4 rounded-s-lg'>
            <div>
                <h2>Активный заказ</h2>
                <h3 className='mt-1'>Кафе: Рубин</h3>
                <ul className='list-none text-muted mb-5 mt-2'>
                    <li>Деревенская пицца 1шт, 550г</li>
                    <li>Деревенская пицца 1шт, 550г</li>
                    <li>Деревенская пицца 1шт, 550г</li>
                </ul>
                <h4>Шентала, ул. Мичурина д.23</h4>
                <ul className='grid mt-4 grid-cols-4 gap-4'>
                    <li className='flex flex-col items-center justify-center'>
                        <div className='h-1 w-full bg-primary'></div>
                        <h5>Создан</h5>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <div className='h-1 w-full bg-muted'></div>
                        <h5>Принят</h5>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <div className='h-1 w-full bg-muted'></div>
                        <h5>Готовится</h5>
                    </li>
                    <li className='flex flex-col items-center justify-center'>
                        <div className='h-1 w-full bg-muted'></div>
                        <h5>В пути</h5>
                    </li>
                </ul>
            </div>
            <div className='h-max'>
                <h4 className='text-xl font-semibold'>1500₽</h4>
            </div>
        </div>
    )
}
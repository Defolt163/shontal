import Link from 'next/link';

export default function SideMenu(){
    return(
        <div className='bg-primary text-menuItems h-dvh w-1/4 px-9 pb-14 pt-20 flex flex-col items-center justify-between'>
            <div className='w-full'>
                <div className='text-menuItems text-3xl text-center mb-12'>
                    <div className='w-max mx-auto'>
                        <span>Schönes.Tal</span>
                        <div className='w-full h-px bg-menuItems'></div>
                        <div className='mt-5 mx-auto w-1/2 h-px bg-menuItems'></div>
                    </div>
                </div>
                <input className='w-full text-primary p-4 rounded-md mx-auto' placeholder='Найти еду или ресторан'/>
                <div className='w-full mt-16 text-menuItems'>
                    <div className=''>Категории</div>
                    <ul className='ml-12'>
                        <li className='my-3 cursor-pointer'>Шашлык</li>
                        <li className='my-3 cursor-pointer'>Бургеры</li>
                        <li className='my-3 cursor-pointer'>Шаурма</li>
                        <li className='my-3 cursor-pointer'>Пицца</li>
                        <li className='my-3 cursor-pointer'>Суши и роллы</li>
                        <li className='my-3 cursor-pointer'>Горячая еда</li>
                    </ul>
                </div>
            </div>
            <div className='w-full'>
                <Link href={'/'} className='block font-medium mb-2 underline'>Войдите или зарегистрируйтесь</Link>
                <div className='button menu mb-5'>Сотрудничество</div>
                <div className='button menu'>Контакты</div>
            </div>
        </div>
    )
}
export default function RestaurantMenu(){
    return(
        <div className='w-full pt-9 text-secondaryText'>
            <div className='button bg-white mb-12 '>Все рестораны</div>
            <h2 className='text-xl mb-4'>МЕНЮ</h2>
            <ul className='text-base'>
                <li>Популярные блюда</li>
                <li>Пицца</li>
                <li>Суши и роллы</li>
                <li>Барбекю</li>
                <li>Горячее</li>
                <li>Напитки</li>
            </ul>
        </div>
    )
}
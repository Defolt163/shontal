export default function RestaurantMenu(){
    return(
        <div className='mx-7 w-1/6 pt-9'>
            <div className='button bg-white mb-12 '>Все рестораны</div>
            <h2>МЕНЮ</h2>
            <ul className='text-secondaryText text-base'>
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
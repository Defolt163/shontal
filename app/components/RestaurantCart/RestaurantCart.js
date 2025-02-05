export default function RestaurantCart(){
    return(
        <div className='w-1/2 p-4 bg-white mx-5 rounded-lg'>
            <h3 className='text-xl font-semibold'>Корзина</h3>
            <div className='w-full grid grid-cols-2 text-center my-5 rounded-lg p-1 bg-lightMuted'>
                <h4 className='py-3.5 bg-primary text-menuItems rounded-lg'>Доставка</h4>
                <h4 className='py-3.5 text-secondaryText'>На вынос</h4>
            </div>
            <ul>
                <li className='w-full flex justify-between'>
                    <div className='aspect-square rounded-md w-1/4 bg-black'
                    style={{background: `url(/products/pizza/pizza1.png) center center/cover no-repeat`}}
                    ></div>
                    <div>
                        <h4>Пицца деревенская</h4>
                        <h5 className='text-muted'>550г</h5>
                        <h5>450р</h5>
                    </div>
                    <div className='flex items-center bg-globalBackground h-max translate-y-1/2 rounded-lg'>
                        <div className='py-1.5 px-3 cursor-pointer'>-</div>
                        <div className='py-1.5'>2</div>
                        <div className='py-1.5 px-3 cursor-pointer'>+</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
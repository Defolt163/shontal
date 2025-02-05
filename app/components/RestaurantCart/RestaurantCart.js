export default function RestaurantCart(){
    return(
        <div className='w-1/2 h-dvh p-4 bg-white mx-5 rounded-lg flex flex-col justify-between'>
            <div>
                <h3 className='text-xl font-semibold'>Корзина</h3>
                <div className='w-full grid grid-cols-2 text-center my-5 rounded-lg p-1 bg-lightMuted'>
                    <h4 className='cursor-pointer py-3.5 bg-primary text-menuItems rounded-lg'>Доставка</h4>
                    <h4 className='cursor-pointer py-3.5 text-secondaryText'>На вынос</h4>
                </div>
                <ul>
                    <li className='w-full h-max flex items-center justify-between'>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='aspect-square rounded-md w-full bg-black'
                            style={{background: `url(/products/pizza/pizza1.png) center center/cover no-repeat`}}
                            ></div>
                            <div className='col-span-2'>
                                <h4>Пицца деревенская</h4>
                                <h5 className='text-muted'>550г</h5>
                                <h5>450р</h5>
                            </div>
                        </div>
                        <div className='flex items-center bg-globalBackground h-max rounded-lg'>
                            <div className='py-1 px-3 cursor-pointer'>-</div>
                            <div className='py-1'>2</div>
                            <div className='py-1 px-3 cursor-pointer'>+</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className='w-full border border-primary-200 border-dashed'></div>
                <div className='text-muted font-medium text-lg py-3'>Доставка - <span className='text-green-800'>бесплатно</span></div>
                <div className='button cart flex justify-between'>Оформить <span>450р</span></div>
            </div>
        </div>
    )
}
export function CartItem(){
    return(
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
    )
}

export function CartItemFromOrder(){
    return(
        <ul>
            <li className='w-full h-max flex items-center justify-between'>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='aspect-square rounded-md w-full bg-black'
                    style={{background: `url(/products/pizza/pizza1.png) center center/cover no-repeat`}}
                    ></div>
                    <div className='col-span-2'>
                        <h4>Пицца деревенская</h4>
                        <h5 className='text-muted'>550г</h5>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                <div className='flex items-center bg-globalBackground h-max rounded-lg'>
                    <div className='py-1 px-3 cursor-pointer'>-</div>
                    <div className='py-1'>2</div>
                    <div className='py-1 px-3 cursor-pointer'>+</div>
                </div>
                <h5 className='font-semibold text-xl'>450р</h5>
                </div>
            </li>
        </ul>
    )
}
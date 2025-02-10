
export default function ProductModal(){
    return(
        <div className='fixed w-full h-full left-0 top-0 z-50 max-[992px]:flex max-[992px]:flex-col max-[992px]:justify-end max-[992px]:h-dvh'>
            <div className='flex w-11/12 2xl:w-[1300px] xl:w-4/5 max-[992px]:w-full max-[992px]:flex-col max-[992px]:translate-y-[0] mx-auto bg-cardBackground translate-y-[25%] rounded-xl overflow-hidden'>
                <div className='absolute right-4 top-3 cursor-pointer'>x</div>
                <div className='w-2/5 bg-black aspect-square max-[992px]:w-full max-[992px]:h-[500px] max-[992px]:aspect-auto'></div>
                <div className='w-3/5 p-6 flex flex-col justify-between max-md:w-full'>
                    <div>
                        <h2 className='text-2xl font-semibold'>Пицца Деревенская</h2>
                        <div className='flex mt-3'>
                            <h4>550г</h4>
                            <h4 className='ml-4'>Категория: Пицца</h4>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <h3>Состав:</h3>
                        <ul className='mt-1'>
                            <li>Пряная говядина</li>
                            <li>баварские колбаски</li>
                            <li>пикантная пепперони</li>
                            <li>бекон</li>
                            <li>моцарелла и фирменный томатный соус</li>
                        </ul>
                    </div>
                    <div className='mt-3'>
                        <h3 className='mb-2'>На выбор</h3>
                        <div className='cursor-pointer'>
                            <input type='radio' name='complectation' id='complectation-1'/>
                            <label className='ml-4 cursor-pointer' htmlFor='complectation-1'>Размер 30см <span>(550г)</span> <span>+0₽</span></label>
                        </div>
                        <div className='cursor-pointer'>
                            <input type='radio' name='complectation' id='complectation-2'/>
                            <label className='ml-4 cursor-pointer' htmlFor='complectation-2'>Размер 30см <span>(550г)</span> <span>+0₽</span></label>
                        </div>
                    </div>
                    <div className='bg-lightMuted w-max rounded-md flex pr-5 my-7'>
                        <div className='text-center font-medium pl-5 py-2.5'>
                            <h5 className=''>260</h5>
                            <h6 className='text-center text-secondaryText'>ккал</h6>
                        </div>
                        <div className='text-center font-medium pl-5 py-2.5'>
                            <h5 className=''>12г</h5>
                            <h6 className='text-center text-secondaryText'>белки</h6>
                        </div>
                        <div className='text-center font-medium pl-5 py-2.5'>
                            <h5 className=''>6г</h5>
                            <h6 className='text-center text-secondaryText'>жиры</h6>
                        </div>
                        <div className='text-center font-medium pl-5 py-2.5'>
                            <h5 className=''>66г</h5>
                            <h6 className='text-center text-secondaryText'>углеводы</h6>
                        </div>
                    </div>
                    <div className='flex gap-2 max-[400px]:flex-col-reverse'>
                        <div className='whitespace-nowrap button cart flex justify-between w-[326px]'>В корзину <span>450₽</span></div>
                        <div className='bg-lightMuted rounded-lg flex items-center max-[400px]:w-max'>
                            <div className='px-5 cursor-pointer max-[400px]:py-2'>-</div>
                            <div className='px-3 max-[400px]:py-2'>1</div>
                            <div className='px-5 cursor-pointer max-[400px]:py-2'>+</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='substrate'></div>
        </div>
    )
}
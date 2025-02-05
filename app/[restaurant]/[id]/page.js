import ProductRestaurantCard from '@/app/components/ProductRestaurantCard/ProductRestaurantCard';
import RestaurantCart from '@/app/components/RestaurantCart/RestaurantCart';
import RestaurantMenu from '@/app/components/RestaurantMenu/RestaurantMenu';
import Link from 'next/link';


export default function RestaurantPage() {
  return (
      <div className='pl-[193px] grid grid-cols-7 gap-4 w-full h-dvh relative pt-4'>
        <RestaurantMenu/>
        <div className='col-span-4 w-full'>
          <div style={{background: `url(/restaurants/slice-cut-from-classic-pepperoni-pizza-with-green-pepper-rolls.jpeg) center center/cover no-repeat`}} className='mb-16 rounded-lg overflow-hidden w-full h-72 relative before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-black/65 before:-z-0 '>
              <div className='z-0 relative p-4 text-accentText flex flex-col-reverse justify-between'>
                <div>
                  <h1 className='text-5xl mb-3'>Кафе: РУБИН</h1>
                  <div className='w-1/6'>
                    <h4>Средний чек</h4>
                    <div className='h-px w-full bg-menuItems'></div>
                    <h4>500-700р</h4>
                  </div>
                </div>
              </div>
          </div>
          <h2 className='uppercase text-lg font-semibold text-secondaryText mb-5'>Популярные блюда</h2>
          <div className='grid grid-cols-4 gap-2'>
            <ProductRestaurantCard productName={"Пицца Деревенская"} productPrice={460} productWeight={550} productImage={'/pizza/pizza1.png'}/>
            <ProductRestaurantCard productName={"Пицца Новая"} productPrice={460} productWeight={550} productImage={'/pizza/pizza2.png'}/>
            <ProductRestaurantCard productName={"Пицца ДОДО"} productPrice={460} productWeight={550} productImage={'/pizza/pizza3.png'}/>
            <ProductRestaurantCard productName={"Пицца Карбонара"} productPrice={460} productWeight={550} productImage={'/pizza/pizza4.png'}/>
            <ProductRestaurantCard productName={"Пицца ДОДО"} productPrice={460} productWeight={550} productImage={'/pizza/pizza3.png'}/>
            <ProductRestaurantCard productName={"Пицца ДОДО"} productPrice={460} productWeight={550} productImage={'/pizza/pizza3.png'}/>
          </div>
        </div>
        <RestaurantCart/>
      </div>
  );
}

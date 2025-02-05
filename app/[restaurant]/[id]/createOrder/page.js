import ProductRestaurantCard from '@/app/components/ProductRestaurantCard/ProductRestaurantCard';
import RestaurantCart from '@/app/components/RestaurantCart/RestaurantCart';
import RestaurantMenu from '@/app/components/RestaurantMenu/RestaurantMenu';
import Link from 'next/link';


export default function CreateOrderPage() {
  return (
      <div className='pl-[193px] w-full'>
        <div className='flex items-end'>
          <div className='button'>Назад</div>
          <h1 className='ml-72 text-xl'>Кафе: РУБИН</h1>
        </div>
        <div className='mx-auto w-max grid grid-cols-5 grid-rows-2 pt-3 px-8 pb-4 bg-cardBackground rounded-md'>
          <div className='col-span-3'>
            <h2>Заказ на доставку</h2>
            <div>
              <label>Имя</label>
              <input className='order-input'/>
            </div>
          </div>
        </div>
      </div>
  );
}

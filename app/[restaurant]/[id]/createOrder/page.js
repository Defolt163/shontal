

import { CartItemFromOrder } from '@/app/components/CartItem/CartItem';
import ProductRestaurantCard from '@/app/components/ProductRestaurantCard/ProductRestaurantCard';
import RestaurantCart from '@/app/components/RestaurantCart/RestaurantCart';
import RestaurantMenu from '@/app/components/RestaurantMenu/RestaurantMenu';
import Link from 'next/link';


export default function CreateOrderPage() {
  return (
      <div className='pl-[193px] w-full pt-9'>
        <div className='flex items-end mb-12'>
          <div className='button'>Назад</div>
          <h1 className='ml-52 text-xl font-semibold'>Кафе: РУБИН</h1>
        </div>
        <div className='w-full'>
          <div className='flex gap-4 justify-center'>
            <div className='w-[700px] col-span-2'>
              <div className='pt-3 pl-8 pr-[130px] pb-4 bg-cardBackground rounded-md'>
                <h2 className='font-semibold'>Заказ на доставку</h2>
                <div className='grid grid-cols-4 grid-rows-2 gap-4'>
                    <label className='col-span-1 whitespace-nowrap'>Имя</label>
                    <input className='order-input ml-4 col-span-3 pr-12'/>
                    <label className='col-span-1 whitespace-nowrap'>Номер телефона:</label>
                    <input className='order-input ml-4 col-span-3 pr-12'/>
                </div>
                <div className='delivery_block mt-5'>
                  <h3>Адрес доставки:</h3>
                  <div className='flex gap-2 mt-1'>
                    <div className='flex flex-col w-4/5'>
                      <label>Улица:</label>
                      <input className='order-input'/>
                    </div>
                    <div className='flex flex-col w-1/5'>
                      <label>Дом:</label>
                      <input className='order-input w-full'/>
                    </div>
                  </div>
                  <div className='grid grid-cols-4 text-sm gap-4 w-3/4 mt-3'>
                    <div className='flex flex-col'>
                      <label className='w-max'>Кв/офис:</label>
                      <input className='order-input'/>
                    </div>
                    <div className='flex flex-col'>
                      <label>Этаж:</label>
                      <input className='order-input w-full'/>
                    </div>
                    <div className='flex flex-col'>
                      <label>Подъезд:</label>
                      <input className='order-input w-full'/>
                    </div>
                    <div className='flex flex-col'>
                      <label>Домофон:</label>
                      <input className='order-input w-full'/>
                    </div>
                  </div>
              </div>
                <div className='flex gap-4 mt-3 items-center'>
                  <h4 className='whitespace-nowrap'>Время доставки:</h4>
                  <div className='delivery_time__item active'>Побыстрее</div>
                  <div className='delivery_time__item'>22:00-22:30</div>
                  <div className='delivery_time__item'>Другое время</div>
                </div>
              </div>
              <div className='pr-9 mt-4 pt-3 pl-8 pb-4 bg-cardBackground rounded-md'>
                <h2 className='font-semibold mb-4'>Ваш заказ</h2>
                <CartItemFromOrder/>
              </div>
            </div>
            <div className='col-span-1 w-[425px] h-max pt-3 px-8 pb-4 bg-cardBackground rounded-md'>
              <h2 className='font-semibold'>Способ оплаты</h2>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4 w-full'>
                  <div className='w-1/5 aspect-square bg-black'></div>
                  <h3 className='text-xl'>СБП</h3>
                </div>
                <div className='button order_method px-4'>Изменить</div>
              </div>
              <div className='w-full h-px bg-muted mb-3 mt-5'></div>
              <h2 className='font-semibold text-xl'>Способ оплаты</h2>
              <div className='flex justify-between mt-5'>
                <h3>Товары в заказе</h3>
                <h4 className='font-semibold'>610 ₽</h4>
              </div>
              <div className='flex justify-between my-5'>
                <h3>Доставка</h3>
                <h4 className='font-semibold'>0 ₽</h4>
              </div>
              <div className='flex justify-between'>
                <h3>Сервисный сбор</h3>
                <h4 className='font-semibold'>50 ₽</h4>
              </div>
              <div className='flex justify-between mt-5 items-end'>
                <div>
                  <input className='order-input'/>
                  <div className='button cart mt-3'>Оплатить</div>
                </div>
                <h3 className='text-2xl font-semibold'>660 ₽</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

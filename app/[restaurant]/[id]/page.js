'use client'
import ProductModal from '@/app/components/ProductModal/ProductModal';
import ProductRestaurantCard from '@/app/components/ProductRestaurantCard/ProductRestaurantCard';
import RestaurantCart from '@/app/components/RestaurantCart/RestaurantCart';
import RestaurantMenu from '@/app/components/RestaurantMenu/RestaurantMenu';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function RestaurantPage() {
  const [width, setWidth] = useState();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("Window resized:", window.innerWidth);
    };

    // Устанавливаем начальную ширину
    handleResize();

    // Добавляем обработчик изменения размера окна
    window.addEventListener('resize', handleResize);

    // Убираем обработчик при размонтировании компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
      <>
        <div className='pl-4 grid grid-cols-7 gap-4 w-full h-dvh relative pt-4 max-2xl:grid-cols-5 max-lg:block max-lg:pl-0 max-lg:pt-0'>
          {width > 1024 ? <RestaurantMenu/> : null}
          <div className='col-span-4 w-full'>
            <div style={{background: `url(/restaurants/slice-cut-from-classic-pepperoni-pizza-with-green-pepper-rolls.jpeg) center center/cover no-repeat`}} className='mb-16 rounded-lg overflow-hidden w-full h-72 relative before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-black/65 before:-z-0 max-md:rounded-t-none max-lg:mb-4 max-lg:rounded-t-none'>
                <div className='z-0 relative p-4 max-lg:h-full max-lg:justify-start text-accentText flex flex-col-reverse justify-between'>
                  <div>
                    <h1 className='text-5xl mb-3 max-lg:text-4xl font-[Caveat]'>Кафе: РУБИН</h1>
                    <div className='w-1/6 max-lg:w-1/2'>
                      <h4>Средний чек</h4>
                      <div className='h-px w-full bg-menuItems'></div>
                      <h4>500-700р</h4>
                    </div>
                  </div>
                </div>
            </div>
            {width < 1024 ? <RestaurantMenu/> : null}
            <h2 className='uppercase text-lg font-semibold text-secondaryText mb-5'>Популярные блюда</h2>
            <div className='grid grid-cols-4 gap-2 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1'>
              <ProductRestaurantCard productName={"Пицца Деревенская"} productPrice={460} productWeight={550} productImage={'/pizza/pizza1.png'}/>
              <ProductRestaurantCard productName={"Пицца Новая"} productPrice={460} productWeight={550} productImage={'/pizza/pizza2.png'}/>
              <ProductRestaurantCard productName={"Пицца ДОДО"} productPrice={460} productWeight={550} productImage={'/pizza/pizza3.png'}/>
              <ProductRestaurantCard productName={"Пицца Карбонара"} productPrice={460} productWeight={550} productImage={'/pizza/pizza4.png'}/>
              <ProductRestaurantCard productName={"Пицца ДОДО"} productPrice={460} productWeight={550} productImage={'/pizza/pizza3.png'}/>
              <ProductRestaurantCard productName={"Пицца ДОДО"} productPrice={460} productWeight={550} productImage={'/pizza/pizza3.png'}/>
            </div>
          </div>
          <div className='relative col-span-2 max-lg:pb-[123px]'>
            <RestaurantCart/>
          </div>
        </div>
        {/* <ProductModal/> */}
      </>
  );
}

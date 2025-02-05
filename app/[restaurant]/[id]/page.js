import RestaurantCart from '@/app/components/RestaurantCart/RestaurantCart';
import RestaurantMenu from '@/app/components/RestaurantMenu/RestaurantMenu';
import Link from 'next/link';


export default function RestaurantPage() {
  return (
      <div className='w-full h-dvh flex relative pt-4'>
        <RestaurantMenu/>
        <div className='rounded-lg w-full h-1/2 flex flex-col relative'>
          <div style={{background: `url(/restaurants/slice-cut-from-classic-pepperoni-pizza-with-green-pepper-rolls.jpeg) center center/cover no-repeat`}} className='w-full h-full relative before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-black/65 before:-z-0 '>
              <div className='z-0 relative p-4 text-accentText flex flex-col justify-between h-full'>
                  <h1 className='text-5xl'>Кафе: РУБИН</h1>
              </div>
          </div>
        </div>
        <RestaurantCart/>
      </div>
  );
}

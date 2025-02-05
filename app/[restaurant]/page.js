import Link from 'next/link';
import RestaurantInfo from '../components/Restaurantinfo/Restaurantinfo';
import ActiveOrderInfo from '../components/ActiveOrderInfo/ActiveOrderInfo';


export default function Restaurant() {
  return (
      <div className='w-full h-dvh flex flex-col relative'>
        <ActiveOrderInfo/>
        <div style={{background: `url(/restaurants/slice-cut-from-classic-pepperoni-pizza-with-green-pepper-rolls.jpeg) center center/cover no-repeat`}} className='w-full h-full relative before:content-[""] before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-black/65 before:-z-0 '>
            <div className='z-0 relative p-4 text-accentText flex flex-col justify-between h-full'>
                <h1 className='text-5xl'>Кафе: РУБИН</h1>
                <Link href={'/'} className='text-3xl underline uppercase'>Открыть меню</Link>
            </div>
        </div>
        <RestaurantInfo/> 
      </div>
  );
}

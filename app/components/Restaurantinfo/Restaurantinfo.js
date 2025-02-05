import Link from 'next/link';


export default function RestaurantInfo() {
  return (
    <div className='pr-16 w-full flex justify-between bg-gray-400 py-4 text-white'>
      <div className='grid grid-cols-5 gap-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-1/2 aspect-square' style={{background: `url(/icons/barbecue.png) center center/cover no-repeat`}}></div>
          <div className='w-max'>Бербекю</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-1/2 aspect-square' style={{background: `url(/icons/pizza.png) center center/cover no-repeat`}}></div>
          <div className='w-max'>Пицца</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-1/2 aspect-square' style={{background: `url(/icons/soupplate.png) center center/cover no-repeat`}}></div>
          <div className='w-max'>Горячее</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-1/2 aspect-square' style={{background: `url(/icons/cafe.png) center center/cover no-repeat`}}></div>
          <div className='w-max'>Напитки</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-1/2 aspect-square' style={{background: `url(/icons/sushi.png) center center/cover no-repeat`}}></div>
          <div className='w-max'>Суши и роллы</div>
        </div>
      </div>
      <div className='w-1/6'>
        <h4>Средний чек</h4>
        <div className='h-px w-full bg-menuItems'></div>
        <h4>500-700р</h4>
      </div>
    </div>
  );
}

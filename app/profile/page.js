import Link from 'next/link';
import RestaurantInfo from '../components/Restaurantinfo/Restaurantinfo';
import ActiveOrderInfo from '../components/ActiveOrderInfo/ActiveOrderInfo';


export default function ProfilePage() {
  return (
      <div className='w-full h-dvh flex flex-col relative bg-menuItems pt-[97px]'>
        <h1 className='text-3xl ml-5 mb-[52px]'>Личные данные</h1>
        <div className='flex justify-center gap-[6vw]'>
          <div className='w-max flex flex-col gap-4'>
            <div className=''>
              <label className='whitespace-nowrap block'>Имя:</label>
              <input className='order-input w-full'/>
            </div>
            <div className=''>
              <label className='whitespace-nowrap block'>Номер телефона:</label>
              <input className='order-input w-full'/>
            </div>
            <div className='flex justify-between gap-4'>
              <div>
                <label className='whitespace-nowrap block'>День рождения:</label>
                <input className='order-input'/>
              </div>
              <div>
                <label className='whitespace-nowrap block'>Год рождения:</label>
                <input className='order-input'/>
              </div>
            </div>
            <div>
              <label className='whitespace-nowrap block'>Email:</label>
              <input className='order-input w-full'/>
            </div>
            <div>
              <h2>Адрес доставки:</h2>
              <div className='flex justify-between gap-4 mt-3'>
                <div className='w-4/5'>
                  <label className='whitespace-nowrap block'>Улица:</label>
                  <input className='order-input w-full'/>
                </div>
                <div className='w-1/5'>
                  <label className='whitespace-nowrap block'>Дом:</label>
                  <input className='order-input w-full'/>
                </div>
              </div>
              <div className='flex gap-4 my-4'>
                <div className='w-[65px]'>
                  <label className='whitespace-nowrap block text-sm'>Кв/офис:</label>
                  <input className='order-input w-full'/>
                </div>
                <div className='w-[65px]'>
                  <label className='whitespace-nowrap block text-sm'>Этаж:</label>
                  <input className='order-input w-full'/>
                </div>
                <div className='w-[65px]'>
                  <label className='whitespace-nowrap block text-sm'>Подъезд:</label>
                  <input className='order-input w-full'/>
                </div>
                <div className='w-[65px]'>
                  <label className='whitespace-nowrap block text-sm'>Домофон:</label>
                  <input className='order-input w-full'/>
                </div>
              </div>
              <h3 className='text-primary cursor-pointer'>Сохранить</h3>
            </div>
          </div>
          <div className='w-1/2'>
            <h2 className='text-2xl font-semibold'>История заказов</h2>
            <table className="order_profile__table">
              <thead>
                <tr>
                  <th>№</th>
                  <th>Время заказа</th>
                  <th>Сумма</th>
                  <th>Чек</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>458</td>
                  <td>29 янв. 2025 г., 19:22</td>
                  <td>1500₽</td>
                  <td>Посмотреть</td>
                </tr>
                <tr>
                  <td>459</td>
                  <td>15 янв. 2025 г., 12:22</td>
                  <td>660₽</td>
                  <td>Посмотреть</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}

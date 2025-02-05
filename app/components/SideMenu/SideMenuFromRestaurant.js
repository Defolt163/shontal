import Link from 'next/link';

export default function SideMenuFromRestaurant(){
    return(
        <div className='fixed top-0 left-0 bg-primary text-menuItems h-dvh w-max px-2 pb-14 pt-20 z-40'>
            <div className='w-full'>
                <div className='text-menuItems text-3xl text-center mb-12'>
                    <div className='w-max mx-auto'>
                        <span>Schönes.Tal</span>
                        <div className='w-full h-px bg-menuItems'></div>
                        <div className='mt-5 mx-auto w-1/2 h-px bg-menuItems'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
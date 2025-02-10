import Link from 'next/link';

export default function SideMenuFromRestaurant(){
    return(
        <div className='fixed top-0 left-0 bg-primary text-menuItems h-dvh w-[191px] px-2 pb-14 pt-20 z-40'>
            <div className='w-full'>
                <div className='text-menuItems text-3xl text-center mb-12'>
                    <div className='w-max mx-auto'>
                        <span>Schönes.Tal</span>
                        <div className='w-full h-px bg-menuItems'></div>
                        <div className='mt-5 mx-auto w-1/2 h-px bg-menuItems'></div>
                    </div>
                </div>
                <div className='flex flex-col items-center absolute bottom-16 left-1/2 -translate-x-1/2 border border-menuItems p-4 rounded-full cursor-pointer'>
                    <div className='w-9 aspect-square' style={{background: `url(/icons/user-solid.svg) center center/contain no-repeat`, filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(52deg) brightness(109%) contrast(101%)'}}></div>
                    <h3>Михаил</h3>
                </div>
            </div>
        </div>
    )
}
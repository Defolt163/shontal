import arrowBack from '@/public/icons/arrow-left-solid.svg'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { useEffect, useState } from 'react';
import { useGetWidth } from '@/app/context/GetWidth/GetWidth';

export default function RestaurantMenu(){
    const {width} = useGetWidth()
    return(
        <div className='w-full pt-9 text-secondaryText max-lg:pt-0 max-lg:my-4'>
            <div className='button bg-white mb-12 max-lg:hidden'>Все рестораны</div>
            <div className='button bg-white mb-12 lg:hidden w-max fixed top-4'>
                <Image src={arrowBack} width={24} alt='arrow-left'/>
            </div>
            <h2 className='text-xl mb-4 max-lg:hidden'>МЕНЮ</h2>
            {
                width > 1024 ? 
                    <ul className='text-base'>
                        <li className='cursor-pointer'>Популярные блюда</li>
                        <li className='cursor-pointer'>Пицца</li>
                        <li className='cursor-pointer'>Суши и роллы</li>
                        <li className='cursor-pointer'>Барбекю</li>
                        <li className='cursor-pointer'>Горячее</li>
                        <li className='cursor-pointer'>Напитки</li>
                    </ul>
                :
                <Carousel className='px-2'>
                    <CarouselContent className="-ml-2">
                        <CarouselItem className='pl-1 sm:basis-1/3 md:basis-1/4 basis-1/2 text-center text-nowrap'>
                            <h2 className='cursor-pointer bg-white rounded-lg p-2 block'>Популярное</h2>
                        </CarouselItem>
                        <CarouselItem className='pl-1 sm:basis-1/3 md:basis-1/4 basis-1/2 text-center text-nowrap'>
                            <h2 className='cursor-pointer bg-white rounded-lg p-2 block'>Пицца</h2>
                        </CarouselItem>
                        <CarouselItem className='pl-1 sm:basis-1/3 md:basis-1/4 basis-1/2 text-center text-nowrap'>
                            <h2 className='cursor-pointer bg-white rounded-lg p-2 block'>Суши и роллы</h2>
                        </CarouselItem>
                        <CarouselItem className='pl-1 sm:basis-1/3 md:basis-1/4 basis-1/2 text-center text-nowrap'>
                            <h2 className='cursor-pointer bg-white rounded-lg p-2 block'>Барбекю</h2>
                        </CarouselItem>
                        <CarouselItem className='pl-1 sm:basis-1/3 md:basis-1/4 basis-1/2 text-center text-nowrap'>
                            <h2 className='cursor-pointer bg-white rounded-lg p-2 block'>Горячее</h2>
                        </CarouselItem>
                        <CarouselItem className='pl-1 sm:basis-1/3 md:basis-1/4 basis-1/2 text-center text-nowrap'>
                            <h2 className='cursor-pointer bg-white rounded-lg p-2 block'>Напитки</h2>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            }
        </div>
    )
}
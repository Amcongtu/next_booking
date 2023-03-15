import Link from 'next/link';
import React from 'react';
function CardRoom({value,durationItem}){
    return (
        <Link href={`/hotel/${value._id}`} className='flex flex-col rounded-md overflow-hidden mt-4 duration-50' data-aos='fade-up' data-aos-delay={durationItem}>
            <div className='w-full h-[220px] overflow-hidden'>
                <img src={value.photos[0]} alt={value.title} className=' w-full h-full object-cover hover:scale-110 duration-200' />
            </div>
            <div className='font-bold text-[20px] '>{value.name}</div>
            <div className='text-gray-500'>{value.city}</div>
            <div className='font-bold'>Starting from ${value.cheapestPrice}</div>
            <div className='flex items-center gap-4'>
                <div className='w-fit h-[25px] bg-cyan-500 text-white flex items-center justify-center text-[14px] px-2'>{value.rate.toFixed(1)}</div>
                <div className='text-[14px]'>{value.status}</div>
            </div>
        </Link>
    );
}

export default CardRoom;
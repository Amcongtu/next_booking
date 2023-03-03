import Link from 'next/link';
import React from 'react';

function CardRoom({value,durationItem}){
    return (
        <Link href={`/hotel/${value.name}`} className='flex flex-col rounded-md overflow-hidden mt-4 duration-200' data-aos='fade-up' data-aos-delay={durationItem}>
            <div className='w-full h-[220px] overflow-hidden'>
                <img src={value.image} alt={value.image} className=' w-full h-full object-cover hover:scale-110 duration-200' />
            </div>
            <div className='font-bold text-[20px] '>{value.title}</div>
            <div className='text-gray-500'>{value.location}</div>
            <div className='font-bold'>Starting from ${value.start_price}</div>
            <div className='flex items-center gap-4'>
                <div className='w-[25px] h-[25px] bg-cyan-500 text-white flex items-center justify-center text-[14px]'>{value.rate}</div>
                <div className='text-[14px]'>{value.status}</div>
            </div>
        </Link>
    );
}

export default CardRoom;
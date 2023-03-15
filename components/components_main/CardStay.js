import React from 'react';

function CardStay({value}) {
    console.log(value)
    return (
        <div className='flex flex-col gap-2 rounded-md overflow-hidden'>
            <img src={value.image} alt={value.images[0]} className='w-full h-[200px] object-cover' />
            <div className='font-bold'>{value.title}</div>
            <div className='text-gray-500 text-[12px]'>Rating: {value.rating}</div>
        </div>
    );
}

export default CardStay;
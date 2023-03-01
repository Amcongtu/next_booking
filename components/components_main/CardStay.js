import React from 'react';

function CardStay({value}) {
    return (
        <div className='flex flex-col gap-2 rounded-md overflow-hidden'>
            <img src={value.image} alt={value.image} className='w-full h-[200px] object-cover' />
            <div className='font-bold'>{value.title}</div>
            <div className='text-gray-500 text-[12px]'>{value.count} hotels</div>
        </div>
    );
}

export default CardStay;
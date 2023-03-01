import React from 'react';

function CardIntro({value}) {
    return (
        <div className='p-4 relative h-[300px] overflow-hidden w-full rounded-md text-white flex'>
            <img src={value.image} alt={value.image} className='absolute top-0 right-0 bottom-0 w-full h-full object-cover z-0' />
            <div className='text-white relative z-10 mt-auto'>
                <div className='font-bold text-[24px]'>{value.title}</div>
                <div className='font-bold text-[20px]'>{value.count} properties</div>
            </div>
        </div>
    );
}

export default CardIntro;
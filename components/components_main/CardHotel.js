import React from 'react';

function CardHotel({product}) {
    return (
        <div className='p-4 flex gap-2 border border-gray-300 rounded-md'>
            <img src={product.image} alt='hotel image' width={250}/>
            <div className='flex gap-2 justify-between flex-1'>
                <div className='flex flex-col gap-2 flex-1'>
                    <div className='text-[24px] font-bold text-cyan-500'>{product.title}</div>
                    <div>{product.intro_address}</div>
                    <div className='p-1 text-white bg-[#444] text-center w-[200px]'>{product.tag}</div>
                    <div className='font-bold'>{product.sub}</div>
                    <div>{product.desc_room}</div>
                    <div className='font-bold text-green-600'>{product.desc}</div>
                    <div className='text-green-600'>{product.service}</div>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div className='font-bold text-[24px]'>Excellent</div>
                        <div className='w-8 h-8 bg-cyan-500 text-white flex items-center justify-center'>8.9</div>
                    </div>
                    <div className='text-right'>
                        <div className='font-bold text-[24px] text-red-500'>${product.price}</div>
                        <div className='text-[14px] text-gray-500'>Includes task and fees</div>
                        <div className='p-2 bg-cyan-500 text-white rounded-md text-center hover:bg-cyan-400 hover:text-black active:scale-90 duration-200 w-[200px] ml-auto'>See availability</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardHotel;
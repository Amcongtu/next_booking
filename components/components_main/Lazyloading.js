import React from 'react';

function Lazyloading({heading}) {
    return (
        <div className='fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] z-40'>
            <div className='bg-white p-10 w-[400px] h-fit rounded-md flex items-center flex-col shadow-md shadow-gray-500 gap-4'>
                <div className='w-[40px] h-10 border-4 border-[#003B95] border-r-gray-300 animate-spin rounded-full'>
                </div>
                <div className='text-[20px] text-[#003B95]'>{heading}</div>
            </div>
        </div>
    );
}

export default Lazyloading;
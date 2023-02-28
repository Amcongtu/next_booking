import React from 'react';

function EmailList(props) {
    return (
        <div className='bg-[#444] text-white p-10'>
            <div className='root_container'>
                <div className='flex flex-col items-center gap-6'>
                    <div className='text-[24px] font-bold'>Save time, save money!</div>
                    <div className='text-[12px]'>Sign up and we will send the best deals to you</div>
                    <div className='flex items-center gap-2'>
                        <input type="email" name="" id="" className='p-2 rounded-md text-black' placeholder='Type your email...' />
                        <div className='p-2 text-white rounded-md bg-cyan-500 flex items-center justify-center hover:text-black hover:bg-cyan-400 active:scale-90 duration-200'>
                            Subscribe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailList;
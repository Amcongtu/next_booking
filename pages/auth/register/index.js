import Link from 'next/link';
import React from 'react';
import {v4 as uuidv4} from 'uuid'
function Register(props) {
    const controls = [
        {
            type: 'text',
            label: 'Username',
            placeholder: 'Type your username...',
            
        },
        {
            type: 'password',
            label: 'Password',
            placeholder: 'Type your password...',
        },
        {
            type: 'password',
            label: 'PrePassword',
            placeholder: 'Type your prepassword...',
        },
    ]
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#444]'>
            <div className='grid grid-cols-2 bg-white w-[80%] p-4 gap-4 rounded-sm'>
                <div className='flex flex-col gap-4'>
                    <img src="https://app.digitickets.co.uk/userfiles/eventcats/38031-boston-park-farm-logo-cyan.450x210.png?zc=1" alt="" className='w-[50px] rounded-full h-[50px] object-cover' />
                    <div className='flex flex-col gap-4 '>
                        <div className='text-[24px] font-bold text-cyan-500'>Register</div>
                        <form action="#" className=" flex flex-col gap-4 w-[80%] mx-auto border border-cyan-500 p-4 rounded-md">
                            {controls.map(item=>{
                                return (
                                    <div className="flex flex-col gap-2" key={uuidv4()}>
                                        <label htmlFor={item.type} className="">
                                            {item.label}
                                        </label>
                                        <input type={item.type} name={item.name} placeholder={item.placeholder} spellCheck={false} className='p-2 border border-gray-300 rounded-sm focus-visible:outline-cyan-500' />
                                    </div>
                                )
                            })}
                            <div className='p-2 text-center bg-cyan-500 text-white rounded-md hover:bg-cyan-300 duration-200 cursor-pointer active:scale-90 select-none'>
                                Login
                            </div>
                            <div className='flex items-center gap-2 text-[12px] '>
                                <div>You have an account ?</div>
                                <Link href={'/auth/login'} className='text-cyan-500 hover:underline'>Login now ?</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <img src="https://img.myloview.de/fototapeten/smartphone-application-for-online-searching-buying-and-booking-flights-on-the-internet-online-check-in-unusual-3d-illustration-of-commercial-airplane-on-smart-phone-400-156942052.jpg" alt="" className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    );
}

export default Register;
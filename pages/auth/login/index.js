import { getUserResquest, userSelect } from '@/redux/reducers/userSlice';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {v4 as uuidv4} from 'uuid'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFaceBook } from '@fortawesome/fontawesome-svg-core';
// import { faGoogle } from '@fortawesome/free-solid-svg-icons';
function Login(props) {
    const dispatch = useDispatch()
    const user = useSelector(userSelect)
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const handleLogin = ()=>{
    }
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gradient-to-br from-black to-cyan-500'>
            <div className='grid grid-cols-2 bg-white w-[80%] p-4 gap-4 rounded-lg h-[80%] relative'>
                <div className='flex flex-col'>
                    <img src="https://app.digitickets.co.uk/userfiles/eventcats/38031-boston-park-farm-logo-cyan.450x210.png?zc=1" alt="" className='w-[50px] rounded-full h-[50px] object-cover absolute top-2 left-2' />
                    <div className='flex flex-col gap-4 items-center justify-center '>
                        <div className='text-[24px] font-bold text-cyan-500 text-center'>Login</div>
                        <form action="#" className=" flex flex-col gap-4 w-[80%] mx-auto  border border-cyan-500 p-4 rounded-md">
                            <div className="flex flex-col gap-2">
                                <label htmlFor='username' className="">
                                    Username
                                </label>
                                <input type='text' name='username' placeholder='Type your username...' spellCheck={false} className='p-2 border border-gray-300 rounded-sm focus-visible:outline-cyan-500' value={username} onChange={e=>setUsername(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor='password' className="">
                                    Password
                                </label>
                                <input type='password' name='password' placeholder='Type your password...' spellCheck={false} className='p-2 border border-gray-300 rounded-sm focus-visible:outline-cyan-500' value={password} onChange={e=>setPassword(e.target.value)} />
                            </div>
                            <div className='p-2 text-center bg-gradient-to-r from-blue-900 to-cyan-500 text-white rounded-md hover:brightness-150 duration-200 cursor-pointer active:scale-90 select-none' onClick={handleLogin}>
                                Login
                            </div>
                            <div className='flex items-center gap-2 text-[12px] '>
                                <div>You dont have an account ?</div>
                                <Link href={'/auth/register'} className='text-cyan-500 hover:underline'>Register now ?</Link>
                            </div>
                            <div className='flex flex-col gap-4 items-center'>
                                <div className='text-[14px] text-gray-400'>Login to using</div>
                                <button className='bg-gradient-to-r from-blue-600 to-cyan-400 text-white w-full p-2 rounded-md flex items-center gap-2 justify-center hover:brightness-110 active:scale-90 duration-200'>
                                    <img src="https://freepngimg.com/thumb/facebook/62588-and-icons-facebook-computer-black-logo-white.png" alt="" className='w-[25px] object-cover rounded-lg invert' />
                                    <span>Login with Facebook</span>
                                </button>
                                <button className='bg-gradient-to-r from-red-600 to-orange-400 text-white w-full p-2 rounded-md flex items-center gap-2 justify-center hover:brightness-110 active:scale-90 duration-200'>
                                    <img src="https://static-00.iconduck.com/assets.00/logo-google-icon-252x256-k4f340gy.png" alt="" className='w-[20px] object-cover rounded-lg invert' />
                                    <span>Login with Google</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className = 'relative rounded-lg overflow-hidden'>
                    <img src="https://www.rd.com/wp-content/uploads/2016/06/04-hotel-decorating-white-sheets.jpg" alt="" className='w-full h-full object-cover ' />
                    <div className='absolute top-4 left-4 flex flex-col gap-2 text-white z-10'>
                        <span className=' text-[24px] font-bold '>Login to booking now</span>
                        <span>All services waitting for you</span>
                    </div>
                    <div className='absolute bg-gradient-to-br from-black to-transparent w-full h-full top-0'></div>
                </div>
            </div>
        </div>
    );
}

export default Login;
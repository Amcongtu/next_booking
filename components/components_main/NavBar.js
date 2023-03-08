import React, { useState } from 'react'
import  style  from '@/styles/Layout_main/NavBar_Main.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { userSelect } from '@/redux/reducers/userSlice';
import { useSelector } from 'react-redux';
function NavBar() {
  const user = useSelector(userSelect)
  const [userhover,setuserhover] = useState(false)
  
  return (
    <div className='bg-[#003B95] text-white py-4 w-full'>
      <div className='root_container'>
        <div className='flex items-center justify-between w-full'>
          <span className={`${style.logo} text-[30px] font-bold text-white`}>Bookingapp</span>
          <div className='flex items-center gap-2'>
            <div className='p-2 rounded-md hover:bg-[rgba(255,255,255,0.2)] cursor-pointer flex items-center justify-center uppercase'>vnd</div>
            <div className='p-2 rounded-md hover:bg-[rgba(255,255,255,0.2)] cursor-pointer flex items-center justify-center'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover ' /></div>
            <div className='p-2 rounded-md hover:bg-[rgba(255,255,255,0.2)] cursor-pointer flex items-center justify-center'><FontAwesomeIcon icon={faCircleQuestion} fontSize={20}/></div>
            <div className='p-2 rounded-md hover:bg-[rgba(255,255,255,0.2)] cursor-pointer flex items-center justify-center'>Post your thought place</div>
            {user.user ? (
              <div className=' flex items-center gap-1 relative duration-200' onMouseEnter={()=>setuserhover(true)} onMouseLeave={()=>setuserhover(false)}>
                <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg" alt="" className='w-[24px] h-[24px] rounded-full object-cover' />
                <span className='font-bold text-[16px]'>
                  {user.user?.username}
                </span>
                {userhover && (
                  <div className='w-[200px] h-fit bg-white absolute top-full z-20 text-black p-4 rounded-md shadow-md shadow-gray-700 origin-top-right right-0 flex flex-col gap-2 duration-200 before:contents-[""] before:border-[20px] before:absolute before:border-transparent before:border-b-white before:top-[-30px] before:right-0 after:contents-[""] after:absolute after:bg-transparent after:h-[20px] after:w-full after:bottom-full after:right-0'>
                    <div className='hover:text-cyan-600 cursor-pointer duration-200'>Profile</div>
                    <div className='hover:text-cyan-600 cursor-pointer duration-200'>Logout</div>
                  </div>
                )}
              </div>
            ):(
              <div className = 'flex items-center gap-2'>
              <Link href={'/auth/register'} className={'bg-white px-2 py-1 text-black rounded-md mx-2 border border-cyan-500'}>Register</Link>
              <Link href={'/auth/login'} className={'bg-white px-2 py-1 text-black rounded-md mx-2 border border-cyan-500'}>Login</Link>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default NavBar
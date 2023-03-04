import React from 'react'
import  style  from '@/styles/Layout_main/NavBar_Main.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
function NavBar() {
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
            <Link href={'/auth/register'} className={'bg-white px-2 py-1 text-black rounded-md mx-2 border border-cyan-500'}>Register</Link>
            <Link href={'/auth/login'} className={'bg-white px-2 py-1 text-black rounded-md mx-2 border border-cyan-500'}>Login</Link>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default NavBar
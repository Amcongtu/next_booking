import React from 'react'
import  style  from '@/styles/Layout_main/NavBar_Main.module.css';
import Link from 'next/link';

function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.container}>
        <span className={`${style.logo} text-[30px] font-bold`}>Bookingapp</span>
        <div className={style.navIteams}>
          <Link href={'/auth/register'} className={style.navButton}>Register</Link>
          <Link href={'/auth/login'} className={style.navButton}>Login</Link>
        </div>
      </div>
    </div>
    
  )
}

export default NavBar
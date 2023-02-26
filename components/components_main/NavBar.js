import React from 'react'
import  style  from '@/styles/Layout_main/NavBar_Main.module.css';

function NavBar() {
  return (
    <div className={style.navBar}>
      <div className={style.container}>
        <span className={style.logo}>Booking app</span>
        <div className={style.navIteams}>
          <button className={style.navButton}>Register</button>
          <button className={style.navButton}>Login</button>
        </div>
      </div>
    </div>
    
  )
}

export default NavBar
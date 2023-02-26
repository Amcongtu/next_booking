import React from 'react'
import Footer from '../components_main/Footer'
import  style  from '@/styles/Layout_main/Layout.module.css';
import NavBar from '../components_main/NavBar';
import Header from '../components_main/Header';

function Layout({children}) {
  return (
    <div className={style.container}>
         <NavBar />
         <Header />
         {children}
         <Footer/>
    </div>
  )
}

export default Layout
import React from 'react'
import Footer from '../components_main/Footer'
import style  from '@/styles/Layout_main/Layout.module.css';
import NavBar from '../components_main/NavBar';
import Header from '../components_main/Header';
import Head from 'next/head';
import Loadingpagechange from '../components_main/Loadingpagechange';
import Scrolltotop from '../components_main/Scrolltotop';
import Lazyloading from '@/components/components_main/Lazyloading';
import { useSelector } from 'react-redux';
import { userSelect } from '@/redux/reducers/userSlice';
function Layout({children}) {
  const user = useSelector(userSelect)
  return (
    <div className={style.container}>
       <Head>
        <title>BookingApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="description" content="Booking app" />
      </Head>
         <NavBar />
         <Header list = {false}/>
         {children}
         <Footer/>
         <Loadingpagechange/>
         <Scrolltotop/>
         {user.loading && <Lazyloading heading = {'Logout...'}/>}
    </div>
  )
}

export default Layout
import React, { useEffect, useState } from 'react';
import Router from 'next/router';
function Loadingpagechange(props) {
    const [toggle,settoggle] = useState(false)
    useEffect(()=>{
        Router.events.on('routeChangeStart',()=>{settoggle(true)})
        Router.events.on('routeChangeComplete',()=>{settoggle(false)})
    },[])
    return (
        <div className={`fixed top-0 right-0 left-0 ${toggle ? 'block' :'hidden'} animate-loadingpagechange bg-red-500 h-[5px]`}>
        </div>
    );
}

export default Loadingpagechange;
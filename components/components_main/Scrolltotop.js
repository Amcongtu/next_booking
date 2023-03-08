import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
function Scrolltotop(props) {
    const [toggle, settoggle] = useState(false)
    useEffect(()=>{
        const handle = ()=>{
            window.scrollY > 200 ? settoggle(true): settoggle(false)
        }
        window.addEventListener('scroll',handle)
        return ()=>window.removeEventListener('scroll',handle)
    })
    const handletotop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className={`fixed bottom-10 right-10 bg-white p-2 rounded-full ${toggle ? 'block': 'hidden'} text-[20px] w-[50px] h-[50px] flex items-center justify-center z-1 shadow-md shadow-gray-700 cursor-pointer active:scale-90 duration-200 animate-bounce `} onClick={handletotop}>
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
    );
}

export default Scrolltotop;
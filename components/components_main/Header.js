import React from 'react';
import style from  '@/styles/Layout_main/Header_Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.container}>

                <div className={style.headerList}>
                    <div className={`${style.headerListItem} ${style.active} `}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stay</span>
                    </div>
                    <div className={style.headerListItem}>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className={style.headerListItem}>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className={style.headerListItem}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className={style.headerListItem}>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <h1 className={`${style.headerTitle} text-[40px] font-[500] mt-3`}>A lifetime of discounts?   It's Genius.</h1>
                <p className={style.headerDesc}>Get rewarded for your travels - unclock instant savings of 10% or more with a free BookingApp account.</p>
                <button className={style.headerBtn}>Sign in / Register</button>
            </div>

        </div>
    );
}
export default Header;
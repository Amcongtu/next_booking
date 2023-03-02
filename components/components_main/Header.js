import React, { useState,useEffect}from 'react';
import style from  '@/styles/Layout_main/Header_Main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from 'react-date-range';
import {format} from "date-fns"
function Header({list}) {
    useEffect(()=>{
        const handleClickOutSide = ()=>{
            setIsOpenDate(false)
            setIsOpenOtions(false)
        }
        window.addEventListener('mousedown',handleClickOutSide)
        return ()=>window.removeEventListener('mousedown',handleClickOutSide)
    },[])
    const [isOpenDate, setIsOpenDate]=useState(false)
    const [isOpenOtions, setIsOpenOtions]=useState(false)
    const handleSetOpenDate = e=>{
        e.stopPropagation()
        setIsOpenDate(!isOpenDate)
        setIsOpenOtions(false)
    }
    const handleSetOpenOptions = e=>{
        e.stopPropagation()
        setIsOpenOtions(!isOpenOtions)
        setIsOpenDate(false)
    }
    const [date, setDate]= useState([{
        startDate: new Date(),
        endDate : new Date(),
        key:"selection"
    }])
    const [options, setOptions]= useState({
        adult: 1,
        children : 0,
        room:1
    })
    const handleOption = (name, operation)=>{
        setOptions((prev)=>{
            return{
            ...prev,[name]: operation === "i"? options[name]+1 : options[name]-1,
        }
        })
    }
    return (
        <div className={style.header}>
            <div className={`${style.container} ${!list? `${style.list_header}`:""}`}>
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
                {list  &&
                    <><h1 className={`${style.headerTitle} text-[40px] font-[500] mt-3`}>A lifetime of discounts?   It's Genius.</h1>
                <p className={style.headerDesc}>Get rewarded for your travels - unclock instant savings of 10% or more with a free BookingApp account.</p>
                <button className={`${style.headerBtn}`}>Sign in / Register</button>
                <div className={style.headerSearch}>-
                    <div className={style.headerSearchItem}>
                        <FontAwesomeIcon icon={faBed} className={style.headerIcon} />
                        <input type="text" placeholder='Where are you going?' className={`${style.headerSearchInput}  text-gray-400`} />
                    </div>
                    <div className={style.headerSearchItem}>
                        <FontAwesomeIcon onClick={()=>setIsOpenDate(!isOpenDate)} icon={faCalendarDays} className={`${style.headerIcon} cursor-pointer pr-[8px] mr-[-6px]`} />
                       <span  onMouseDown={e=>handleSetOpenDate(e)}  className={`${style.headerSearchText} cursor-pointer select-none`}>{format(date[0].startDate,"MM/dd/yyy")} to {format(date[0].endDate,"MM/dd/yyy")} </span>
                       {isOpenDate && <div onMouseDown={e=>e.stopPropagation()} className={`${style.date} z-100`}><DateRange editableDateInputs={true}   onChange={item =>setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date}
                       /></div>}
                    </div>
                    <div className={style.headerSearchItem}>
                        <FontAwesomeIcon onMouseDown={e=>handleSetOpenOptions(e)} icon={faPerson} className={`${style.headerIcon} cursor-pointer p-[12px] mr-[-10px]`} />
                       <span  onMouseDown={e=>handleSetOpenOptions(e)}  className={`${style.headerSearchText} select-none cursor-pointer py-[12px]`}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                       {isOpenOtions  &&<div className={style.options}  onMouseDown={e=>e.stopPropagation()}>
                            <div className={style.optionItem}>
                                <span className={style.optionText}>Adult</span>
                                <div className={style.optionCounter}>
                                    <button 
                                    disabled = {options.adult<=1}
                                    className={style.optionCounterButton} 
                                    onClick={()=>handleOption("adult","d")}
                                    >
                                        -
                                    </button>
                                    <span className={style.optionCounterNumber}>{options.adult}</span>
                                    <button className={style.optionCounterButton} onClick={()=>handleOption("adult","i")}>+</button>
                                </div>
                            </div>
                            <div className={style.optionItem}>
                                <span className={style.optionText}>Children</span>
                                <div className={style.optionCounter}>
                                    <button 
                                    disabled = {options.children<=0}
                                    className={style.optionCounterButton} 
                                    onClick={()=>handleOption("children","d")}
                                    >
                                        -
                                    </button>
                                    <span className={style.optionCounterNumber}>{options.children}</span>
                                    <button 
                                    className={style.optionCounterButton}  
                                    onClick={()=>handleOption("children","i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className={style.optionItem}>
                                <span className={style.optionText}>Room</span>
                                <div className={style.optionCounter}>
                                    <button 
                                    disabled = {options.room<=1}
                                    className={style.optionCounterButton} 
                                    onClick={()=>handleOption("room","d")}
                                    >
                                        -
                                    </button>
                                    <span className={style.optionCounterNumber}>{options.room}</span>
                                    <button 
                                    className={style.optionCounterButton} 
                                    onClick={()=>handleOption("room","i")}
                                    >
                                        +
                                    </button>
                                </div>

                            </div>
                       </div>
                      }
                    </div>
                    <div className={style.headerSearchItem}>
                        <button className={style.headerBtn}>Search</button>
                    </div>
                </div>
                </>}
                
            </div>

        </div>
    );
}
export default Header;
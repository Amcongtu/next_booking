import React, { useEffect, useState } from 'react';
import List from '@/components/Layouts/List'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import CardHotel from '@/components/components_main/CardHotel';
import {v4 as uuidv4} from 'uuid'
import EmailList from '@/components/components_main/EmailList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
function Hotels(props) {
    const [date,setDate] = useState([{startDate: new Date(),endDate: new Date(),key: 'selection'}])
    const [open,setOpen] = useState(false)
    const handleSetOpen = e=>{
        e.stopPropagation()
        setOpen(!open)
    }
    useEffect(()=>{
        const handleClickOutSide = ()=>{
            setOpen(false)
        }
        window.addEventListener('mousedown',handleClickOutSide)
        return ()=>window.removeEventListener('mousedown',handleClickOutSide)
    },[])
    const fakeProduct = {
        image: 'https://empire-s3-production.bobvila.com/pages/538/original/Bedroom.jpg?1310503752',
        title: 'Tower Sheet Aparment',
        title_address: 'Xuan Huong lake,Da Lat',
        intro_address: '400m from center',
        tag: 'Sustainable Tourism Accommodation',
        sub: 'Studio apartment air conditioning',
        desc_room: 'description room',
        desc: 'Located in Da Lat, 500 meters from Xuan Huong Lake, Dalat Wind Hotel is a 2-star hotel with a 24-hour front desk, shared lounge, free WiFi and free private parking.',
        service: 'Free cancellation',
        price: '112',
        starts: 3,
        evalute: 'Good',
        evalute_core: '8.9',
        evalute_count: '266',
    }
    return (
       <div className='mt-4'>
            <div className="root_container">
                <div className='grid grid-cols-4 gap-2'>
                    <div className=' p-2 rounded-md flex flex-col gap-4 h-fit sticky top-4 bg-[#ffb700]'>
                        <div className='font-bold text-[24px]'>Search</div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[14px]  whitespace-nowrap' htmlFor="searchname">Destination</label>
                            <input type="search" name='searchname' spellCheck={false} className=' rounded-sm border focus-within:border-black focus-visible:outline-none px-2' />
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                            <div>Check in date</div>
                            <span className={`border cursor-pointer ${open && 'border border-black'} rounded-sm px-2  flex items-center justify-center gap-2 bg-white`}
                                onMouseDown={e=>handleSetOpen(e)}
                            >
                                {format(date[0].startDate,"MM/dd/yyy")} to {format(date[0].endDate,"MM/dd/yyy")}
                                 <FontAwesomeIcon icon={faCalendar}/>
                            </span>
                            {open && (
                                <div  className=' absolute top-full left-0  rounded-md' onMouseDown={e=>e.stopPropagation()}>
                                    <DateRange 
                                        editableDateInputs={true} 
                                        onChange={item =>setDate([item.selection])} 
                                        moveRangeOnFirstSelection={false} 
                                        ranges={date}
                                    />
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div>Options</div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-between'>
                                    <label className='text-[14px] whitespace-nowrap' htmlFor="minprice">Min price (per night)</label>
                                    <input type="number" className=' pl-1 w-[80px]' min={1} name='minprice' />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <label className='text-[14px] whitespace-nowrap' htmlFor="maxprice">Max price (per night)</label>
                                    <input type="number" className=' pl-1 w-[80px]' min={1} name='maxprice' />
                                </div>
                                <div className='flex items-center justify-between'>   
                                    <label className='text-[14px] whitespace-nowrap' htmlFor="adult">Adult</label>
                                    <input type="number" className=' pl-1 w-[80px]' min={1} name='adult' />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <label className='text-[14px] whitespace-nowrap' htmlFor="children">Children</label>
                                    <input type="number" className=' pl-1 w-[80px]' min={1} name='children' />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <label className='text-[14px] whitespace-nowrap' htmlFor="room">Room</label>
                                    <input type="number" className=' pl-1 w-[80px]' min={1} name='room' />
                                </div>
                            </div>
                        </div>
                        <div className='p-2 rounded-md bg-[#006ce4] text-white hover:bg-cyan-400 hover:text-black active:scale-90 duration-200 text-center uppercase cursor-pointer mt-auto'>
                            search
                        </div>
                    </div>
                    <div className='col-span-3 flex flex-col gap-4 h-[100vh] overflow-y-auto'>
                        {Array(10).fill().map(item=>{
                            return (
                                <CardHotel key={uuidv4()} product = {fakeProduct}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <EmailList/>
        </div>
    );
}
Hotels.getLayout = List
export default Hotels;
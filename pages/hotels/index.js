import React, { useEffect, useState } from 'react';
import List from '@/components/Layouts/List'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import CardHotel from '@/components/components_main/CardHotel';
import {v4 as uuidv4} from 'uuid'
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
        image: '',
        title: '',
        intro_address: '',
        tag: '',
        sub: '',
        desc_room: '',
        desc: '',
        service: '',
    }
    return (
       <div className='my-4'>
            <div className="root_container">
                <div className='grid grid-cols-4 gap-2'>
                    <div className='border border-cyan-500 p-2 rounded-md flex flex-col gap-4'>
                        <div className='font-bold text-[24px]'>Search</div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[14px] text-gray-500 whitespace-nowrap' htmlFor="searchname">Destination</label>
                            <input type="search" name='searchname' spellCheck={false} className='border border-gray-400 rounded-sm focus-within:border-cyan-500 focus-visible:outline-none px-2' />
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                            <div>Check in date</div>
                            <span className={`border cursor-pointer ${open ? 'border-cyan-500':'border-gray-400'} rounded-sm px-2 text-gray-400`}
                                onMouseDown={e=>handleSetOpen(e)}
                            >
                                {format(date[0].startDate,"MM/dd/yyy")} to {format(date[0].endDate,"MM/dd/yyy")}
                            </span>
                            {open && (
                                <div  className=' absolute top-full left-0 border border-gray-400 rounded-md' onMouseDown={e=>e.stopPropagation()}>
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
                                    <label className='text-[14px] text-gray-500 whitespace-nowrap' htmlFor="minprice">Min price (per night)</label>
                                    <input type="number" className='border border-gray-400 pl-1 w-[80px]' min={1} name='minprice' />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <label className='text-[14px] text-gray-500 whitespace-nowrap' htmlFor="maxprice">Max price (per night)</label>
                                    <input type="number" className='border border-gray-400 pl-1 w-[80px]' min={1} name='maxprice' />
                                </div>
                                <div className='flex items-center justify-between'>   
                                    <label className='text-[14px] text-gray-500 whitespace-nowrap' htmlFor="adult">Adult</label>
                                    <input type="number" className='border border-gray-400 pl-1 w-[80px]' min={1} name='adult' />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <label className='text-[14px] text-gray-500 whitespace-nowrap' htmlFor="children">Children</label>
                                    <input type="number" className='border border-gray-400 pl-1 w-[80px]' min={1} name='children' />
                                </div>
                                <div className='flex items-center justify-between'>
                                    <label className='text-[14px] text-gray-500 whitespace-nowrap' htmlFor="room">Room</label>
                                    <input type="number" className='border border-gray-400 pl-1 w-[80px]' min={1} name='room' />
                                </div>
                            </div>
                        </div>
                        <div className='p-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-400 hover:text-black active:scale-90 duration-200 text-center uppercase cursor-pointer'>
                            search
                        </div>
                    </div>
                    <div className='col-span-3'>
                        {Array(10).fill().map(item=>{
                            return (
                                <CardHotel key={uuidv4()} product = {fakeProduct}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
Hotels.getLayout = List
export default Hotels;
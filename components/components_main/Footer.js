import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
export class Footer extends Component {
  render() {
    return (
      <div>
        <div className='bg-[#003B95] text-white py-4 flex  flex-col gap-4 items-center justify-center '>
          <div className='p-1 border border-white rounded-md w-[300px] whitespace-nowrap text-center bg-[#003B95] hover:brightness-125 cursor-pointer text-[14px]'>
            Register your accommodation
          </div>
          <div className='border-b-[1px] border-white w-full'></div>
          <div className="root_container">
            <div className='flex items-center justify-between text-[14px]'>
              <div className='font-bold underline hover:bg-[#00224F] p-2 rounded-lg cursor-pointer'>Mobile mode</div>
              <div className='font-bold underline hover:bg-[#00224F] p-2 rounded-lg cursor-pointer'>Your account</div>
              <div className='font-bold underline hover:bg-[#00224F] p-2 rounded-lg cursor-pointer'>Change your book online</div>
              <div className='font-bold underline hover:bg-[#00224F] p-2 rounded-lg cursor-pointer'>Customer services</div>
              <div className='font-bold underline hover:bg-[#00224F] p-2 rounded-lg cursor-pointer'>Become a distribution partner</div>
              <div className='font-bold underline hover:bg-[#00224F] p-2 rounded-lg cursor-pointer'>Booking for business</div>
            </div>
          </div>
        </div>
        <div>
          <div className='root_container'>
            <div className="grid grid-cols-5 my-4">
              <div className='flex flex-col gap-4 text-gray-500 text-[12px]'>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Contries</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Regions</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Cities</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Districts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>AirPorts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Hotels</span>
              </div>  
              <div className='flex flex-col gap-4 text-gray-500 text-[12px]'>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Contries</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Regions</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Cities</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Districts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>AirPorts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Hotels</span>
              </div>  
              <div className='flex flex-col gap-4 text-gray-500 text-[12px]'>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Contries</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Regions</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Cities</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Districts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>AirPorts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Hotels</span>
              </div>  
              <div className='flex flex-col gap-4 text-gray-500 text-[12px]'>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Contries</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Regions</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Cities</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Districts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>AirPorts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Hotels</span>
              </div>  
              <div className='flex flex-col gap-4 text-gray-500 text-[12px]'>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Contries</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Regions</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Cities</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Districts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>AirPorts</span>
                <span className='hover:text-cyan-500 hover:translate-x-4 duration-200 cursor-pointer'>Hotels</span>
              </div>
            </div>
            <div className='flex flex-col gap-4 mb-4'>
              <div className=' self-center text-gray-500 hover:text-cyan-500 cursor-pointer hover:underline'>Login your account</div>
              <div className='text-[12px] text-gray-500'>Copyright <FontAwesomeIcon icon={faCopyright}/> 1996–2023 Booking.com™.</div>
              <div className=' self-center text-gray-500 text-[12px]'>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</div>
              <Image src={'/images/334877328_561898312582366_1099387110130379313_n.png'}
                width={600}
                height={80}
                className='w-[60%] object-cover self-center'
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Footer
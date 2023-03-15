import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush,faPlus,faStar,faThumbsUp, } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
function CardHotel({product}) {

    const getevalute = number=>{
        // return number > 5 ? 'Medium' : number > 8? 'Good' : number > 9 ? 'Very Good' : 'Bad'
        return number>=9?"Very good":number>=8?"Good":number>=5?"Medium":"Bad"
    }
    return (
        <div className='p-4 flex gap-4 border border-gray-300 rounded-md'>
           <Link href={`/hotel/${product._id}`} className=' block w-[200px] h-[200px] overflow-hidden rounded-md'> <img src={product.photos[0]} alt='hotel image' className=' w-full h-full object-cover hover:scale-105 duration-200 '/></Link>
            <div className='flex gap-2 justify-between flex-1'>
                <div className='flex flex-col gap-2 flex-1'>
                    <div className='flex items-center gap-2'>
                    <Link href={`/hotel/${product._id}`} className='text-[20px] font-bold text-[#006ce4] hover:underline'>{product.name}</Link>
                        <span className='flex items-center gap-1 text-yellow-400'>
                            {Array(Math.ceil(product.rate/2)).fill().map((item,index)=>{
                                return <FontAwesomeIcon icon={faStar} key={index}/>
                            })}
                        </span>
                        <div className='flex items-center gap-1 bg-yellow-400 p-1 rounded-sm text-white'>
                            <FontAwesomeIcon icon={faThumbsUp}/>
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-[#006ce4] underline text-[12px]'>{product.address}</span>
                        <span className='text-[#006ce4] underline text-[12px]'>See in to map</span>
                        <span className='text-gray-700 text-[12px]'>{product.city}</span>
                    </div>
                    <div className='flex items-center gap-2 text-[12px] text-gray-700'><FontAwesomeIcon icon ={faPaintBrush}/> <span>{product.title}</span></div>
                    <div className='text-[12px] text-gray-700'>{product.desc}</div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center self-end gap-4'>
                        <div className='flex flex-col text-right'>
                            <span className='font-bold text-[18px]'>
                                {getevalute(Number(product?.rate))}
                            </span>
                            <span className='text-[12px] text-gray-600'>{product?.rate} rating</span>
                        </div>
                        <div className='w-fit px-1 h-8 bg-[#006dbb] text-white flex items-center justify-center rounded-md rounded-bl-none'>{product.rate.toFixed(1)}</div>
                    </div>
                    <div className='p-2 bg-[#006ce4] text-white rounded-md text-center hover:bg-cyan-400 hover:text-black active:scale-90 duration-200 w-fit ml-auto text-[14px]'>See availability</div>
                </div>
            </div>
        </div>
    );
}

export default CardHotel;
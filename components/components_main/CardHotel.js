import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush,faPlus,faStar,faThumbsUp, } from '@fortawesome/free-solid-svg-icons';
function CardHotel({product}) {
    return (
        <div className='p-4 flex gap-2 border border-gray-300 rounded-md'>
            <img src={product.image} alt='hotel image' className='w-[200px] h-[200px] object-cover rounded-md'/>
            <div className='flex gap-2 justify-between flex-1'>
                <div className='flex flex-col gap-2 flex-1'>
                    <div className='flex items-center gap-2'>
                        <span className='text-[20px] font-bold text-[#006ce4]'>{product.title}</span>
                        <span className='flex items-center gap-1 text-yellow-400'>
                            {Array(product.starts).fill().map((item,index)=>{
                                return <FontAwesomeIcon icon={faStar} key={index}/>
                            })}
                        </span>
                        <div className='flex items-center gap-1 bg-yellow-400 p-1 rounded-sm text-white'>
                            <FontAwesomeIcon icon={faThumbsUp}/>
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-[#006ce4] underline text-[12px]'>{product.title_address}</span>
                        <span className='text-[#006ce4] underline text-[12px]'>See in to map</span>
                        <span className='text-gray-700 text-[12px]'>{product.intro_address}</span>
                    </div>
                    <div className='flex items-center gap-2 text-[12px] text-gray-700'><FontAwesomeIcon icon ={faPaintBrush}/> <span>{product.tag}</span></div>
                    <div className='text-[12px] text-gray-700'>{product.desc}</div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center self-end gap-4'>
                        <div className='flex flex-col text-right'>
                            <span className='font-bold text-[18px]'>
                                {product.evalute}
                            </span>
                            <span className='text-[12px] text-gray-600'>{product.evalute_count} evalute</span>
                        </div>
                        <div className='w-8 h-8 bg-[#006dbb] text-white flex items-center justify-center rounded-md rounded-bl-none'>{product.evalute_core}</div>
                    </div>
                    <div className='p-2 bg-[#006ce4] text-white rounded-md text-center hover:bg-cyan-400 hover:text-black active:scale-90 duration-200 w-fit ml-auto text-[14px]'>See availability</div>
                </div>
            </div>
        </div>
    );
}

export default CardHotel;
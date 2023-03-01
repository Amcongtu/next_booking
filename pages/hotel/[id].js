import React, { useState } from 'react';
import List from '@/components/Layouts/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {v4 as uuidv4} from 'uuid'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation,Scrollbar,A11y } from 'swiper';
import EmailList from '@/components/components_main/EmailList';
function Hotel(props) {
    const [open,setOpen] = useState(false)
    const [indeximg,setIndeximg] = useState(0)
    const handleSetOpen = ()=>{
        setOpen(!open)
    }
    const handleImage = index =>{
        setOpen(true)
        setIndeximg(index)
    }
    const images =[
        'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
        'https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000',
        'https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg',
        'https://acehotel.com/new-york/wp-content/uploads/sites/9/2021/06/NYC-1096x722.jpg',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/186088460.jpg?k=6e89285768b9ec7e92f8c7988fbc336d2e7011dbfcdc6f13b7805fa5d9cda76a&o=&hp=1',
        'https://www.seleqtionshotels.com/content/dam/seleqtions/Connaugth/TCPD_PremiumBedroom4_1235.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg'
    ]
    return (
        <div>
            <div className='root_container'>
                <div className='flex flex-col gap-4 my-4'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-2'>
                                <div className='text-[24px] font-bold'>Tower Sheet Aparments</div>
                                <div className='flex items-baseline gap-2 text-[12px] text-gray-400'>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <span>
                                        location
                                    </span>
                                </div>
                                <div className='text-cyan-600'>Exceilent location - 430m from center</div>
                                <div className='text-green-600'>Book a stay over $114 at this property and get a free airport taxi</div>
                            </div>
                            <div className='p-2 rounded-md text-white bg-cyan-500 h-[40px] flex items-center justify-center hover:bg-cyan-400 hover:text-black active:scale-90 duration-200 '>Reserver or Book Now!</div>
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
                            {images.map((item,index)=>{
                                return (
                                    <img src={item} alt={item} key={uuidv4()} className='w-full h-full object-cover' onClick={()=>handleImage(index)} />
                                )
                            })}
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-2'>
                        <div className='col-span-3 flex flex-col gap-4'>
                            <div className='text-[24px] font-bold'>Stay in the heart of Kranow</div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem quia explicabo temporibus reprehenderit ducimus ipsum, atque eaque facilis ex neque dolore, voluptas iure, mollitia incidunt blanditiis libero amet repellendus!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat explicabo exercitationem nemo est, nostrum obcaecati quo quae tenetur dignissimos, unde laborum sed eaque esse quibusdam doloremque sint similique? Quos, maxime?
                            </div>
                        </div>
                        <div className='p-4 flex flex-col gap-4 bg-violet-200 rounded-md'>
                            <div className=' font-medium text-[20px]'>Perfect for a 9-night stay!</div>
                            <div className='text-[12px]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati corporis est aspernatur,
                            </div>
                            <div>
                                <div className='text-[24px] font-bold'>$945 (9 nights)</div>
                            </div>
                            <div className='p-2 bg-violet-500 text-white uppercase rounded-md text-center hover:bg-violet-400 hover:text-black active:scale-90 cursor-pointer duration-200'>checkout now</div>
                        </div>
                    </div>
                </div>
                {open && (
                    <div className='fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center' onClick={handleSetOpen}>
                        <div className='w-[60%]' onClick={e=>e.stopPropagation()}>
                            <Swiper
                            // install Swiper modules
                            modules={[Navigation , Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            scrollbar={{ draggable: true }}
                            initialSlide={indeximg}
                            >   
                                {images.map(item=>{
                                    return (
                                        <SwiperSlide key={uuidv4()} className=''>
                                            <img src={item} alt={item} className='w-[100%] h-[500px] object-cover ' />
                                        </SwiperSlide>
                                    )
                                })}    
                            </Swiper>
                        </div>
                    </div>
                )}
            </div>
            <EmailList/>
        </div>
    );
}
Hotel.getLayout = List
export default Hotel;
import Layout from "@/components/Layouts/Layout"
import {v4 as uuidv4} from 'uuid'
import CardStay from "@/components/components_main/CardStay"
import CardIntro from "@/components/components_main/CardIntro"
import CardRoom from "@/components/components_main/CardRoom"
import EmailList from "@/components/components_main/EmailList"
import {typestays,intros} from "@/data"
import { Swiper,SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation,Scrollbar,A11y, Autoplay } from 'swiper';
import { useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from 'react-redux';
// import { hotelsselect, gethotelssuccess } from '@/redux/reducers/hotelsSilce';
import Link from "next/link"
// import { gethotelsrequest } from '@/redux/reducers/hotelsSilce';
import { gethotelssuccess } from '@/redux/reducers/hotelsSilce';
// import { gethotelsfailure } from '@/redux/reducers/hotelsSilce';
export default function Home({hotels,rooms}) {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(gethotelssuccess(hotels))
  },[])
  // const hotels = useSelector(hotelsselect)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  // useEffect(()=>{
  //   const gethotels = async()=>{
  //     dispatch(gethotelsrequest())
  //     try {
  //       const res =await fetch('/api/hotels')
  //       const data = await res.json()
  //       dispatch(gethotelssuccess(data))
  //     } catch (error) {
  //       dispatch(gethotelsfailure())
  //     }
  //   }
  //   gethotels()
  // },[])
  return (
    <div className="mt-10">
      <div className="root_container">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {intros.map(item=>{
              return (
                <CardIntro value={item} key={uuidv4()}/>
              )
            })}
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-[24px]">Browser by property type</div>
            <div className="relative">
              <Swiper
                modules={[Navigation , Scrollbar, A11y,Autoplay]}
                spaceBetween={16}
                slidesPerView={5}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  // Both prevEl & nextEl are null at render so this does not work
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
              >
                {rooms.map(item=>{
                  return (
                   <SwiperSlide key={uuidv4()}> <CardStay value={item} /></SwiperSlide>
                  )
                })}
              </Swiper>
              <div className=" absolute bottom-1/2 shadow-xl left-[-25px] w-[50px] h-[50px] bg-white rounded-full z-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 active:scale-90 duration-200" ref={navigationPrevRef}>
                <FontAwesomeIcon icon={faArrowLeft}/>
              </div>
              <div className=" absolute bottom-1/2 shadow-xl right-[-25px] w-[50px] h-[50px] bg-white rounded-full z-10 flex items-center justify-center cursor-pointer hover:bg-gray-200 active:scale-90 duration-200" ref={navigationNextRef}>
               <FontAwesomeIcon icon={faArrowRight}/>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[24px] font-bold">Homes guets love</div>
            <div className="grid grid-cols-4 gap-4 ">
               {/* {hotels.loading ? 'Loading...':(
                  hotels.hotels?.map((item,index)=>{
                    return (
                      index < 8 && <CardRoom key={uuidv4()} value={item} durationItem={`${(index+1)*150}`}/>
                    )
                  })
               )}  */}
               {!hotels ? 'Loading...':(
                  hotels?.map((item,index)=>{
                    return (
                      index < 8 && <CardRoom key={uuidv4()} value={item} durationItem={`${(index+1)*150}`}/>
                    )
                  })
               )} 
            </div>
            <Link href={"/hotels"}className="w-[200px] py-2 bg-yellow-500 rounded-md self-center uppercase text-center cursor-pointer mt-4 hover:bg-yellow-600 hover:text-white active:scale-90 duration-200 z-10">Show more</Link>
          </div>
        </div>
      </div>
      <EmailList/>
    </div>
    
  )
}
export const getServerSideProps = async()=>{
  const getHotels = async ()=>{
    const res = await fetch(`${process.env.SERVER}/api/hotels`)
    return res.json()
  }
  const getrooms = async()=>{
    const res = await fetch(`${process.env.SERVER}/api/rooms`)
    return res.json()
  }
  const hotels = await getHotels()
  const rooms = await getrooms()
  return {
    props: {
      hotels,
      rooms,
    }
  }
}
Home.getLayout = Layout

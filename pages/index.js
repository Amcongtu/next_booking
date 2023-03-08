import Layout from "@/components/Layouts/Layout"
import {v4 as uuidv4} from 'uuid'
import CardStay from "@/components/components_main/CardStay"
import CardIntro from "@/components/components_main/CardIntro"
import CardRoom from "@/components/components_main/CardRoom"
import EmailList from "@/components/components_main/EmailList"
import {typestays,intros, products} from "@/data"
import { Swiper,SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation,Scrollbar,A11y, Autoplay } from 'swiper';
import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Cookies from "js-cookie"
import { getCookieParser } from "next/dist/server/api-utils"
export default function Home() {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  console.log(Cookies.get('access_token'))
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
                {typestays.map(item=>{
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
              {products.map((item,index)=>{
                return (
                  <CardRoom key={uuidv4()} value={item} durationItem={`${(index+1)*150}`}/>
                )
              })}
            </div>
            <div className="w-[200px] py-2 bg-yellow-500 rounded-md self-center uppercase text-center cursor-pointer mt-4 hover:bg-yellow-600 hover:text-white active:scale-90 duration-200 z-10">Show more</div>
          </div>
        </div>
      </div>
      <EmailList/>
    </div>
    
  )
}

Home.getLayout = Layout

import Layout from "@/components/Layouts/Layout"
import {v4 as uuidv4} from 'uuid'
import CardStay from "@/components/components_main/CardStay"
import CardIntro from "@/components/components_main/CardIntro"
import CardRoom from "@/components/components_main/CardRoom"
import EmailList from "@/components/components_main/EmailList"
export default function Home() {
  const intros = [
    {
      image: 'https://www.urlaubsguru.de/wp-content/uploads/2015/01/dublin-city-skyline-istock_000079625065_large-2.jpg',
      title: 'Dublin',
      count: '123',
    },
    {
      image: 'https://housely.com/wp-content/uploads/2016/07/Reno-NV.png',
      title: 'Reno',
      count: '123',
    },
    {
      image: 'https://s25562.pcdn.co/wp-content/uploads/2019/12/TOTW-Austin-thumb.jpg',
      title: 'Austin',
      count: '123',
    }
  ]
  const typestays = [
    {
      image: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768',
      title:'Hotel',
      count: '334'
    },
    {
      image: 'https://static.businessinsider.com/image/562a8e8d9dd7cc16008c453f/image.jpg',
      title:'Apartments',
      count: '123'
    },
    {
      image: 'https://cdn.audleytravel.com/-/-/79/346841-la-residence-hotel--spa-hue.jpg',
      title:'Resorts',
      count: '334'
    },
    {
      image: 'https://www.traveldailymedia.com/assets/2020/12/Nobu_Hotel_London_Portman_Square_Exterior_Jack_Hardy_2020-1-scaled-e1607075623444.jpg',
      title:'Villas',
      count: '334'
    },
    {
      image: 'https://mainlymiles.com/wp-content/uploads/2020/08/Hilton-Singapore-Pool.jpg',
      title:'Cabins',
      count: '334'
    },
  ]
  const product = {
    image: 'https://images.rosewoodhotels.com/is/image/rwhg/hi-hgv-26330925-rhgmodelbedroom-1',
    title: 'Comfort Suites Airport',
    location: 'Austin',
    start_price: '345',
    rate: '9.6',
    status: 'Exceptional'
  }
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
            <div className="grid grid-cols-5 gap-4">
              {typestays.map(item=>{
                return (
                  <CardStay value={item} key={uuidv4()}/>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-[24px] font-bold">Homes guets love</div>
            <div className="grid grid-cols-4 gap-4">
              {Array(8).fill().map(item=>{
                return (
                  <CardRoom key={uuidv4()} value={product}/>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <EmailList/>
    </div>
    
  )
}

Home.getLayout = Layout

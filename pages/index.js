import Layout from "@/components/Layouts/Layout"
import {v4 as uuidv4} from 'uuid'
import CardStay from "@/components/components_main/CardStay"
import CardIntro from "@/components/components_main/CardIntro"
import CardRoom from "@/components/components_main/CardRoom"
import EmailList from "@/components/components_main/EmailList"
import {typestays,intros, products} from "@/data"
export default function Home() {
  
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
              {products.map(item=>{
                return (
                  <CardRoom key={uuidv4()} value={item}/>
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

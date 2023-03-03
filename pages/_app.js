import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
config.autoAddCss = false; 
export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: 'linear',
    })
  }, [])
  
  if (Component.getLayout){
  return(<Component.getLayout>
    <Component {...pageProps} />
  </Component.getLayout>)}
  return (
    <Component {...pageProps} />
  )
}

import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
export default function App({ Component, pageProps }) {
  if (Component.getLayout){
  return(<Component.getLayout>
    <Component {...pageProps} />
  </Component.getLayout>)}
  return (
    <Component {...pageProps} />
  )
}

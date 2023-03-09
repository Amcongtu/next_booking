import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Link from 'next/link'

import { useEffect } from 'react';
config.autoAddCss = false; 
import { store,persistor } from '@/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: 'linear',
    })
  }, [])
  if (Component.getLayout){

    return(
     <Provider store={store}>
        <PersistGate persistor = {persistor}>
          <Component.getLayout>
            <Component {...pageProps} />
          </Component.getLayout>
        </PersistGate>
     </Provider>
    )
  }
  return (
   <Provider store={store}> <PersistGate loading={null} persistor={persistor}><Component {...pageProps} /></PersistGate></Provider>
  )
}

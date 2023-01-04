import '../styles/globals.css'
import  {ToastContainer}  from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
import { Provider } from '../context';
import { useRouter } from "next/router";

import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
       />

<div dir={router.query?.locale == "fa" ? "rtl" : "ltr"}>
        <Component {...pageProps} />

      </div>


    </Provider>
  )
}

export default appWithTranslation(MyApp)

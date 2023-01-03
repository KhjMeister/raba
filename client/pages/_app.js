import '../styles/globals.css'
import  {ToastContainer}  from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
import { Provider } from '../context';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
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
       <Layout >
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp

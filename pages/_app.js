import '../src/app/globals.css'
import Home from './Home'
import { AppProvider } from '../src/app/AppContext'

function MyApp({ Component, pageProps }) {
  return (<AppProvider>
            <Component {...pageProps} />
        </AppProvider>
        )
}

export default MyApp

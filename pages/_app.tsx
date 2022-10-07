import '../styles/globals.css'
import '../styles/border.css'
import '../styles/Navbar.css'
import { store } from '../store'
import { Provider } from 'react-redux'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
}

export default MyApp

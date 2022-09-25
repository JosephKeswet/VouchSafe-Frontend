import '../styles/globals.css'
import '../styles/border.css'
import '../styles/Navbar.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

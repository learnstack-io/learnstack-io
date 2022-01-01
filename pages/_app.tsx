import '../styles/globals.css'
import '../styles/codeblock.css'
import '../styles/codetitle.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

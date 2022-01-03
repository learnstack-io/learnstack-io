import "../styles/globals.css"
import "../styles/codeblock.css"
import "../styles/codetitle.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Nav from "../components/Nav/Nav"
import Footer from "../components/Footer/Footer"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

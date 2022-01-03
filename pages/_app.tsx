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
        <title>Learn Stack</title>
        <meta name="keywords" content="Free Programming Courses" />
        <meta property="og:title" content="Learn Stack" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icons/logo.svg" />
        <meta property="og:description" content="Free and simple courses written by a developer who knows what's important and skips the rest." />
        <meta name="description" content="Free and simple courses written by a developer who knows what's important and skips the rest." />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

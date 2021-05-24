import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js x Framer Motion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

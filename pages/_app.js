import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { AnimatePresence } from 'framer-motion'
import AnimatedLayout from '../components/AnimatedLayout'

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  return (
    <>
      <Head>
        <title>Next.js x Framer Motion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed top-0 z-50">
        <Header />
        <Navigation />
      </div>
      <AnimatePresence
        exitBeforeEnter // finish exit animations before new entry
        initial={false} // don't perform animations on first page load
        onExitComplete={() => window.scrollTo(0, 0)} // once exit animation has completed, scroll to top (Check NoScrollLink component)
      >
        {/* Need to add a key to the Component for Framer Motion to track it. Use pathname from useRouter as it should be unique for every page */}
        <AnimatedLayout key={pathname}>
          <Component {...pageProps} />
        </AnimatedLayout>
      </AnimatePresence>
    </>
  )
}

export default MyApp

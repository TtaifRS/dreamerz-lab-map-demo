import Footer from '@/layouts/Footer'
import Navbar from '@/layouts/navBar'
import '@/styles/globals.css'



import ThemeCustomization from '@/themes'

export default function App({ Component, pageProps }) {
  return (

    <ThemeCustomization>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeCustomization>

  )
}

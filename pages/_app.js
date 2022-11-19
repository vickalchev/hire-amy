import '../styles/globals.css'
import { Plus_Jakarta_Sans } from '@next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans();

function MyApp({ Component, pageProps }) {
  return (
  <main className={plusJakartaSans.className}>
    <Component {...pageProps} />
  </main>
  )
}

export default MyApp

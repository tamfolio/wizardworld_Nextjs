import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/home.css'
import '../styles/elixir.css'
import '../styles/spells.css'
import '../styles/wizards.css'
import '../styles/search.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

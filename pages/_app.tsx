import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { AppWrapper, Header } from './../components'

function NetLabel({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Header />
      <main className="px-4 sm:px-20 pb-6">
        <Component {...pageProps} />
      </main>
    </AppWrapper>
  )
}

export default NetLabel

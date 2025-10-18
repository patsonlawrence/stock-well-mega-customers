// pages/_app.tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="icon" href="/faviconv1.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d6efd" />
        <link rel="apple-touch-icon" href="/faviconv1.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp

// pages/_app.tsx
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((reg) => console.log('Service Worker registered:', reg))
          .catch((err) => console.error('Service Worker registration failed:', err))
      })
    }
  }, [])

  return (
    <>
      <Head>
        <link rel="icon" href="/faviconv1.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d6efd" />
        <link rel="apple-touch-icon" href="/faviconv1.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

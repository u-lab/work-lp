import { config } from '@fortawesome/fontawesome-svg-core'
import { AppProps } from 'next/app'
// import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React from 'react'
// import * as gtag from '@/src/lib/utils/Gtag'

import 'swiper/swiper-bundle.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/src/styles/index.scss'

config.autoAddCss = false

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // const router = useRouter()

  // Google Analytics
  // useEffect(() => {
  //   if (!gtag.existsGaId) {
  //     return
  //   }

  //   const handleRouteChange = (path) => {
  //     gtag.pageview(path)
  //   }

  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   // Use `window.gtag` if you initialized Google Analytics as this example:
//   // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
//   window.gtag('event', metric.name, {
//     event_category:
//       metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
//     value: String(
//       Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value)
//     ), // values must be integers
//     event_label: metric.id, // id unique to current page load
//     non_interaction: true, // avoids affecting bounce rate.
//   })
// }

export default MyApp

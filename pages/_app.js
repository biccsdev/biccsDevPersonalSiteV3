import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.biccs.tech/',
          siteName: 'biccs.tech',
          title: 'biccs portfolio',
          description: 'In this site I share my love for technology'
        }}
        twitter={{
          handle: '@itsbiccs',
          site: '@itsbiccs',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

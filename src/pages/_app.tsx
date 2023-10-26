import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import { createStore, StateMachineProvider } from 'little-state-machine'

import Layout from 'src/components/organisms/Layout'

import { BGMenuProvider } from '~/context/BGMenuContext'
import { globalStyles } from '~/styles/styles'
import { IsProd } from '~/constants/environment'
import createEmotionCache from '~/utils/createEmotionCache'
import { setActive } from '~/utils/setActive'

import { Gtag } from '~/libs/gtag'
import { Pardot } from '~/libs/pardot'
import { FBID, PixelCode } from '~/libs/facebook'
import { TWID, TwitterTag } from '~/libs/twitter'
import { LNID, LINEBaseCode } from '~/libs/line'
import { TTID, TiktokPixelCode } from '~/libs/tiktok'

import { theme } from '~/styles/theme'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    createStore(
      {
        channel: '',
        area: '',
        kyositsu: '',
        sei: '',
        mei: '',
        seikana: '',
        meikana: '',
        sex: '',
        date: '',
        birth_year: '',
        birth_month: '',
        birth_date: '',
        grade: '',
        postal_code: '',
        region: '',
        locality: '',
        street_address: '',
        extended_address: '',
        email: '',
        phone: '',
        school: '',
        comment: '',
      },
      { name: 'data', storageType: window.localStorage }
    )

    setActive()
  }, [])

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <link
            rel='shortcut icon'
            href={
              IsProd
                ? '/lp/kyotsutest-joho2311/image/favicon.ico'
                : '/image/favicon.ico'
            }
          />
          <link
            rel='apple-touch-icon'
            href={
              IsProd
                ? '/lp/kyotsutest-joho2311/image/apple-touch-icon.png'
                : '/image/apple-touch-icon.png'
            }
          />
          <link
            rel='icon'
            type='image/png'
            href={
              IsProd
                ? '/lp/kyotsutest-joho2311/image/android-chrome-192x192.png'
                : '/image/android-chrome-192x192.png'
            }
          />
        </Head>
        <Gtag />
        <Pardot />
        {/* <PixelCode id={FBID} /> */}
        {/* <LINEBaseCode id={LNID} /> */}
        <ThemeProvider theme={theme}>
          <StateMachineProvider>
            <BGMenuProvider>
              <Layout>
                {globalStyles}
                <Component {...pageProps} />
              </Layout>
            </BGMenuProvider>
          </StateMachineProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default MyApp

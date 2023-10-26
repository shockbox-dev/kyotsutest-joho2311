import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { RenderPageResult } from 'next/dist/shared/lib/utils'

import createEmotionServer from '@emotion/server/create-instance'

import createEmotionCache from '~/utils/createEmotionCache'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* Font Awesome CDN */}
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.15.4/css/all.css'
            integrity='sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm'
            crossOrigin='anonymous'
          />
          {/* End Font Awesome CDN */}
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;500;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage
  const cache = createEmotionCache()

  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
    originalRenderPage({
      enhanceApp:
        (App: any) =>
        (props): JSX.Element =>
          <App emotionCache={cache} {...props} />,
    })

  const initialProps = await Document.getInitialProps(ctx)

  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map(style => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  }
}

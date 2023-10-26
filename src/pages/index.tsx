import { NextPage } from 'next'
import Head from 'next/head'

import HomeTemplate from '~/components/templates/HomeTemplate'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>東進の共通テスト「情報Ⅰ」体験受験 | MSGnetwork</title>
        <meta
          name='description'
          content='MSGnetwork・東進衛星予備校＜神奈川・埼玉・愛知・岐阜＞では共通テスト「情報Ⅰ」体験受験の申し込みを受付中です！受験料はなんと無料！東進の一流講師陣の授業で学力をアップしよう！'
        />
        <meta
          property='og:url'
          content='https://t-msg.co.jp/lp/kyotsutest-joho2311/'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='【参加無料】共通テスト「情報Ⅰ」体験受験申込受付中！'
        />
        <meta
          property='og:description'
          content='MSGnetwork・東進衛星予備校では共通テスト「情報Ⅰ」体験受験の申し込みを受付中です！受験料はなんと無料！東進の一流講師陣の授業で学力をアップしよう！'
        />
        <meta property='og:site_name' content='MSGnetwork・東進衛星予備校' />
        <meta
          property='og:image'
          content='https://t-msg.co.jp/lp/kyotsutest-joho2311/image/ogp.png'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:url'
          content='https://t-msg.co.jp/lp/kyotsutest-joho2311/'
        />
        <meta
          name='twitter:title'
          content='【参加無料】共通テスト「情報Ⅰ」体験受験申込受付中！'
        />
        <meta
          name='twitter:description'
          content='MSGnetwork・東進衛星予備校では共通テスト「情報Ⅰ」体験受験の申し込みを受付中です！受験料はなんと無料！東進の一流講師陣の授業で学力をアップしよう！'
        />
        <meta
          name='twitter:image'
          content='https://t-msg.co.jp/lp/kyotsutest-joho2311/image/ogp.png'
        />
        <link
          rel='canonical'
          href='https://t-msg.co.jp/lp/kyotsutest-joho2311/'
        />
      </Head>
      <HomeTemplate />
    </>
  )
}

export default Home

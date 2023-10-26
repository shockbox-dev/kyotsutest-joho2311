import { NextPage } from 'next'
import Head from 'next/head'

import { AW, CVid } from '~/libs/gtag'

import ThanksTemplate from '~/components/templates/Thankstemplate'

const ThanksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>お申込ありがとうございました | MSGnetwork東進衛星予備校</title>
        <meta
          name='description'
          content='共通テスト「情報Ⅰ」体験受験にお申し込みいただきありがとうございました。'
        />
      </Head>
      <ThanksTemplate />
    </>
  )
}

export default ThanksPage

import { useEffect } from 'react'
import { css } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { SectionTitle } from 'src/components/atoms/SectionTitle'
import { FlowsBlock } from 'src/components/atoms/FlowsBlock'

import { returnFeed } from '~/utils/returnFeed'

type Props = {
  color: string
  number: number
  flow: string
  title: string
  description: string
}

const colorProps: Array<Props> = [
  {
    color: '#06a0cf',
    number: 1,
    flow: '申込',
    title: '申込フォームよりお申込',
    description:
      'HPの「共通テスト「情報Ⅰ」体験模試に申し込む」から、必要事項をご入力ください。校舎スタッフよりご連絡をさせていただきます。',
  },
  {
    color: '#068fcf',
    number: 2,
    flow: '初回来校',
    title: '学習カウンセリング\n体験のスケジュール決め',
    description:
      '現在の学習状況や志望校などについてカウンセリングを行います。どのくらいのペースで受験を進めていくかスケジュールを決めていきます。',
  },
  {
    color: '#167296',
    number: 3,
    flow: '学力診断',
    title: '学力診断テストの受験',
    description:
      '東進の講座は学力によってレベルが細かく分かれています。最適な講座を受験していただくために「学力診断テスト」を受験していただき、第一志望校合格に必要な学習について受験のプロの目からご提案をさせていただきます。',
  },
  {
    color: '#165c96',
    number: 4,
    flow: '体験',
    title: '体験授業',
    description:
      '実際に各科目の映像授業を受験していただき、ご提案させていただいた講座が自分のレベルに合っているかどうかを体験していただきます。',
  },
  {
    color: '#164d96',
    number: 5,
    flow: 'イベント',
    title: '大学入試説明会・進路説明会など',
    description:
      'MSGnetwork東進衛星予備校では、定期的に合格指導イベントを開催しております。最新の共通テストを踏まえた研究会や大学入試についての説明会、東進の一流講師陣による公開授業など役に立つイベントばかりです。ぜひご参加ください。',
  },
  {
    color: '#0e3296',
    number: 6,
    flow: '受験',
    title: '共通テスト「情報Ⅰ」体験受験',
    description:
      '東進の一流講師陣の授業を無料で受験できます。スマートフォンアプリを活用した「高速基礎マスター講座」も無料で利用できますので、英単語の学習なども併行していきましょう。',
  },
]

const FlowTemplate: React.FC = () => {
  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <>
      <Box css={styles.wrapper} component='section' id='flow'>
        <Box component='section' css={styles.container}>
          <Box css={styles.head} className='title_fl'>
            <SectionTitle title='受験の流れ' subtitle='FLOW' />
          </Box>
          <Typography
            variant='h2'
            component='h2'
            css={styles.description}
            className='description_fl'>
            共通テスト「情報Ⅰ」体験模試の
            <br />
            <span css={styles.emphasis}>お申し込みから受験までの流れ</span>を
            <br />
            ご説明いたします
          </Typography>
          <Box css={styles.flow_container}>
            {colorProps.map(item => (
              <FlowsBlock
                key={item.number}
                color={item.color}
                number={item.number}
                flow={item.flow}
                title={returnFeed(item.title)}
                description={returnFeed(item.description)}
                classname={`flow_${item.number}`}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    width: 100vw;
    background-color: white;
  `,
  container: css`
    max-width: 1180px;
    margin: 0 auto;
    padding: 40px 0 0;
  `,
  head: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 40px 0 30px;
    @media (min-width: 960px) {
      padding: 100px 0 30px;
    }
  `,
  description: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.7rem;
    text-align: center;
    @media (min-width: 960px) {
      font-size: 1.3rem;
      padding: 30px 0;
      line-height: 2.5rem;
    }
  `,
  emphasis: css`
    color: #dd1212;
  `,
  flow_container: css`
    padding: 40px 0 40px;
  `,
}

const setAnimation = () => {
  gsap.from('.title_fl', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.title_fl',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('.description_fl', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.description_fl',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('.flow_1', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.flow_1',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('.flow_2', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.flow_2',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('.flow_3', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.flow_3',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('.flow_4', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.flow_4',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('.flow_5', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.flow_5',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
  gsap.from('.flow_6', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.flow_6',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
}

export default FlowTemplate

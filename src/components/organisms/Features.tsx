import { useEffect } from 'react'
import { css } from '@emotion/react'
import { Box } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import FeatureCard from 'src/components/molecules/FeatureCard'
import { SectionTitle } from 'src/components/atoms/SectionTitle'
import { CVButton } from '../atoms/CVButton'

const Features = () => {
  const IsProd = process.env.NODE_ENV === 'production'

  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <section css={styles.wrapper} id='features'>
      <Box css={styles.container}>
        <Box css={styles.head} className='title_ft'>
          <SectionTitle
            title='共通テスト「情報Ⅰ」体験受験の特長'
            subtitle='FEATURES'
          />
        </Box>
        <Box component='ul' css={styles.list_container}>
          <li css={styles.listItem} id='featurecard1'>
            <FeatureCard
              index='1'
              title='東進が誇る一流講師陣による授業'
              description={
                <p>
                  東進では、
                  <span>
                    林修先生や安河内哲也先生などTVなどでもおなじみの実力講師陣
                  </span>
                  が、わかりやすくて面白い、そして成績の上がる授業をお届けします。また毎回の授業の後には
                  <span>「確認テスト」があり、合格しなければ先に進めない</span>
                  ので、学習内容がしっかりと身につきます。
                </p>
              }
              webp='/feature_01.webp'
              src='/feature_01.png'
            />
          </li>
          <li css={styles.listItem} id='featurecard2'>
            <FeatureCard
              index='2'
              title='部活・学校と両立できる学習システム'
              description={
                <p>
                  東進の授業は
                  <span>PCやタブレット、スマートフォンでの受験が可能！</span>
                  映像授業の特性を活かして、自分の受けたい時間帯に授業を受けることができるので、
                  <span>
                    部活や学校の勉強が忙しいという方でも無理なく両立して学習を進めることができます。
                  </span>
                </p>
              }
              webp='/feature_02.webp'
              src='/feature_02.png'
            />
          </li>
          <li css={styles.listItem} id='featurecard3'>
            <FeatureCard
              index='3'
              title='やるべきことがわかる合格指導'
              description={
                <p>
                  大学入試を知りつくした受験のプロが学習カウンセリングを行い、
                  <span>
                    あなたが第一志望校に合格するためにこれから何をすればいいのかをお伝えします！
                  </span>
                  ただ授業を受けるだけではなく
                  <span>
                    合格した先輩たちの学習ペースを知り、それを体験することができます。
                  </span>
                </p>
              }
              webp='/feature_03.webp'
              src='/feature_03.png'
            />
          </li>
          <li css={styles.listItem} id='featurecard4'>
            <FeatureCard
              index='4'
              title='英単語1800語を2週間でマスター！'
              description={
                <p>
                  PC・スマートフォンを活用したIT学習ツール、
                  <span>「高速基礎マスター講座」を無料で体験できます。</span>
                  共通テストレベルの英単語1800語をなんと
                  <span>2週間でマスターすることができます！</span>
                  英単語は英語学習の基本。共通テスト「情報Ⅰ」体験受験で大学受験のロケットスタートを切ろう！
                </p>
              }
              webp='/feature_04.webp'
              src='/feature_04.png'
            />
          </li>
        </Box>
        <Box css={styles.btn_container}>
          <CVButton
            url={IsProd ? '/lp/kyotsutest-joho2311/form' : '/form'}
            label='共通テスト「情報Ⅰ」体験受験に申し込む'
            // label='申し込みは終了いたしました'
            color='orange'
          />
        </Box>
      </Box>
    </section>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    width: 100vw;
    background: #fff url('image/noise.png') repeat;
  `,
  container: css`
    max-width: 1180px;
    margin: 0 auto;
  `,
  subtitle: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.7rem;
    text-align: center;
    @media (min-width: 960px) {
      font-size: 1.4rem;
      padding: 30px 0;
    }
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
  list_container: css`
    display: flex;
    flex-flow: column;
    padding: 50px 0 0;
    @media (min-width: 960px) {
      flex-flow: row wrap;
      justify-content: space-evenly;
      max-width: 1180px;
      margin: 0 auto;
    }
  `,
  listItem: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 100%;
    list-style: none;
    margin: 0 10vw 10vw;
    @media (min-width: 960px) {
      width: 40%;
      margin: 0;
    }
  `,
  btn_container: css`
    display: flex;
    justify-content: center;
    padding: 100px 0;
  `,
}

const setAnimation = () => {
  gsap.from('.title_ft', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.title_ft',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
  gsap.from('#featurecard1', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: '#featurecard1',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
  gsap.from('#featurecard2', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: '#featurecard2',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
  gsap.from('#featurecard3', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: '#featurecard3',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
  gsap.from('#featurecard4', {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
      trigger: '#featurecard4',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
}

export default Features

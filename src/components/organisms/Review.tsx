import { useEffect } from 'react'
import { css } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import ReviewCard from 'src/components/molecules/ReviewCard'
import { SectionTitle } from 'src/components/atoms/SectionTitle'
import { CVButton } from '../atoms/CVButton'

import { returnFeed } from 'src/utils/returnFeed'

const Review: React.FC = () => {
  const IsProd = process.env.NODE_ENV === 'production'

  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <section css={styles.wrapper} id='review'>
      <Box css={styles.container}>
        <Box css={styles.head} className='title'>
          <SectionTitle title='受験者の声' subtitle='REVIEW' />
        </Box>
        <Box>
          <Typography
            variant='body1'
            css={styles.subtitle}
            className='subtitle'>
            特別招待講習を受験した
            <br />
            先輩たちのインタビュー
          </Typography>
        </Box>
        <Box component='ul' css={styles.cardContainer}>
          <li id='reviewcard1'>
            <ReviewCard
              index='Case: 01'
              commentOne='１コマごとの確認テストで'
              commentTwo='理解が深まりました'
              src='image/review_01.jpg'
              profile={returnFeed('慶應義塾大学経済学部\n横浜緑ケ丘高校出身')}
              description={
                <p>
                  部活が忙しい中でも
                  <span>自分の好きな時間に授業を受けることができた</span>
                  ので無理なく進めることができました。また、1回1回の授業ごとにある
                  <span>
                    確認テスト（問題が毎回変わる！）で盲点が明らかになり
                  </span>
                  、丁寧に理解しながら進むことができました。また、学習履歴がデータで残るので、
                  <span>担任の先生がこまめにチェックしてくれます！</span>
                  今までの勉強方法の無駄や偏りを厳しく見直すことができたのも、東進の映像授業ならではでした！
                </p>
              }
            />
          </li>
          <li id='reviewcard2'>
            <ReviewCard
              index='Case: 02'
              commentOne='高速基礎マスター講座で'
              commentTwo='英単語を早めに覚えられました'
              src='image/review_02.jpg'
              profile={returnFeed('名古屋大学情報学部\n瑞陵高校出身')}
              description={
                <p>
                  私の一番のおススメは<span>『高速基礎マスター』</span>
                  です！
                  <span>
                    招待講習の期間中に共通テストレベルの英単語を全て覚えた
                  </span>
                  ことで、受験勉強がとてもスムーズに進みました。苦手だった数学も、志田晶先生が数学の考え方をわかりやすく説明してくれたため、
                  <span>定期テストでもいい成績を取れました。</span>
                  MSG東進では担任の先生も親身になって助言してくれます！
                  <span>
                    映像授業の進捗もしっかり管理されて、成績も伸びたので、とても感謝しています！
                  </span>
                </p>
              }
            />
          </li>
          <li id='reviewcard3'>
            <ReviewCard
              index='Case: 03'
              commentOne='合格へ向けた'
              commentTwo='学習計画を知ることができました'
              src='image/review_03.jpg'
              profile={returnFeed('名古屋大学法学部\n明和高校出身')}
              description={
                <p>
                  招待講習期間中に実施される説明会で、今、何をすべきかを教えてくれました！特に衝撃を受けたのは
                  <span>「合格者の学習ペース」</span>
                  でした！
                  <span>
                    大学受験の全範囲学習を早期に終わらせて、過去問に早めに取り掛かることで、ライバルに大きく差をつけることができます。
                  </span>
                  授業を受けるだけではなく、
                  <span>
                    合格へ向けた学習計画を一緒に考えてもらえたので、最短ルートで勉強を進めることができました。
                  </span>
                  皆さんも、合格目指して頑張って下さい！
                </p>
              }
            />
          </li>
        </Box>
        <Box>
          <Typography variant='body1' css={styles.subtitle} className='message'>
            共通テスト「情報Ⅰ」体験受験に参加して
            <br />
            合格した先輩たちに続こう！
          </Typography>
        </Box>
      </Box>
    </section>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    background: linear-gradient(
      rgba(255, 255, 255, 0.7) 0,
      rgba(255, 255, 255, 0.9) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    width: 100vw;
    padding-bottom: 100px;
  `,
  bg_top: css`
    position: absolute;
    z-index: 1;
    top: -100%;
    left: 0;
    height: 100vh;
    z-index: 10;
    object-fit: cover;
    object-position: center;
  `,
  container: css`
    max-width: 1180px;
    margin: 0 auto;
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
  subtitle: css`
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
  cardContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    flex-flow: column;
    padding: 50px 0 50px;
    padding-inline-start: 0;
    @media (min-width: 960px) {
      flex-flow: row;
      justify-content: space-around;
      padding: 50px 0 0;
    }
  `,
}

const setAnimation = () => {
  gsap.from('.title', {
    opacity: 0,
    y: 20,
    duration: 1,
    scrollTrigger: {
      trigger: '.title',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
  gsap.from('.subtitle', {
    opacity: 0,
    y: 20,
    duration: 1,
    scrollTrigger: {
      trigger: '.subtitle',
      start: 'top 100%',
      markers: false,
      once: false,
    },
  })
  gsap.from('#reviewcard1', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '#reviewcard1',
      start: 'top 60%',
      markers: false,
      once: false,
    },
  })
  gsap.from('#reviewcard2', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '#reviewcard2',
      start: 'top 60%',
      markers: false,
      once: false,
    },
  })
  gsap.from('#reviewcard3', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '#reviewcard3',
      start: 'top 60%',
      markers: false,
      once: false,
    },
  })
  gsap.from('.message', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.message',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
}

export default Review

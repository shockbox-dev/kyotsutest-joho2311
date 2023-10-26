import { useEffect } from 'react'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { IssueCard } from '~/components/molecules/IssueCard'
import Carousel from '../atoms/Carousel'

const Issues: React.FC = () => {
  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <section css={styles.wrapper} id='info'>
      <div css={styles.container}>
        <div css={styles.head} className='i_head'>
          <Typography component='h2' css={styles.question}>
            高校生、保護者のみなさん
            <br />
            <span>ご存知ですか？</span>
          </Typography>
          <Typography component='h1' css={styles.solution} className='solution'>
            <strong>現高２生</strong>から大学入学共通テストに
            <br />
            <span>「情報」が加わります</span>
          </Typography>
        </div>
        <ul css={styles.img_container}>
          <li className='i_list'>
            <IssueCard
              title='「情報Ⅰ」とは何か'
              src='concept.webp'
              quote=''
              subtitle='これからの社会で必要となる「情報」'
              description={
                <>
                  「情報」に関するリテラシーは、これからの社会で活躍するために必須のスキルとなりつつあります。
                  <span>
                    大学入試改革の一環として現高校２年生の世代からは共通テストにおいて「情報」が新設され、東京大学をはじめとする多くの国公立受験において必須科目とされています。
                  </span>
                </>
              }
              content={
                <>
                  <picture>
                    <source type='image/webp' srcSet='image/keyboard.webp' />
                    <source type='image/png' srcSet='image/keyboard.png' />
                    <img
                      src='image/keyboard.png'
                      alt=''
                      css={styles.image}
                      className='detail_01'
                    />
                  </picture>
                </>
              }
            />
          </li>
          <li className='i_list'>
            <IssueCard
              title='試作問題「情報Ⅰ」出題の概要'
              src='detail.webp'
              quote='大学入試センター試作問題より作成'
              subtitle='プログラミング対策が高得点の鍵'
              description={
                <>
                  2022年11月9日に大学入試センターが「令和7年度試験の問題作成の方向性および試作問題」を公開しました。公開された試作問題においては、
                  <span>
                    配点の約半分（46点/100点）が
                    「コンピュータとプログラミング」からの出題
                  </span>
                  となり、プログラミング対策の必要性が浮き彫りとなりました。
                </>
              }
              content={
                <>
                  <picture>
                    <source type='image/webp' srcSet='image/programming.webp' />
                    <source type='image/png' srcSet='image/programming.png' />
                    <img
                      src='image/programming.png'
                      alt=''
                      css={styles.image}
                      className='detail_01'
                    />
                  </picture>
                </>
              }
            />
          </li>
          <li className='i_list'>
            <IssueCard
              title='「コンピュータとプログラミング」の問題'
              src='sample.webp'
              quote='大学入試センター試作問題より作成'
              subtitle='プログラミング＝社会の問題を解決する手段'
              description={
                <>
                  試作問題では、「トイレの使用中表示についての問題」「待ち行列のシミュレーション」「釣り銭の枚数を計算するプログラム」など
                  <span>
                    いずれも身の回りのことを題材にした問題が出題されました。
                  </span>
                  プログラミング的思考を身に付けることで身の回りの問題を
                  合理的に解決する方法を考える習慣を身に付けさせたいという狙いが明らかになりました。
                </>
              }
              content={
                <>
                  <picture>
                    <source type='image/webp' srcSet='image/algorithm.webp' />
                    <source type='image/png' srcSet='image/algorithm.png' />
                    <img
                      src='image/algorithm.png'
                      alt=''
                      css={styles.image}
                      className='detail_02'
                    />
                  </picture>
                </>
              }
            />
          </li>
          {/* <li className='i_list'>
            <IssueCard
              title='試作問題「情報Ⅰ」第3問の概要'
              src='analytics.webp'
              quote='大学入試センター試作問題より作成'
              subtitle='プログラミング問題の正答率は低い'
              description={
                <>
                  東進独自のモニター調査によると、
                  <span>コードの穴埋め問題の正答率は30%前後</span>
                  でした。穴埋め問題では「配列」や「繰り返し」「条件分岐」など、プログラミングでコードを書くための重要な考え方が散りばめられており、他の問題が60%前後であることを考えると、受験生にとっても難問と言えそうです。
                </>
              }
              content={
                <>
                  <picture>
                    <source type='image/webp' srcSet='image/strategy.webp' />
                    <source type='image/png' srcSet='image/strategy.png' />
                    <img
                      src='image/strategy.png'
                      alt=''
                      css={styles.image}
                      className='detail_03'
                    />
                  </picture>
                </>
              }
            />
          </li> */}
        </ul>
        <div css={styles.head} className='i_head'>
          <Typography component='h2' css={styles.question}>
            そんな「情報Ⅰ」のテストを
            <br />
            <span>受けてみませんか？</span>
          </Typography>
          <Typography component='h1' css={styles.solution} className='solution'>
            「学校でまだ勉強していない…」
            <br />
            「情報がどんなものなのかまだわからない…」
            <br />
            <span>そんな方こそ！情報を知ることが大事です！</span>
          </Typography>
          <Typography component='h1' css={styles.solution} className='solution'>
            <strong>東進なら</strong>最新の大学入学共通テストを
            <br />
            <span>体験できます！</span>
          </Typography>
        </div>
      </div>
    </section>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    width: 100vw;
    background: linear-gradient(
      rgba(255, 255, 255, 1) 0,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.7) 100%
    );
  `,
  container: css`
    max-width: 1400px;
    margin: 0 auto;
  `,
  head: css`
    padding: 50px 0 0;
    @media (min-width: 960px) {
      padding: 80px 120px 50px;
      font-size: 2rem;
    }
  `,
  question: css`
    padding: 20px 0 0px;
    text-align: center;
    letter-spacing: 0;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 1.2rem;
    font-weight: 900;
    & span {
      font-size: 2rem;
      color: orange;
      letter-spacing: 0.1rem;
      border-bottom: 5px dotted #0d9bbd;
    }
    & span:before {
      content: '\201c';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
    }
    & span:after {
      content: '\201d';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
    }
    @media (min-width: 960px) {
      padding: 20px 50px 50px;
      font-size: 2rem;
      letter-spacing: 0.3rem;
      & span {
        font-size: 3.8rem;
        border-bottom: 8px dotted #0d9bbd;
      }
    }
  `,
  img_container: css`
    padding-bottom: 0px;
  `,
  solution: css`
    padding: 30px 0;
    font-weight: 900;
    font-size: 1rem;
    font-family: 'Noto sans JP', sans-serif;
    text-align: center;
    & * {
      font-family: 'Noto sans JP', sans-serif;
      font-weight: 900;
    }
    & strong {
      position: relative;
      color: #0d9bbe;
      font-size: 2rem;
      &:before {
        content: '';
        background-image: url('image/emphasis.png');
        background-repeat: no-repeat;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 164px;
        height: 148px;
        transform: translate(-60%, -60%) scale(0.3);
        -webkit-transform: translate(-60%, -60%) scale(0.2);
        @media (max-width: 960px) {
          top: -80px;
          left: -100px;
          transform: scale(0.2);
          -webkit-transform: scale(0.2);
        }
      }
    }
    & span {
      font-size: 1.5rem;
      background: linear-gradient(
        transparent 70%,
        rgba(255, 252, 107, 0.7) 50%
      );
    }
    @media (min-width: 960px) {
      font-size: 3rem;
      & strong {
        font-size: 3rem;
      }
      & span {
        font-size: 3rem;
      }
    }
  `,
  image: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (min-width: 960px) {
      width: 100%;
      height: 100%;
    }
  `,
}

const setAnimation = () => {
  gsap.from('.i_head', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.i_head',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
  gsap.from('.i_list', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.i_list',
      start: 'top 80%',
    },
    stagger: {
      each: 0.3,
    },
  })
  gsap.from('.solution', {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.solution',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
}

export default Issues

import { useEffect } from 'react'
import { css } from '@emotion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { ScrollDown } from '~/components/atoms/ScrollDown'
import { CVButton } from '../atoms/CVButton'

import { IsProd } from '~/constants/environment'

const Hero: React.FC = () => {
  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <section css={styles.wrapper} id='top'>
      <picture>
        <source
          type='image/webp'
          srcSet={
            IsProd
              ? 'https://t-msg.co.jp/lp/kyotsutest-joho2311/image/hero.webp'
              : 'image/hero.webp'
          }
        />
        <img
          src={
            IsProd
              ? 'https://t-msg.co.jp/lp/kyotsutest-joho2311/image/hero.jpg'
              : 'image/hero.jpg'
          }
          alt=''
          className='hero'
          css={styles.image}
        />
      </picture>
      <picture>
        <source
          srcSet='image/logo_s.webp'
          type='image/webp'
          css={styles.logo}
        />
        <img
          src='image/logo_s.png'
          alt='MSGnetwork東進衛星予備校'
          css={styles.logo}
        />
      </picture>
      <div css={styles.scrollDown} className='scroll'>
        <ScrollDown label='Scroll' link='concept' />
      </div>
      <img
        src={'image/info.svg'}
        alt='この「情報」を'
        css={styles.info}
        className='info'
      />
      <img
        src={'image/experience.svg'}
        alt='体感せよ。'
        className='experience'
        css={styles.experience}
      />
      <div css={styles.mainv_text}>
        <p css={styles.title} className='copy'>
          <span>東進だけ</span>の共通テスト「情報」体験模試
        </p>
        <ul css={styles.features}>
          <li css={styles.feature} className='feature'>
            <h2 css={styles.text}>
              <span>受験料無料</span>
            </h2>
          </li>
          <li css={styles.feature} className='feature'>
            <h2 css={styles.text}>
              <span>新共通テスト完全対応</span>
            </h2>
          </li>
          <li css={styles.feature} className='feature'>
            <h2 css={styles.text}>
              <span>解説授業も受講可能</span>
            </h2>
          </li>
        </ul>
        <div css={styles.btn_container} className='herobtn'>
          <CVButton
            url={IsProd ? '/lp/kyotsutest-joho2311/form' : '/form'}
            label='「情報Ⅰ」体験模試に申し込む'
            color='orange'
          />
        </div>
      </div>
    </section>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    visibility: hidden;
    width: 100vw;
    height: 100vh;
    min-height: 600px;
    @media (min-width: 960px) {
      height: 60vw;
      min-height: 800px;
    }
  `,
  image: css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    object-fit: cover;
    object-position: 70%;
    @media (min-width: 960px) {
      object-position: center;
    }
  `,
  logo: css`
    position: absolute;
    z-index: 100;
    width: 50px;
    height: 50px;
    top: 15px;
    left: 15px;
    @media (min-width: 960px) {
      width: 80px;
      height: auto;
      top: 50px;
      left: 50px;
    }
  `,
  info: css`
    position: absolute;
    z-index: 100;
    top: 5%;
    right: 0;
    width: 90%;
    height: auto;
    @media (min-width: 960px) {
      width: 43%;
      top: 0;
      left: 0;
      right: auto;
      padding-left: 5vw;
    }
  `,
  experience: css`
    position: absolute;
    z-index: 100;
    top: 35%;
    right: 0;
    width: 80%;
    height: auto;
    @media (min-width: 960px) {
      width: 43%;
      top: 20vw;
      left: 0;
      right: auto;
      transform: none;
      padding-left: 5vw;
    }
  `,
  mainv_text: css`
    position: absolute;
    z-index: 11;
    width: 90vw;
    height: auto;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -0%);
    @media (min-width: 960px) {
      width: 45vw;
      height: 60vh;
      min-height: 600px;
      top: 38vw;
      left: 6rem;
      transform: translateY(-0%);
    }
  `,
  title: css`
    position: relative;
    width: 100%;
    font-weight: 900;
    font-size: 4vw;
    color: #3b3b3b;
    & span {
      font-size: 4.5vw;
      color: #0d9bbd;
      padding-top: 0.4rem;
      margin-right: 0.4rem;
      background-position: top left -2px;
      background-repeat: repeat-x;
      background-size: 1em 0.3em;
      background-image: radial-gradient(
        0.15em 0.15em at center center,
        #0d9bbd,
        #0d9bbd 100%,
        transparent
      );
    }
    &:after {
      content: '11/18 実施';
      position: absolute;
      top: -10vw;
      right: 7vw;
      width: auto;
      font-family: 'Noto sans JP', sans-serif;
      font-weight: 900;
      font-size: 7vw;
      color: #2d70af;
    }
    @media (min-width: 960px) {
      padding-top: 0;
      font-size: 1.6vw;
      text-align: left;
      & span {
        font-size: 2.3vw;
      }
      &:after {
        top: -3vw;
        right: 7vw;
        font-size: 3vw;
        color: #519eb6;
      }
    }
  `,
  features: css`
    width: 100%;
    display: flex;
    @media (min-width: 960px) {
      width: 100%;
    }
  `,
  feature: css`
    margin-bottom: 10px;
    border-radius: 30px;
    margin-right: 2vw;
    @media (min-width: 960px) {
      height: 60px;
      margin-right: 10px;
    }
  `,
  text: css`
    position: relative;
    width: 100%;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 1vw;
    padding-left: 3vw;
    & span {
      color: #0d9bbd;
      font-weight: 900;
      font-size: 3vw;
    }
    &:before {
      content: '\f058';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: 3vw;
      opacity: 0.7;
      color: #0d9bbd;
      position: absolute;
      left: -5px;
      top: 50%;
      transform: translateY(-40%);
    }
    @media (min-width: 960px) {
      font-size: 2vw;
      padding-left: 2.4vw;
      & span {
        font-size: 1.1vw;
      }
      &:before {
        font-size: 2vw;
        top: 55%;
        left: 0;
      }
    }
  `,

  btn_container: css`
    padding: 40px 0 40px 30px;
    @media (min-width: 960px) {
      padding: 40px 0;
    }
  `,
  scrollDown: css`
    position: absolute;
    z-index: 10;
    height: 30vw;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 960px) {
      height: 150px;
    }
  `,
}

const setAnimation = () => {
  let tl = gsap.timeline({ defaults: { opacity: 0, ease: 'expoInOut' } })

  tl.from('#top', { autoAlpha: 0 })
    .from('.hero', {
      duration: 0.5,
      filter: 'blur(60px)',
    })
    .from('.info', {
      y: 80,
      scale: 0.1,
      duration: 0.5,
      filter: 'blur(20px)',
    })
    .from('.experience', {
      y: 80,
      scale: 0.1,
      duration: 0.5,
      filter: 'blur(20px)',
    })
    .from('.copy', {
      y: 80,
      scale: 0.1,
      duration: 0.5,
      filter: 'blur(20px)',
    })
    .from('.feature', {
      x: -200,
      duration: 1,
      stagger: {
        from: 'start',
        each: 0.1,
      },
    })
    .from('.herobtn', {
      y: 100,
      duration: 0.5,
    })
    .from('.scroll', {
      y: 100,
      duration: 0.5,
    })
}

export default Hero

import { useEffect } from 'react'

import { css } from '@emotion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { IsProd } from '~/constants/environment'

const FixedBG: React.FC = () => {
  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <>
      <picture>
        <source
          type='image/webp'
          srcSet={
            IsProd
              ? 'https://t-msg.co.jp/lp/kyotsutest-joho2311/image/bg_fixed.webp'
              : 'image/bg_fixed.webp'
          }
        />
        <img
          src={
            IsProd
              ? 'https://t-msg.co.jp/lp/kyotsutest-joho2311/image/bg_fixed.png'
              : 'image/bg_fixed.png'
          }
          alt='冬の景色'
          css={styles.fixed}
          className='fixed'
        />
      </picture>
    </>
  )
}

const styles = {
  fixed: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    &:before {
      content: '';
      position: absolute;
      z-index: 10;
      background-color: rgba(10, 0, 7, 0.8);
      transition: all 0.5s ease;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
}

const setAnimation = () => {
  gsap.from('.fixed', {
    opacity: 0,
    duration: 1,
    delay: 0,
    scrollTrigger: {
      trigger: '#top',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
}

export default FixedBG

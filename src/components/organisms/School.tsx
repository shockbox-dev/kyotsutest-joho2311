import { useEffect } from 'react'
import Link from 'next/link'
import { css } from '@emotion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { SectionTitle } from '~/components/atoms/SectionTitle'
import SchoolTabs from '~/components/molecules/SchoolTabs'
import { CVButton } from '~/components/atoms/CVButton'

const School: React.FC = () => {
  const IsProd = process.env.NODE_ENV === 'production'

  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <section css={styles.wrapper} id='school'>
      <div css={styles.container} className='school'>
        <div css={styles.head}>
          <SectionTitle title='校舎一覧' subtitle='SCHOOL' />
        </div>
        <div css={styles.tableContainer}>
          <p css={styles.info}>
            受験可能な校舎をご紹介します。
            <br />
            詳しい校舎情報は
            <Link
              href='https://t-msg.co.jp/?s='
              passHref
              target='_blank'
              css={styles.link}>
              MSG東進公式ホームページ
            </Link>
            をご覧ください。
          </p>
          <SchoolTabs />
        </div>
      </div>
    </section>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    width: 100vw;
    background-color: rgb(255, 255, 255);
  `,
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
  `,
  head: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 40px 0 30px;
    width: 100%;
    @media (min-width: 960px) {
      padding: 100px 0 30px;
    }
  `,
  tableContainer: css`
    width: 100%;
    background-color: white;
  `,
  info: css`
    padding: 20px 0;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    text-align: center;
    @media (min-width: 960px) {
      font-size: 1.5rem;
    }
  `,
  timetable: css`
    padding: 0 20px;
  `,
  range: css`
    padding: 0 20px;
  `,
  btn_container: css`
    display: flex;
    justify-content: center;
    padding: 50px 0;
  `,
  link: css`
    cursor: pointer;
    color: black;
    border-bottom: 1px solid;
  `,
}

const setAnimation = () => {
  gsap.from('.school', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.school',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
}

export default School

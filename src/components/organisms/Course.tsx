import { useEffect } from 'react'
import { css } from '@emotion/react'
import { Box, TableContainer } from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { SectionTitle } from '~/components/atoms/SectionTitle'
import { CVButton } from '~/components/atoms/CVButton'
import CourseTabs from '~/components/molecules/CourseTabs'

import { IsProd } from '~/constants/environment'

const Course: React.FC = () => {
  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <section css={styles.wrapper} id='course'>
      <Box css={styles.container} className='courses'>
        <Box css={styles.head}>
          <SectionTitle title='講座紹介' subtitle='COURSE' />
        </Box>
        <TableContainer component='div' css={styles.tableContainer}>
          <p css={styles.info}>
            共通テスト「情報Ⅰ」体験受験で受験できる講座の一部を
            <br />
            ご紹介いたします
          </p>
          <CourseTabs />
        </TableContainer>
      </Box>
    </section>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    width: 100vw;
    background-color: rgba(255, 255, 255, 1);
  `,
  container: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    max-width: 1180px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;
  `,
  head: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 40px 0 30px;
    @media (min-width: 960px) {
      padding: 60px 0 30px;
    }
  `,
  tableContainer: css`
    width: 100%;
    background-color: white;
  `,
  info: css`
    padding: 20px 0;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    @media (min-width: 960px) {
      font-size: 1.2rem;
    }
  `,
  btn_container: css`
    display: flex;
    justify-content: center;
    padding: 50px 0 0;
  `,
}

const setAnimation = () => {
  gsap.from('.courses', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.courses',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
}

export default Course

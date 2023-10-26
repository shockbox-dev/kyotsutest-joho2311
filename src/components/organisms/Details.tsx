import { useEffect } from 'react'
import { css } from '@emotion/react'
import {
  Box,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Typography,
} from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { SectionTitle } from 'src/components/atoms/SectionTitle'
import { returnFeed } from '~/utils/returnFeed'

const rows = [
  {
    menu: '日程',
    content: '2023年11月18日(土)',
  },
  {
    menu: '時間割',
    content:
      '試験時間60分\n\n10:30~11:30\n\n※既定実施日程で受験できない方は、当日の別時間または後日受験も可能です。\n受験校舎までご連絡ください。',
  },
  {
    menu: '実施会場',
    content: '東進衛星予備校 各校舎',
  },
  {
    menu: '受験料',
    content:
      '通常1,100円(税込)のところ無料招待いたします。詳しくは校舎までお問い合わせください。',
  },
  {
    menu: '対象',
    content: '高２生・高１生・中３生・中２生・中１生',
  },
  {
    menu: '申込締切',
    content: 'インターネット締切\n11月15日(水)',
  },
  {
    menu: '成績表返却',
    content:
      '11月25日(金)〜\n申込時に選択いただいた「成績表返却校舎」にて返却します。詳しくは校舎からお知らせします。',
  },
  {
    menu: '受験票',
    content:
      '校舎でお渡ししています。申込後なるべく早く余裕をもって受け取りに来てください。試験当日にはお渡しできませんのでご注意ください。',
  },
  {
    menu: '合格指導解説授業',
    content: '当日または後日、校舎にて受講できます',
  },
]

const Details: React.FC = () => {
  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }
  }, [])

  return (
    <section css={styles.wrapper} id='details'>
      <Box css={styles.container} className='title_dt'>
        <Box css={styles.head}>
          <SectionTitle title='実施要項' subtitle='DETAILS' />
        </Box>
        <TableContainer component='div' css={styles.tableContainer}>
          <Table css={styles.table} aria-label='simple table'>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.menu} css={styles.row}>
                  <TableCell component='th' scope='row' css={styles.th}>
                    {row.menu}
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {returnFeed(row.content)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </section>
  )
}

const styles = {
  wrapper: css`
    width: 100vw;
  `,
  container: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    max-width: 1180px;
    margin: 0 auto;
    padding: 40px 0;
  `,
  head: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding: 40px 0 30px;
    @media (min-width: 960px) {
      padding: 100px 0 60px;
    }
  `,
  tableContainer: css`
    width: 100%;
  `,
  table: css`
    padding: 30px;
  `,
  row: css`
    height: 100px;
  `,
  th: css`
    font-family: 'Noto sans JP', sans-serif;
    width: 30%;
    font-weight: 500;
    font-size: 1rem;
    @media (min-width: 960px) {
      font-weight: 500;
      font-size: 1.4rem;
      text-align: center;
    }
  `,
  td: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    @media (min-width: 960px) {
      font-size: 1.2rem;
    }
  `,
  attention: css`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
    max-width: 1100px;
    margin: 0 auto 40px;
    border: 1px solid #b81b1b;
  `,
  recommend: css`
    background-color: #b81b1b;
    color: white;
    width: 100%;
    padding: 5px 0;
    text-align: center;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
  `,
  description: css`
    margin-inline-start: 0;
    padding: 10px 30px;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 0.8rem;
    @media (min-width: 960px) {
      font-size: 1.2rem;
    }
  `,
}

const setAnimation = () => {
  gsap.from('.title_dt', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.title_dt',
      start: 'top 80%',
      markers: false,
      once: false,
    },
  })
}

export default Details

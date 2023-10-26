import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { css, Theme } from '@emotion/react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { SectionTitle } from 'src/components/atoms/SectionTitle'

const ThanksPage: NextPage = () => {
  const [data, setData] = useState({
    area: '',
    kyositsu: '',
    sei: '',
    mei: '',
    seikana: '',
    meikana: '',
    sex: '',
    date: '',
    birth_year: '',
    birth_month: '',
    birth_date: '',
    grade: '',
    postal_code: '',
    region: '',
    locality: '',
    street_address: '',
    extended_address: '',
    email: '',
    phone: '',
    school: '',
    comment: '',
  })

  useEffect(() => {
    if (typeof window) {
      gsap.registerPlugin(ScrollTrigger)
      setAnimation()
    }

    const raw = window.localStorage.getItem('data')
    const obj = JSON.parse(raw, (key, value) => {
      if (key === undefined) {
        return 'empty'
      } else {
        return value
      }
    })
    setData(obj)

    window.localStorage.clear()
  }, [])

  return (
    <>
      <Box css={styles.wrapper} component='main'>
        <Box css={styles.container}>
          <Box css={styles.head} className='title_thx'>
            <SectionTitle title='申込完了' subtitle='COMPLETE' />
          </Box>
          <Box className='subtitle_thx'>
            <Typography variant='body1' css={styles.subtitle}>
              東進の共通テスト「情報Ⅰ」体験受験に
              <br />
              お申込いただきありがとうございました。
              <br />
              下記内容でお申し込みを承りました。
            </Typography>
          </Box>
          <TableContainer component='div' css={styles.tableContainer}>
            <Table css={styles.table} aria-label='simple table'>
              <TableHead component='thead'>
                <TableRow component='tr'>
                  <TableCell css={styles.thead}>項目</TableCell>
                  <TableCell css={styles.thead}>ご入力内容</TableCell>
                </TableRow>
              </TableHead>
              <TableBody component='tbody'>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    受験希望校舎
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {data.kyositsu || ''}
                  </TableCell>
                </TableRow>
                {/* <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    受験希望時間
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {data.time}
                  </TableCell>
                </TableRow> */}
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    お名前
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {`${data.sei} ${data.mei}` || ''}
                  </TableCell>
                </TableRow>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    フリガナ
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {`${data.seikana} ${data.meikana}` || ''}
                  </TableCell>
                </TableRow>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    性別
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {data.sex || ''}
                  </TableCell>
                </TableRow>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    生年月日
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {`${data.birth_year}年${data.birth_month}月${data.birth_date}日` ||
                      ''}
                  </TableCell>
                </TableRow>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    学年(2023年4月時点)
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {data.grade || ''}
                  </TableCell>
                </TableRow>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    郵便番号
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {`〒${data.postal_code.slice(
                      0,
                      3
                    )}-${data.postal_code.slice(3, 7)}` || ''}
                  </TableCell>
                </TableRow>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    住所
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {`${data.region} ${data.locality} ${data.street_address} ${data.extended_address}` ||
                      ''}
                  </TableCell>
                </TableRow>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    メールアドレス
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {data.email || ''}
                  </TableCell>
                </TableRow>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    お電話番号
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {data.phone || ''}
                  </TableCell>
                </TableRow>
                <TableRow css={styles.row} component='tr'>
                  <TableCell component='th' scope='row' css={styles.th}>
                    学校名
                  </TableCell>
                  <TableCell component='td' css={styles.td}>
                    {data.school || ''}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box css={styles.head}>
            <Typography component='h1' css={styles.title}>
              校舎スタッフよりあらためて
              <br />
              ご連絡させていただきます。
              <br />
              よろしくお願いいたします。
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

const styles = {
  wrapper: (theme: Theme) => css`
    width: 100vw;
  `,
  container: css`
    width: 100%;
    padding: 50px 0 50px;
    @media (min-width: 960px) {
      max-width: 1180px;
      margin: 0 auto;
    }
  `,
  subtitle: css`
    padding: 20px 0;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.7rem;
    text-align: center;
  `,
  head: css`
    padding: 20px 30px;
    text-align: center;
    @media (min-width: 960px) {
      margin: 0 auto;
      padding: 100px 0 50px;
    }
  `,
  title: css`
    border: 4px solid rgba(48, 158, 158, 0.9);
    border-radius: 10px;
    background-color: white;
    padding: 30px;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    color: rgba(48, 158, 158, 0.9);
    @media (min-width: 960px) {
      margin: 30px 100px;
      font-size: 2rem;
    }
  `,
  tableContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  `,
  table: css`
    width: 90%;
    * {
      font-family: 'Noto sans JP', sans-serif;
      text-align: center;
    }
    @media (min-width: 960px) {
      width: 80%;
    }
  `,
  thead: css`
    font-weight: 700;
    font-size: 1rem;
  `,
  row: css`
    height: 20px;
    @media (min-width: 960px) {
      height: 60px;
    }
  `,
  th: css`
    width: 40%;
    font-weight: 400;
    font-size: 0.7rem;
    @media (min-width: 960px) {
      font-size: 1rem;
    }
  `,
  td: css`
    font-weight: 400;
    font-size: 0.8rem;
    overflow-wrap: break-word;
    @media (min-width: 960px) {
      font-size: 1.4rem;
    }
  `,
}

const setAnimation = () => {
  gsap.from('.title_thx', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.title_thx',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
  gsap.from('.subtitle_thx', {
    opacity: 0,
    y: 40,
    duration: 1,
    scrollTrigger: {
      trigger: '.subtitle_thx',
      start: 'top 80%',
      markers: false,
      once: true,
    },
  })
}

export default ThanksPage

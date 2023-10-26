import Link from 'next/link'
import { css } from '@emotion/react'
import { Typography, Box } from '@mui/material'

const Footer: React.FC = () => {
  const IsProd = process.env.NODE_ENV === 'production'

  return (
    <footer css={styles.wrapper}>
      <Box css={styles.footer}>
        <Box css={styles.logoContainer}>
          <Link href='https://t-msg.co.jp/' passHref target='_blank'>
            <img
              src='image/logo.png'
              alt='MSGnetwork東進衛星予備校'
              height={50}
              width={350}
            />
          </Link>
        </Box>
        <Link
          href='https://t-msg.co.jp/company/'
          passHref
          target='_blank'
          css={styles.company}>
          <Typography variant='h6' css={styles.text}>
            会社概要
          </Typography>
        </Link>
      </Box>
      <Box css={styles.footerAbout}>
        <Typography variant='body2' component='small' align='center'>
          Copyright ©️2015 CareerPlan Ltd. All rights reserved.
        </Typography>
      </Box>
    </footer>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    padding-bottom: 80px;
    background: #1e8192 url('image/noise.png') repeat;
  `,
  footer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 50px 0;
    color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    @media (min-width: 960px) {
      padding: 50px 20px;
    }
  `,
  logoContainer: css`
    @media (min-width: 960px) {
    }
  `,
  company: css`
    padding: 20px 0 0;
    cursor: pointer;
    text-decoration: none;
  `,
  text: css`
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    font-family: 'Noto sans JP', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: #ffffff;
  `,
  footerAbout: css`
    color: #ffffff;
    display: flex;
    justify-content: center;
  `,
}

export default Footer

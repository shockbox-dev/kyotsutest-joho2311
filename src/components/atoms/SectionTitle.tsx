import { css } from '@emotion/react'
import { Typography } from '@mui/material'

type Props = {
  title: string
  subtitle: string
}

export const SectionTitle: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Typography component='h1' css={styles.title(subtitle)}>
      {title}
    </Typography>
  )
}

const styles = {
  title: (subtitle: string) => css`
    position: relative;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    text-align: center;
    margin: 40px 0;
    &:before {
      content: '${subtitle}';
      font-family: 'Montserrat', sans-serif;
      font-weight: 100;
      font-size: 1rem;
      letter-spacing: 0.4rem;
      color: rgba(0, 0, 0);
      position: absolute;
      width: 100vw;
      top: 60px;
      left: 50%;
      transform: translate(-50%, -50%) scaleY(1);
    }
    &:after {
      content: '';
      position: absolute;
      width: 15%;
      height: 2px;
      bottom: -60px;
      left: 50%;
      background-color: #0d9bbd;
      transform: translate(-50%, 0);
    }
    @media (min-width: 960px) {
      margin: 40px 0 60px;
      font-size: 3rem;
      text-align: center;
      &:before {
        top: 100px;
        letter-spacing: 0.7rem;
      }
    }
  `,
}

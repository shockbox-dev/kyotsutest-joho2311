import { css } from '@emotion/react'
import { Typography } from '@mui/material'

type Props = {
  subtitle: string
  description: JSX.Element
  content: JSX.Element
}

const SolutionDetail: React.FC<Props> = ({
  subtitle,
  description,
  content,
}) => {
  return (
    <div css={styles.container}>
      <div css={styles.text}>
        <Typography component='h2' css={styles.header}>
          {subtitle}
        </Typography>
        <Typography variant='h2' css={styles.description}>
          {description}
        </Typography>
      </div>
      <div css={styles.img_container}>{content}</div>
    </div>
  )
}

const styles = {
  container: css`
    display: flex;
    flex-flow: column;
    width: 100%;
    @media (min-width: 960px) {
      justify-content: space-evenly;
      align-items: center;
    }
    @media (min-width: 1200px) {
      flex-flow: row;
    }
  `,
  text: css`
    width: 90vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    @media (min-width: 960px) {
      width: 80vw;
    }
    @media (min-width: 1200px) {
      width: 50%;
    }
  `,
  header: css`
    padding: 40px 0 30px;
    text-align: center;
    letter-spacing: 0;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 4vw;
    font-weight: 700;
    @media (min-width: 960px) {
      font-size: 2rem;
    }
  `,
  description: css`
    font-family: 'Noto sans JP', sans-serif;
    font-size: 3vw;
    font-weight: 400;
    line-height: 8vw;
    padding: 0px 20px 30px;
    & span {
      font-weight: 700;
      background: linear-gradient(
        transparent 50%,
        rgba(255, 252, 107, 0.7) 50%
      );
    }
    @media (min-width: 960px) {
      padding: 20px;
      font-size: 1.2rem;
      line-height: 3.3rem;
      letter-spacing: 0.2rem;
    }
  `,
  img_container: css`
    width: 100%;
    height: auto;
    @media (min-width: 960px) {
      width: 80%;
      height: 60%;
    }
    @media (min-width: 1200px) {
      padding: 0 0 0 40px;
      width: 50%;
    }
  `,
  image: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
}

export default SolutionDetail

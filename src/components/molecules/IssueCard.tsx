import { css } from '@emotion/react'
import { Typography } from '@mui/material'

import SolutionDetail from '~/components/molecules/SolutionDetail'

interface Props {
  title: string
  src: string
  quote: string
  subtitle: string
  description: JSX.Element
  content: JSX.Element
}

export const IssueCard: React.FC<Props> = ({
  title,
  src,
  quote,
  subtitle,
  description,
  content,
}) => {
  return (
    <>
      <div css={styles.wrapper}>
        <div css={styles.container}>
          <Typography component='h2' css={styles.header}>
            {title}
          </Typography>
          <div css={styles.issue}>
            <img src={`image/${src}`} css={styles.img} />
            <Typography variant='body1' css={styles.quote}>
              {quote}
            </Typography>
          </div>
        </div>
        <SolutionDetail
          subtitle={subtitle}
          description={description}
          content={content}
        />
      </div>
    </>
  )
}

const styles = {
  wrapper: css`
    margin-bottom: 100px;
    @media (min-width: 960px) {
      margin-bottom: 300px;
    }
  `,
  container: css`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-flow: column;
    @media (min-width: 960px) {
      width: 90vw;
      max-width: 1080px;
      margin: 0 auto 100px;
    }
  `,
  header: css`
    padding: 20px 0 0;
    text-align: center;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 1.2rem;
    font-weight: 900;
    @media (min-width: 1200px) {
      font-size: 2rem;
    }
  `,
  issue: css`
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  img: css`
    width: 80%;
    @media (min-width: 960px) {
      width: 100%;
    }
  `,
  quote: css`
    width: 90%;
    font-size: 3vw;
    margin-top: 20px;
    text-align: end;
    @media (min-width: 960px) {
      width: 100%;
      font-size: 1rem;
    }
  `,
}

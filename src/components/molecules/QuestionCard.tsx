import { css } from '@emotion/react'
import { Typography } from '@mui/material'

type Props = {
  question: string
  answer: JSX.Element
}

const QuerstionCard: React.FC<Props> = ({ question, answer }) => {
  return (
    <div css={styles.container}>
      <Typography variant='h2' css={styles.question}>
        {question}
      </Typography>
      <div css={styles.a_container}>
        <div css={styles.inner}>{answer}</div>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    position: relative;
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 90vw;
    max-width: 1180px;
    background-color: #0d9bbd;
    border-radius: 0px;
    &:before {
      content: '';
      background: url('image/question.png') no-repeat 50%;
      position: absolute;
      top: -150px;
      left: -100px;
      width: 247px;
      height: 294px;
      transform: scale(0.25);
    }
  `,
  question: css`
    padding: 30px 20px 15px 40px;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: white;
    @media (min-width: 960px) {
      padding: 20px 30px 10px 70px;
      font-size: 1.5rem;
    }
  `,
  a_container: css`
    position: relative;
    margin: 15px;
    background-color: white;
    border-radius: 0px;
    @media (min-width: 960px) {
      margin: 10px 15px 15px;
    }
  `,
  inner: css`
    display: flex;
    align-items: center;
    padding: 60px 25px 40px 35px;
    &:before {
      content: '';
      background: url('image/answer.png') no-repeat 50%;
      position: absolute;
      top: -110px;
      left: -80px;
      width: 247px;
      height: 294px;
      transform: scale(0.3);
    }
    @media (min-width: 960px) {
      padding: 60px 25px 40px 50px;
      &:before {
        left: -80px;
      }
    }
  `,
}

export default QuerstionCard

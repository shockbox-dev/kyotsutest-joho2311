import { css, Theme } from '@emotion/react'
import { Typography } from '@mui/material'

type Props = {
  index: string
  profile: JSX.Element[]
  commentOne: string
  commentTwo: string
  description: JSX.Element
  src: string
}

const ReviewCard: React.FC<Props> = ({
  index,
  profile,
  commentOne,
  commentTwo,
  description,
  src,
}) => {
  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <div css={styles.square}>
          <Typography variant='caption' css={styles.index}>
            {index}
          </Typography>
        </div>
        <div css={styles.imgContainer}>
          <img src={src} alt={profile.concat.toString()} css={styles.image} />
        </div>
        <div>
          <div css={styles.commentOne}>{commentOne}</div>
          <div css={styles.commentTwo}>{commentTwo}</div>
        </div>
        <div css={styles.profileContainer}>
          <Typography variant='h3' component='h3' css={styles.profile}>
            {profile}
          </Typography>
        </div>
      </div>
      <div css={styles.description}>{description}</div>
    </div>
  )
}

const styles = {
  container: css`
    position: relative;
    width: 80vw;
    max-width: 600px;
    height: 150vw;
    background-color: #ffffff;
    border-radius: 10px;
    margin-bottom: 50px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    @media (min-width: 960px) {
      width: 30vw;
      max-width: 350px;
      height: 780px;
      flex-flow: column;
    }
  `,
  header: css`
    width: 100%;
    height: 50%;
  `,
  square: css`
    position: absolute;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 34%;
    left: 0;
    width: 30%;
    height: 7%;
    background-color: #0d9bbd;
    @media (min-width: 960px) {
      width: 120px;
      height: 40px;
    }
  `,
  index: css`
    color: white;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    font-size: 4vw;
    @media (min-width: 960px) {
      font-size: 1.2rem;
    }
  `,
  imgContainer: css`
    position: absolute;
    overflow: hidden;
    height: 55vw;
    width: 55vw;
    top: 5%;
    left: 50%;
    border-radius: 50%;
    margin: 0 auto;
    transform: translateX(-50%);
    @media (min-width: 960px) {
      height: 300px;
      width: 300px;
    }
  `,
  image: css`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `,
  commentOne: css`
    position: absolute;
    top: -15px;
    right: 3%;
    padding: 15px 3px;
    background-color: rgba(255, 255, 255, 0.7);
    writing-mode: vertical-rl;
    font-family: 'Shippori Mincho', serif;
    font-weight: 500;
    font-size: 4.2vw;
    @media (min-width: 960px) {
      padding: 15px 3px;
      font-size: 1.2rem;
    }
  `,
  commentTwo: css`
    position: absolute;
    top: 10px;
    right: 15%;
    padding: 15px 3px;
    background-color: rgba(255, 255, 255, 0.7);
    writing-mode: vertical-rl;
    font-family: 'Shippori Mincho', serif;
    font-weight: 500;
    font-size: 4.2vw;
    @media (min-width: 960px) {
      padding: 15px 3px;
      font-size: 1.2rem;
    }
  `,
  profileContainer: css`
    display: flex;
    align-items: center;
    position: absolute;
    width: auto;
    height: 16%;
    top: 38%;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
    @media (min-width: 960px) {
      top: 38%;
      width: auto;
      height: 15%;
    }
  `,
  profile: css`
    width: 100%;
    padding: 3vw 3.5vw;
    color: black;
    font-family: 'Shippori Mincho', sans-serif;
    font-size: 3.7vw;
    font-weight: 700;
    line-height: 6vw;
    @media (min-width: 960px) {
      padding: 10px 30px 0 10px;
      font-size: 1.2rem;
      line-height: 2rem;
    }
  `,
  description: css`
    padding: 7vw 5vw;
    line-height: 5.3vw;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 3.6vw;
    font-weight: 400;
    & span {
      font-weight: 700;
      color: #0d9bbd;
    }
    @media (min-width: 768px) {
      font-size: 2.8vw;
    }
    @media (min-width: 960px) {
      padding: 40px 25px 25px;
      font-size: 0.9rem;
      line-height: 1.9rem;
    }
  `,
}

export default ReviewCard

import { css } from '@emotion/react'
import { Typography } from '@mui/material'

type Props = {
  index: string
  title: string
  webp: string
  src: string
  description: JSX.Element
}

const FeatureCard: React.FC<Props> = ({
  index,
  title,
  webp,
  src,
  description,
}) => {
  return (
    <div css={styles.container}>
      <picture css={styles.imgContainer}>
        <source srcSet={`image${webp}`} type='image/webp' />
        <img src={`image${src}`} alt={title} css={styles.image} />
      </picture>
      <div css={styles.text}>
        <Typography variant='h1' component='h3' css={styles.title}>
          {title}
        </Typography>
        <Typography variant='body1' component='div' css={styles.description}>
          {description}
        </Typography>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
    height: 100%;
    @media (min-width: 960px) {
      max-width: 1100px;
    }
  `,
  imgContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 60%;
    @media (min-width: 960px) {
      width: 40vh;
      height: calc(60% - 50px);
      max-height: 500px;
      padding-top: 10%;
    }
  `,
  image: css`
    width: 100%;
    max-width: 400px;
    object-fit: cover;
    @media (min-width: 960px) {
      width: 70%;
      max-width: none;
    }
  `,
  text: css`
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 100%;
    height: 40%;
    padding: 2vw 10%;
  `,
  title: css`
    padding: 25px 0;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 4.7vw;
    text-align: center;
    @media (min-width: 960px) {
      font-size: 1.7rem;
    }
  `,
  description: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 2rem;
    & span {
      font-weight: 700;
      background: linear-gradient(transparent 50%, #fff799 50%);
    }
    @media (min-width: 960px) {
      width: 100%;
      font-size: 1.1rem;
      line-height: 2.5rem;
    }
  `,
}

export default FeatureCard

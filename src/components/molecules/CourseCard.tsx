import { css } from '@emotion/react'

import { IsProd } from '~/constants/environment'

type Props = {
  src: string
  name: string
  title: string
  info: string
  description: string
}

const CourseCard: React.FC<Props> = ({
  src,
  name,
  title,
  info,
  description,
}) => {
  const IsProd = process.env.NODE_ENV === 'production'

  return (
    <>
      <div css={styles.wrapper}>
        <div css={styles.teacher}>
          <div css={styles.img_container}>
            <picture>
              <source
                srcSet={
                  IsProd
                    ? `https://t-msg.co.jp/lp/kyotsutest-joho2311/image/${src}.webp`
                    : `image/${src}.webp`
                }
                type='image/webp'
              />
              <img
                src={
                  IsProd
                    ? `https://t-msg.co.jp/lp/kyotsutest-joho2311/image/${src}.jpg`
                    : `image/${src}.jpg`
                }
                alt={name}
                css={styles.image}
              />
            </picture>
          </div>
          <div css={styles.name}>
            <p>
              講師<span>{name}</span>先生
            </p>
          </div>
        </div>
        <div css={styles.content}>
          <div css={styles.head}>
            <h2 css={styles.title}>{title}</h2>
            <div>
              <p css={styles.info}>{info}</p>
            </div>
          </div>
          <div css={styles.body}>
            <p css={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  wrapper: css`
    display: flex;
    width: 100%;
    height: 30vw;
    min-height: 180px;
    @media (min-width: 960px) {
      flex-flow: column;
      width: 100%;
      height: auto;
    }
  `,
  teacher: css`
    position: relative;
    width: 35%;
    height: 100%;
    @media (min-width: 960px) {
      width: 100%;
    }
  `,
  img_container: css`
    overflow: hidden;
    height: 100%;
    border-radius: 10px;
    /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); */
    @media (min-width: 960px) {
      height: 300px;
    }
  `,
  image: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  name: css`
    position: absolute;
    right: 5px;
    bottom: 5px;
    color: white;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
    font-family: '游ゴシック体', YuGothic, '游ゴシック Medium',
      'Yu Gothic Medium', '游ゴシック', 'Yu Gothic', sans-serif;
    font-weight: 600;
    font-size: 0.4rem;
    & span {
      margin: 0 2px 0;
      font-size: 1rem;
    }
    @media (min-width: 960px) {
      font-size: 1rem;
      & span {
        margin: 0 5px 0;
        font-size: 2.3rem;
      }
    }
  `,
  content: css`
    width: 65%;
    @media (min-width: 960px) {
      width: 100%;
    }
  `,
  head: css`
    @media (min-width: 960px) {
      height: 150px;
    }
  `,
  title: css`
    margin-block: unset;
    font-family: '游ゴシック体', YuGothic, '游ゴシック Medium',
      'Yu Gothic Medium', '游ゴシック', 'Yu Gothic', sans-serif;
    padding: 5px 10px 0 10px;
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-weight: 900;
    font-size: 3vw;
    @media (min-width: 960px) {
      font-size: 1.7rem;
    }
  `,
  info: css`
    padding-right: 10px;
    margin-block: 0;
    font-family: '游ゴシック体', YuGothic, '游ゴシック Medium',
      'Yu Gothic Medium', '游ゴシック', 'Yu Gothic', sans-serif;
    font-weight: 600;
    font-size: 2vw;
    text-align: right;
    @media (min-width: 960px) {
      font-weight: 400;
      font-size: 1rem;
    }
  `,
  body: css`
    padding: 0 10px;
    @media (min-width: 960px) {
      padding: 5px;
    }
  `,
  description: css`
    font-family: '游ゴシック体', YuGothic, '游ゴシック Medium',
      'Yu Gothic Medium', '游ゴシック', 'Yu Gothic', sans-serif;
    font-weight: 400;
    font-size: 2vw;
    @media (min-width: 960px) {
      font-size: 1rem;
    }
  `,
}

export default CourseCard

import { css } from '@emotion/react'

type Props = {
  color: string
  number: number
  flow: string
  title: JSX.Element[]
  description: JSX.Element[]
  classname: string
}

export const FlowsBlock: React.FC<Props> = ({
  color,
  number,
  flow,
  title,
  description,
  classname,
}) => {
  return (
    <>
      <div css={styles.row} className={classname}>
        <div css={styles.dt(color, number + 1)}>
          <span>0{number}</span>
          <h1>{flow}</h1>
        </div>
        <div css={styles.dd}>
          <h2 css={styles.dd_title}>{title}</h2>
          <p css={styles.description}>{description}</p>
        </div>
      </div>
    </>
  )
}

const styles = {
  row: css`
    display: flex;
    width: 100%;
    height: 200px;
    @media (max-width: 768px) {
      height: 300px;
    }
  `,
  dt: (color: string, number: number) => css`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 20%;
    background-color: ${color};
    &:after {
      content: '';
      background-image: url('image/flow${number}.svg');
      position: absolute;
      z-index: 100;
      width: 50px;
      height: 40px;
      bottom: -30px;
      left: 40%;
    }
    & span {
      display: block;
      font-family: 'Inter', sans-serif;
      font-weight: 900;
      font-size: 2.5rem;
      color: white;
    }
    & h1 {
      display: block;
      font-family: 'Noto sans JP', sans-serif;
      font-weight: 700;
      font-size: 1.6rem;
      color: white;
    }
    @media (max-width: 768px) {
      width: 15%;
      &:after {
        transform: scale(0.7);
        left: 12%;
      }
      & span {
        font-size: 2rem;
        writing-mode: vertical-rl;
        -ms-writing-mode: bt-lr;
        text-orientation: sideways;
        padding-bottom: 10px;
      }
      & h1 {
        font-size: 1.3rem;
        writing-mode: vertical-rl;
        -ms-writing-mode: bt-lr;
        text-orientation: sideways;
      }
    }
  `,
  dd: css`
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 80%;
    height: 100%;
    &:after {
      content: '';
      position: absolute;
      background-color: #000000;
      width: calc(100% - 30px);
      height: 1px;
      left: 30px;
      bottom: 0px;
    }
    @media (max-width: 768px) {
      width: 75%;
      &:after {
        width: calc(100% - 10px);
        left: 10px;
      }
    }
  `,
  dd_title: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    padding: 0 20px;
    @media (min-width: 960px) {
      padding: 0 40px;
    }
  `,
  description: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    padding-left: 15px;
    @media (min-width: 960px) {
      padding: 0 40px;
    }
  `,
}

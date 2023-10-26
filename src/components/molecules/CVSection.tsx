import { css } from '@emotion/react'
import { Typography } from '@mui/material'

import { CVButton } from '~/components/atoms/CVButton'
import { IsProd } from '~/constants/environment'

export const CVSection: React.FC = () => {
  return (
    <>
      <div css={styles.wrapper}>
        <Typography variant='h2' component='h2' css={styles.micro}>
          ＼一足先に情報のテストを体験しちゃおう！／
        </Typography>
        <CVButton
          url={IsProd ? '/lp/kyotsutest-joho2311/form' : '/form'}
          label='共通テスト「情報Ⅰ」体験模試に申し込む'
          color='orange'
        />
      </div>
    </>
  )
}

const styles = {
  wrapper: css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 100%;
    height: 150px;
    background: rgba(13, 155, 189, 1);
    @media (min-width: 960px) {
      height: 250px;
    }
  `,
  micro: css`
    font-family: 'Noto sans JP', sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    color: white;
    padding: 10px 0;
    @media (min-width: 960px) {
      font-size: 1.4rem;
      letter-spacing: 0.5rem;
    }
  `,
}

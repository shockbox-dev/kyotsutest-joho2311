import Link from 'next/link'
import { css, keyframes } from '@emotion/react'
import { Button } from '@mui/material'

import { isClosed } from '~/constants/environment'

type Props = {
  url: string
  label: string
  color: string
}

export const CVButton: React.FC<Props> = ({ url, label, color }) => {
  const events = isClosed ? 'none' : 'visible'
  const background = isClosed
    ? 'grey'
    : 'linear-gradient(90deg, #ff4478 0%, #ffa300 100%)'
  return (
    <Link href={isClosed ? '' : url} passHref scroll={isClosed ? false : null}>
      <Button
        css={styles.button(color, events, background)}
        disabled={isClosed}>
        {isClosed ? '申込受付は終了しました' : label}
        <span className='arrow' css={styles.arrow}></span>
      </Button>
    </Link>
  )
}

const styles = {
  button: (color: string, events: string, background: string) => css`
    pointer-events: ${events};
    height: 10vw;
    width: 80vw;
    color: white;
    background: ${background};
    border: 1px solid;
    border-radius: 30px;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    transition: all 0.6s ease-in-out;

    &:hover {
      background-color: ${color};
      transform: scale(1.05);
    }
    &:hover .arrow:after {
      animation: ${arrowMotion} 0.7s ease-in-out infinite;
    }
    @media (min-width: 960px) {
      width: 37vw;
      height: 80px;
      font-size: 1.6vw;
      border-radius: 80px;
    }
  `,
  arrow: css`
    position: relative;
    border: 1.5px solid;
    border-radius: 50%;
    margin-left: 20px;
    width: 30px;
    height: 30px;
    &:after {
      content: '\f054';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      position: absolute;
      font-size: 13px;
      display: block;
      top: 4px;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      transition: all 0.5s ease;
    }
    @media (min-width: 960px) {
      border: 1.9px solid;
    }
  `,
}

const arrowMotion = keyframes`
  from {
		left:0;
		opacity: 1;
	}
	30% {
    left: 30px;
		opacity: 0;
	}
  50% {
    left: -30px;
    opacity: 0;
  }
	to {
		left: 0;
		opacity: 1;
	}
`

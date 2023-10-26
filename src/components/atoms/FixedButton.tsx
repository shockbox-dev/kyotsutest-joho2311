import { useEffect, useState } from 'react'
import Link from 'next/link'

import { css, keyframes } from '@emotion/react'
import { Typography, Button } from '@mui/material'

import { IsProd, isClosed } from '~/constants/environment'
import { CAMPAIGN } from '~/constants/campaign'

export const FixedButton: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const getScroll = () => {
      const scroll = window.pageYOffset
      scroll > 500 ? setScrolled(true) : setScrolled(false)
    }
    getScroll()
    window.addEventListener('scroll', getScroll, { passive: false })
    return () => {
      window.removeEventListener('scroll', getScroll)
    }
  }, [])

  return (
    <div>
      <Link
        href={
          isClosed ? '' : IsProd ? '/lp/kyotsutest-joho2311/form' : '/form'
        }>
        <Button
          css={styles.button}
          data-type={scrolled ? 'isActive' : 'inActive'}
          disabled={isClosed}>
          <div css={styles.container}>
            <Typography css={styles.label}>
              {isClosed
                ? '申し込みは終了いたしました'
                : `${CAMPAIGN}に申し込む`}
            </Typography>
            <div className='arrow' css={styles.arrow}></div>
          </div>
        </Button>
      </Link>
    </div>
  )
}

const arrowHorizontal = keyframes`
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

const arrowVertical = keyframes`
  from {
		top:0;
		opacity: 1;
	}
	30% {
    top: 30px;
		opacity: 0;
	}
  50% {
    top: -30px;
    opacity: 0;
  }
	to {
		top: 0;
		opacity: 1;
	}
`

const styles = {
  button: css`
    z-index: 11000;
    position: fixed;
    top: 30%;
    right: 0;
    height: 400px;
    border-radius: 0;
    background-color: #ea5532;
    transition: background-color 0.6s ease-in-out;
    &:hover {
      background-color: #e7927d;
    }
    &:hover .arrow:after {
      animation: ${arrowVertical} 0.7s ease-in-out infinite;
    }
    @media (max-width: 960px) {
      &[data-type='isActive'] {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.4s ease-in-out;
      }
      &[data-type='inActive'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
      }
      top: auto;
      bottom: 0;
      right: auto;
      left: 0;
      width: 100vw;
      height: 70px;
      font-size: 1rem;
      &:hover .arrow:after {
        animation: ${arrowHorizontal} 0.7s ease-in-out infinite;
      }
    }
  `,
  container: css`
    @media (max-width: 960px) {
      display: flex;
      align-items: center;
    }
  `,
  label: css`
    writing-mode: vertical-rl;
    color: white;
    letter-spacing: 0.1rem;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    @media (max-width: 960px) {
      font-size: 1rem;
      writing-mode: horizontal-tb;
    }
  `,
  arrow: css`
    color: white;
    border: 2px solid;
    border-radius: 50%;
    position: relative;
    margin-top: 20px;
    width: 30px;
    height: 30px;
    &:after {
      content: '\f078';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: 16px;
      position: absolute;
      display: block;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      transition: all 0.5s ease;
      @media (max-width: 768px) {
        font-size: 12.5px;
        transform: none;
      }
    }
    @media (max-width: 960px) {
      &:after {
        content: '\f054';
        font-size: 10px;
        top: 6px;
      }
      font-size: 1rem;
      margin-top: 0;
      margin-left: 25px;
    }
  `,
}

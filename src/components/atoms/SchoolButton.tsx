import { useRouter } from 'next/router'
import { css, keyframes } from '@emotion/react'
import { Button } from '@mui/material'
import { useStateMachine } from 'little-state-machine'

import { isClosed } from '~/constants/environment'
import updateAction from '~/utils/updateActions'

type Props = {
  area: string
  school: string
  color: string
}

export const SchoolButton: React.FC<Props> = ({ area, school, color }) => {
  const { actions } = useStateMachine({ updateAction })
  const router = useRouter()
  const IsProd = process.env.NODE_ENV === 'production'

  const handleClick = () => {
    actions.updateAction({
      channel: '',
      area: area,
      kyositsu: school,
      sei: '',
      mei: '',
      seikana: '',
      meikana: '',
      sex: '',
      date: '',
      birth_year: '',
      birth_month: '',
      birth_date: '',
      grade: '',
      postal_code: '',
      region: '',
      locality: '',
      street_address: '',
      extended_address: '',
      email: '',
      phone: '',
      school: '',
      comment: '',
    })

    router.push({
      pathname: `${IsProd ? '/lp/kyotsutest-joho2311/form/' : '/form/'}`,
    })
  }

  return (
    <>
      <Button
        css={styles.button(color)}
        onClick={handleClick}
        disabled={isClosed}>
        {isClosed ? '申し込みは終了いたしました' : `${school}で申し込む`}
        <span className='arrow' css={styles.arrow}></span>
      </Button>
    </>
  )
}

const styles = {
  button: (color: string) => css`
    height: 100%;
    width: 100%;
    color: white;
    background-color: #ee7253;
    border: 1px solid;
    border-radius: 20px;
    font-family: 'Noto sans JP', sans-serif;
    font-size: 0.8rem;
    font-weight: 700;
    transition: background-color 0.6s ease-in-out;

    &:hover {
      background-color: ${color};
    }
    &:hover .arrow:after {
      animation: ${arrowMotion} 0.7s ease-in-out infinite;
    }
    @media (min-width: 960px) {
      font-size: 1rem;
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

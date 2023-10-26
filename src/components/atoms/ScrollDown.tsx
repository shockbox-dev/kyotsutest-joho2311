import { Link } from 'react-scroll'
import { css, keyframes, Theme } from '@emotion/react'

type Props = {
  label: string
  link: string
}

export const ScrollDown: React.FC<Props> = ({ label, link }) => {
  return (
    <div css={styles.container}>
      <Link to={link} smooth>
        <h3 css={styles.head}>{label}</h3>
      </Link>
    </div>
  )
}

const arrowVertical = keyframes`
  from {
		top: 70px;
		opacity: 1;
	}
	30% {
    top: 80px;
		opacity: 0;
	}
  50% {
    top: 40px;
    opacity: 0;
  }
	to {
		top: 70px;
		opacity: 1;
	}
`

const styles = {
  container: css`
    cursor: pointer;
    width: 100%;
    height: 100%;
  `,
  head: css`
    position: relative;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: white;
    letter-spacing: 0.05rem;
    &:after {
      position: absolute;
      content: '\f054\f054';
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      font-size: 15px;
      top: 30px;
      right: 14px;
      animation: ${arrowVertical} 1s ease-in infinite;
      transform: rotate(90deg);
    }
    @media (min-width: 960px) {
      font-size: 1.7rem;
      &:after {
        right: 28px;
        font-size: 20px;
      }
    }
  `,
}

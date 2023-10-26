import { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import { Link as Scroll } from 'react-scroll'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'

export const PageTop: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const getScroll = () => {
      const scroll = window.pageYOffset
      const height = document.body.clientHeight
      scroll > height - 1200 ? setScrolled(true) : setScrolled(false)
    }
    getScroll()
    window.addEventListener('scroll', getScroll)
    return () => {
      window.removeEventListener('scroll', getScroll)
    }
  }, [])

  return (
    <Scroll to='top' smooth={true}>
      <div css={styles.button} data-type={scrolled ? 'isActive' : null}>
        <DoubleArrowIcon css={styles.icon} />
      </div>
    </Scroll>
  )
}

const styles = {
  button: css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    &[data-type='isActive'] {
      visibility: visible;
      opacity: 1;
    }
    width: 40px;
    height: 40px;
    border: 2px solid rgba(35, 166, 184, 0.9);
    border-radius: 50%;
    bottom: 15%;
    right: 3%;
    background-color: white;
    transition: background-color 0.6s ease-in-out;
    &:hover {
      background-color: #e1ebee99;
    }
    @media (min-width: 960px) {
      bottom: 10%;
    }
  `,
  icon: css`
    position: relative;
    color: rgba(35, 166, 184, 0.9);
    transform: rotate(-90deg);
  `,
}

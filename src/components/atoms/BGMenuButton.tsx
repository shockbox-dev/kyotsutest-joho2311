import { useContext } from 'react'
import { css } from '@emotion/react'

import { BGMenuContext } from '~/context/BGMenuContext'

export const BGMenuButton = () => {
  const ctx = useContext(BGMenuContext)

  return (
    <>
      <div
        css={styles.ButtonContainer(ctx.isMenuOpen)}
        className={ctx.isMenuOpen ? 'open' : ''}>
        <button
          type='button'
          css={[styles.button, styles.hamburger]}
          aria-controls='global-nav'
          aria-expanded={ctx.isMenuOpen}
          onClick={() => ctx.toggleMenu()}>
          <span css={styles.hamburgerLine}>
            <span css={styles.visuallyHidden}>メニューを開閉する</span>
          </span>
        </button>
      </div>
    </>
  )
}

const styles = {
  ButtonContainer: (open: boolean) => css`
    position: fixed;
    z-index: 1300;
    display: inline-block;
    top: 15px;
    right: 23px;
    mix-blend-mode: ${open ? 'normal' : 'exclusion'};
  `,
  button: css`
    position: relative;
    display: inline-block;
    text-decoration: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  `,
  hamburger: css`
    z-index: 1300;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 30px;
    height: 30px;
    margin: auto;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255);
    outline: none;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.5);
    }
  `,
  hamburgerLine: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 14px;
    height: 2px;
    background-color: rgba(255, 255, 255);
    -webkit-transition: inherit;
    transition: inherit;
    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-color: inherit;
      -webkit-transition: inherit;
      transition: inherit;
    }
    &::before {
      top: -5px;
    }
    &::after {
      top: 5px;
    }
    button[aria-expanded='true'] & {
      background-color: transparent;
    }
    button[aria-expanded='true'] &::before,
    button[aria-expanded='true'] &::after {
      top: 0;
      background-color: rgba(255, 255, 255);
    }
    button[aria-expanded='true'] &::before {
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    button[aria-expanded='true'] &::after {
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
  `,
  visuallyHidden: css`
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: insset(50%);
  `,
}

import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        overflow-x: hidden;
      }
      * {
        font-family: 'Noto sans JP', 'Roboto', sans-serif;
        list-style: none;
        text-decoration: none;
        padding-inline-start: 0;
        margin-inline-start: 0;
        margin-block-start: 0;
        margin-block-end: 0;
      }
      .no-scroll {
        overflow-y: hidden;
        touch-action: none;
      }
    `}
  />
)

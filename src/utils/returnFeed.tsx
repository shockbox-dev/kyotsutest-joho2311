import React from 'react'

export const returnFeed = (text: string) => {
  const newText = text
    .split(/(\n)/)
    .map((text, idx) => (
      <React.Fragment key={idx}>
        {text.match(/\n/) ? <br /> : text}
      </React.Fragment>
    ))

  return newText
}

import React from 'react'

function AtTheBottomCenter ({ children }) {
  const css = {
    fontSize: '1.15rem',
    padding: '0.5em',
    position: 'absolute',
    right: 0,
    top: 0,
    textAlign: 'right',
  }

  return <nav css={css} aria-label={`Slide ${children[0]} of ${children[2]}`}>
    {children}
  </nav>
}

export default function Provider ({ children, ...props }) {
  return <>
    {children}
    <AtTheBottomCenter>{props.index}/{props.slides.length}</AtTheBottomCenter>
  </>
}

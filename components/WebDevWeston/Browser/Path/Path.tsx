import React from 'react'

interface PathProps {
  stroke: string
  fill: string
  d: string
  transform?: string
}

export const Path = ({ stroke, fill, d, transform = 'translate(0,0)' }: PathProps): JSX.Element => {
  return (
    <path style={{
      stroke,
      fill,
      strokeWidth: '0',
      strokeDasharray: 'none',
      strokeLinecap: 'butt',
      strokeDashoffset: '0',
      strokeLinejoin: 'miter',
      strokeMiterlimit: '4',
      fillRule: 'nonzero',
      opacity: '1'
    }}
    transform={transform}
    d={d}
    strokeLinecap = "round"
    />)
}

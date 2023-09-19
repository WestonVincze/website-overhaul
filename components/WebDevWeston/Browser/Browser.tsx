import React from 'react'
import { Path } from './Path'

interface BrowserProps {
  text?: string[]
  windowColor?: string
  windowBorderColor?: string
  headerColor?: string
  buttonColor?: string
  className?: string
}

export const Browser = ({
  text,
  windowColor = '#FFF',
  windowBorderColor = '#FD8469',
  headerColor = '#FD8469',
  buttonColor = '#FFF',
  className
}: BrowserProps): JSX.Element => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="222" height="170" viewBox="0 0 222 170" xmlSpace="preserve">
      <desc>Created by Weston Vincze with Fabric.js 5.3.0</desc>
      <g transform="matrix(0.9995634365 0 0 0.633358332 111 99.6665201212)" id="O2vKt5nSLoiPzihhf0CQG" >
        <Path
          stroke={windowBorderColor}
          fill={windowBorderColor}
          d="M -111.04848 -111.04848 L 111.04848 -111.04848 L 111.04848 96.92386 L 111.04848 96.92386 C 111.04848 104.72467 107.06049 111.04848000000001 102.14106 111.04848000000001 L -103.01493 111.04848000000001 L -103.01493 111.04848000000001 C -107.45174 111.04848000000001 -111.04849 105.34507 -111.04849 98.30956 z"
        />
      </g>
      <g transform="matrix(0.9095126765 0 0 0.5428785703 111.15713 99.6665201212)" id="jw1EvKsvSAjJ1kcpvlFJP" >
        <Path
          stroke={windowColor}
          fill={windowColor}
          d="M -111.04848 -111.04848 L 111.04848 -111.04848 L 111.04848 111.04848 L -111.04848 111.04848 z"
        />
      </g>
      <g transform="matrix(1.1271941844 0 0 0.2037087183 166.2222222222 15.071459974)" id="0TkQNYxfHNiB6afhMdadC" >
        <Path
          stroke={headerColor}
          fill={headerColor}
          d="M -49.48373 -49.32356 L 40.169000000000004 -49.32356 L 40.169000000000004 -49.32356 C 45.313390000000005 -49.32356 49.483740000000004 -26.13756 49.483740000000004 2.4638199999999983 L 49.483740000000004 49.32357 L -41.15144 49.32357 z"
        />
      </g>
      <g transform="matrix(-1.0217019037 0 0 0.2546358978 57.09028 12.5595499784)" id="KX-77GGEyuW6NCtTfU0tX" >
        <Path
          stroke={headerColor}
          fill={headerColor}
          d="M -43.92142 -49.32356 L 46.13062000000001 -49.32356 L 46.13062000000001 -49.32356 C 51.42880000000001 -49.32356 55.72383000000001 -32.00808 55.72383000000001 -10.648360000000004 L 55.72383000000001 49.32355999999999 L -55.723839999999996 49.32355999999999 z"
        />
      </g>
      <g transform="matrix(1 0 0 1.0047639983 13.0668617138 5.242479999)" id="ptT1hUJnW5lb5AJ7G2lU3" >
        <Path
          stroke={buttonColor}
          fill={buttonColor}
          d="M 7.31707 0 C 11.35609 0 14.63414 3.27805 14.63414 7.31707 C 14.63414 11.35609 11.35609 14.63414 7.31707 14.63414 C 3.2780500000000004 14.63414 0 11.35609 0 7.31707 C 0 3.2780500000000004 3.27805 0 7.31707 0 z"
        />
      </g>
      <g transform="matrix(1 0 0 1.0047639983 33.9055856269 5.2424756402)" id="JsAJzbHIehsTrHlS2205Z" >
        <Path
          stroke={buttonColor}
          fill={buttonColor}
          d="M 7.31707 0 C 11.35609 0 14.63414 3.27805 14.63414 7.31707 C 14.63414 11.35609 11.35609 14.63414 7.31707 14.63414 C 3.2780500000000004 14.63414 0 11.35609 0 7.31707 C 0 3.2780500000000004 3.27805 0 7.31707 0 z"
        />
      </g>
      <g transform="matrix(1 0 0 1.0047639983 56.09475016 5.242479999)" id="QDDxFsx-yCe86qi0vpPgG" >
        <Path
          stroke={buttonColor}
          fill={buttonColor}
          d="M 7.31707 0 C 11.35609 0 14.63414 3.27805 14.63414 7.31707 C 14.63414 11.35609 11.35609 14.63414 7.31707 14.63414 C 3.2780500000000004 14.63414 0 11.35609 0 7.31707 C 0 3.2780500000000004 3.27805 0 7.31707 0 z"
        />
      </g>
      <g>
        <rect
          x="10%"
          y="30%"
          width="80%"
          height="50%"
          stroke="none"
          fill="none"
        />
        <text
          x="50%"
          y="30%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="black"
          strokeWidth="1"
          fontSize="12"
        >
          {text?.map((t, i) =>
            (<tspan x="25%" dy={i === 0 ? '0' : '1em'} key={i}>{t}</tspan>))}
        </text>
      </g>
    </svg>
  )
}

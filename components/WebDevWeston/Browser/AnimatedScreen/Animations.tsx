import React from 'react'
/**
 * Code typing Animations that can be played within the
 * Browser component's screen. New lines are denoted with '|'
 * Limitations:
 * - 23 characters in length
 * - 7 lines
 */

/* MAX WIDTH----------| */
const html = `
<div class="card">|
  <h1>~~~ ~~~~~</h1>|
  <p>|
    ~~~ ~~~~ ~~~~~~~|
    ~~ ~~~~~ ~~~ ~~~|
  </p>|
</div>
`

/* MAX WIDTH----------| */
const css = `
.card {|
  ~~~: ~~~~;|
}|
.card h1, .card p {|
  ~~~~: ~~ ~~~ ~~~;|
  ~~~: ~~~~;|
}
`

/* MAX WIDTH----------| */
const js = `
const card = ~~.~~(~)|
|
card.~~~~~(() => |
  ~~ (!~~~) return|
  ~~~.~~~~('~~~~')|
  ~~~ ~~~~~~|
)
`

/* MAX WIDTH----------| */
const ts = `
interface CardProps {|
  ~~~~: ~~.~~~|
  ~~~: ~~~~~~|
  ~~~~~: ~~~[]|
  ~~~?: () => {}|
  ~~~~?: ~~~|
}
`

/* MAX WIDTH----------| */
const react = `
const Card = ((~~) => {|
  ~~~ [~~,~~] = ~~~()|
|
  return (<>{ ~~~ }</>)|
})|
|
export default Card;
`

export const Animations: Array<{ text: string, path: JSX.Element }> = [
  {
    text: html,
    path: <></>
  },
  {
    text: css,
    path: <></>
  },
  {
    text: js,
    path: <></>
  },
  {
    text: react,
    path: <></>
  },
  {
    text: ts,
    path: <></>
  }
]

/*
// Future design
const Animations = [
  // ANIMATION 1
  [
    // STEP 1
    {
      code: '',
      path: <></>
    },
    // STEP 2
    {
      code: '',
      path: <></>
    }
  ],
  // ANIMATION 2
  [
    // STEP 1
    {
      code: '',
      path: <></>
    },
    // STEP 2
    {
      code: '',
      path: <></>
    }
  ]
]
*/

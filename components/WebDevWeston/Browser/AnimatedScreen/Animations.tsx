import React from 'react'

/* MAX WIDTH---------| */
const helloWorld = `
<html>|
  <p>Hello World!</p>|
</html>`

const html = `
<html>|
  <head ---------- />|
  <body>|
    -----------------|
  </body>|
  <footer -------- />|
</html>|
`

const navBar = `
<nav>|
  <a ----- />|
  <a ----- />|
  <a ----- />|
</nav|
`

export const Animations: Array<{ text: string, path: JSX.Element }> = [
  {
    text: helloWorld,
    path: <></>
  },
  {
    text: html,
    path: <></>
  },
  {
    text: navBar,
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

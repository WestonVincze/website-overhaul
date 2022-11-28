import React from 'react'
// import styles from './PaperStack.module.css'
import { LinedPaper, LinedPaperProps } from './LinedPaper/LinedPaper'
import { useTrail, animated } from 'react-spring'

// hook should allow developer to create paper with addPaper()
// hook should return a list of papers
// hook can be used to add and remove elements on the fly (why?)
/*
export function usePaperStack (): JSX.Element {
  function addPaper (paper: LinedPaperProps): JSX.Element {
    return (<LinedPaper {...paper} />)
  }
  return (<></>)
}
*/

// phase 1: animate paper stack into frame from top
// phase 2: animate paper stack out of folder, off screen, then into frame.
// phase 3: reverse animations to put items away and take them out once user scrolls object out of screen from top

export function PaperStack ({ papers }: PaperStackProps): JSX.Element {
  // const [papers, setPapers] = useState([])
  // animations handeled here
  console.log(papers)

  // is it dangerous to use "papers.length" and access array directly?
  const trail = useTrail(papers.length, {
    // config: { duration: 600 },
    config: { mass: 10, tension: 3500, friction: 500 },
    loop: false,
    // loop: { reverse: true },
    delay: 200,
    to: { y: 0, x: 0 },
    from: { y: -1000, x: 200 }
  })

  return (<>
    {
      trail.map((styles, i) =>
        (<animated.div key={i} style={styles}>
          <LinedPaper key={i} {...papers[i]} />
        </animated.div>)
      )
    }
  </>)
}

interface PaperStackProps {
  papers: LinedPaperProps[] // change this to use an array of paper props
}

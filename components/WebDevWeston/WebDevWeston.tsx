import React from 'react'
import Image from 'next/image'
import { DragSnap } from '../Drag/DragSnap'
import styles from './WebDevWeston.module.css'
import webDevWestonGIF from '../../public/images/web-dev-weston.gif'

export const WebDevWeston = (): JSX.Element => {
  return (<DragSnap>
    <Image className={styles.gif} width={300} height={400} src={webDevWestonGIF} alt="Animated GIF of Weston 'web' developing" />
  </DragSnap>)
}

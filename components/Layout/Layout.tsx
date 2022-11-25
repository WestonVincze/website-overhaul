import React from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

export function Layout ({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

interface LayoutProps {
  children: JSX.Element
}

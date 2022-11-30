import React from 'react'
import { FolderBody } from '../FolderBody'
import { FolderTabs } from '../FolderTabs'
import { Footer } from '../Footer'
import { Header } from '../Header'

export function Layout ({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <FolderTabs tabs={[
        { id: 'skills', path: '/skills', text: 'Skills' },
        { id: 'resume', path: '/resume', text: 'Resume' },
        { id: 'home', path: '/' }
      ]} />
      <main>
        <FolderBody>{children}</FolderBody>
      </main>
      <Footer />
    </>
  )
}

interface LayoutProps {
  children: JSX.Element
}

import React from 'react'
import { FolderBody } from '../FolderBody'
import { FolderTabs } from '../FolderTabs'
import { Footer } from '../Footer'
import { Header } from '../Header'

interface LayoutProps {
  children: JSX.Element
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <FolderTabs tabs={[
        { id: 'skills', path: '/skills', text: 'SKILLS' },
        { id: 'resume', path: '/resume', text: 'RESUME' },
        { id: 'home', path: '/' }
      ]} />
      <main>
        <FolderBody>{children}</FolderBody>
      </main>
      <Footer />
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import './Header.css'
import './Footer.css'

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout

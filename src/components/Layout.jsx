import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header.jsx'
import { Footer } from './Footer/Footer.jsx'
import './Header/Header.css'
import './Footer/Footer.css'
import './Button/Button.css'

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

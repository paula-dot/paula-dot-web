import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import '../styles/main.css'

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
    </Routes>
  )
}


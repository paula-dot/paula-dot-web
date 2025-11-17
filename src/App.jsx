import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ProjectsPage} from "./pages/ProjectsPage.jsx";
import '../styles/main.css'

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
    </Routes>
  )
}


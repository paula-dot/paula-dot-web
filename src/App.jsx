import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import { HomePage } from './pages/HomePage/HomePage.jsx'
import { ProjectsPage} from "./pages/ProjectsPage/ProjectsPage.jsx";
import { AboutPage } from './pages/AboutPage/AboutPage.jsx'
import { ContactPage } from "./pages/ContactPage/ContactPage.jsx";
import '../styles/main.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

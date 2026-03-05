import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import App from './App.tsx'
import { Add } from './components/add/index.tsx'
import { Nav } from './components/nav/index.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/otus_live_lesson_react_march2026">
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>,
)

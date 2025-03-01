import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SideBar from './SideBar.tsx'
import Display from './Display.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SideBar />
    <Display />
  </StrictMode>,
)

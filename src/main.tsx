import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MyComponent from './SideBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyComponent />
  </StrictMode>,
)

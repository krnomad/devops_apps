import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DevOpsLandingPage from './DevOpsLandingPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevOpsLandingPage />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Zoosimulator from './Zoosimulator'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Zoosimulator/>
  </StrictMode>,
)

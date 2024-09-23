import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MiPrimeraApp } from './MiPrimeraApp.jsx'
import { MyUseStateApp } from './MyUseStateApp.jsx'
import { MyExampleApp } from './MyExampleApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyExampleApp valor={1}/>
  </StrictMode>,
)

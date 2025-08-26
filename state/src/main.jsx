import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import State from './State.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

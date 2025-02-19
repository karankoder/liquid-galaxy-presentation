import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.module.css'
import App from './App.jsx'

export const serverUrl = 'http://localhost:3000/api'
createRoot(document.getElementById('root')).render(
  <App />,
)

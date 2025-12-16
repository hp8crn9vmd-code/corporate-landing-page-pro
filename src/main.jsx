import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './features/NeoBrutalism/styles/neo-brutalism.css'
import './index.css' // For Tailwind directives

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

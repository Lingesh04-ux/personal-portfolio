import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ScrollProvider from './functions/ScrollContext.jsx'


createRoot(document.getElementById('root')).render(

  <ScrollProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ScrollProvider>

)

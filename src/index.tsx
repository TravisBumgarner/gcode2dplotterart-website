import React from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto-mono'
import '@fontsource/roboto'

import App from './App'

const root = createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Authprovider } from './context/Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Authprovider>
      <App />
    </Authprovider>
  </React.StrictMode>,
)

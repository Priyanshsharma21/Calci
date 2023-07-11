import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'antd/dist/antd.css'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { DhagaProvider } from '../src/context/dhagaContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DhagaProvider>
      <Router>
        <App />
      </Router>
    </DhagaProvider>
  </React.StrictMode>
)

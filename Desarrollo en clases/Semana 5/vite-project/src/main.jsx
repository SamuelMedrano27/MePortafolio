import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App1 from './App1.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <App1 />
    <App2 />
    <App3 />
    <App4 />
  </React.StrictMode>,
)

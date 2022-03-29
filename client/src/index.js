// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style/index.css';
// import App from './app';
import App from './App'
import React from 'react'
// import './styles/App.css'
import './styles/index.css'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
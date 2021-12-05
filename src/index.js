import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavProvider from './pages/Settings/NavContext'
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <React.StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


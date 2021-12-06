import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavProvider from './pages/Settings/NavContext'


ReactDOM.render(
  <React.StrictMode>
    <NavProvider>
      <App />
    </NavProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


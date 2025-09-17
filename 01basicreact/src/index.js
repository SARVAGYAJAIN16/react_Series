import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root')); // here this root is matching with file (index.html) in pulic folder(id = root)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './Context';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ThemeProvider>
     <App />
  </ThemeProvider>
  
);


reportWebVitals();

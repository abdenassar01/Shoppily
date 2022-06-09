import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './utils/scroll-to-top/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <ScrollToTop />
         <App />
     </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

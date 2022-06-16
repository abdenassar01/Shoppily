import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './utils/scroll-to-top/ScrollToTop';
import { QueryClientProvider, QueryClient  } from "react-query"


const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
     <BrowserRouter>
      <QueryClientProvider client={ queryClient }>
         <ScrollToTop />
         <App />
      </QueryClientProvider>
     </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

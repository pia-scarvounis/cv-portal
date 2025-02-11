import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
      <BrowserRouter> {/* wrapp hele appen i Router */}
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);

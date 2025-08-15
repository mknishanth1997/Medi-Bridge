import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './Medi-Bridge-App/Main-Full-Screen/User-View-Screen/Content-screen/Pending-Appointments/Pending-Form/pending-form.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './dashboard/dashboard.jsx';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

const publishableKey = 'pk_test_dXAtZHJha2UtMzAuY2xlcmsuYWNjb3VudHMuZGV2JA';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
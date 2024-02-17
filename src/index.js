import React from 'react';
import { createRoot } from 'react-dom/client'; // Ensure correct import for React 18
import './index.css';
import App from './App';
import { reportWebVitals } from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Find the root div in your index.html
const container = document.getElementById('root');

// Use the createRoot API for React 18
const root = createRoot(container);

// Render your App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Pass the reportWebVitals function to log or analyze performance metrics
reportWebVitals(console.log);

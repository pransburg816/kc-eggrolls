import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { reportWebVitals } from './reportWebVitals'; // Notice the curly braces around reportWebVitals
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pass the reportWebVitals function to start measuring performance in your app
reportWebVitals(console.log); // You can log the results to the console or send them to an analytics endpoint

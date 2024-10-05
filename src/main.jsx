import React from 'react';
import ReactDOM from 'react-dom/client';  // For modern React with React 18
import App from './App';  // Import your main App component
import './index.css';  // Import global styles if you have any

// Create a root element and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

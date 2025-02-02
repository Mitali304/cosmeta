import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Ensure you have this file in your src folder
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Create the root element and render the App inside it
const root = createRoot(document.getElementById('root'));  // Ensure this matches the ID in index.html
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

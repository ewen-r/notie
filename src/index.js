import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

// Link to the root Element.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root Element.
root.render(
  <div>
    <h1>Hello World</h1>
    <App />
  </div>
);

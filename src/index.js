import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

// Import createRoot from "react-dom/client" instead of "react-dom"
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);

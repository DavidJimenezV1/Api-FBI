// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tu CSS general de React
import './App.css';   // ¡Importa también App.css donde definiste tus variables CSS!
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './context/ThemeContext'; // <-- ¡IMPORTANTE: Importa el ThemeProvider!

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ¡IMPORTANTE: Envuelve tu componente App con ThemeProvider! */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Si quieres empezar a medir el rendimiento en tu aplicación, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o enviarlo a un punto final de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
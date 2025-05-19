import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de que este archivo exista
import App from './App';
import reportWebVitals from './reportWebVitals'; // Asegúrate de que este archivo exista

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// O, si no estás usando StrictMode, prueba con:
// root.render(
//   <App />
// );

// Si quieres medir el rendimiento de tu aplicación, pasa una función
// para registrar los resultados (por ejemplo, reportWebVitals(console.log))
// o envíalos a un punto final de análisis. Más información: https://bit.ly/CRA-vitals
reportWebVitals();
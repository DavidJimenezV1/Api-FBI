// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';   // Importa tu CSS global (donde se definen las variables del tema)
import './App.css';     // Asegúrate de importar App.css si también contiene estilos globales o variables.
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';   // Importa tu AuthProvider
import { ThemeProvider } from './context/ThemeContext'; // Importa tu ThemeProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ThemeProvider DEBE envolver a todos los componentes que necesitan el tema,
        incluyendo AuthProvider y App. Esto asegura que el contexto del tema
        esté disponible para toda la jerarquía de componentes. */}
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
// src/context/ThemeContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Crea el contexto. Es lo que tus componentes "consumirán".
const ThemeContext = createContext();

// 2. Crea el proveedor del contexto. Este componente envolverá tu aplicación
// y proporcionará el estado del tema y la función para cambiarlo.
export const ThemeProvider = ({ children }) => {
  // Estado para almacenar el tema actual ('light' o 'dark').
  // Intentamos leerlo de localStorage para que persista entre sesiones.
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'light'; // Por defecto es 'light'
  });

  // Efecto secundario que se ejecuta cada vez que 'theme' cambia.
  // Se encarga de añadir/quitar la clase 'dark-mode' al <body>.
  useEffect(() => {
    // Si el tema es 'dark', añade la clase 'dark-mode'; de lo contrario, quítala.
    document.body.className = theme === 'dark' ? 'dark-mode' : '';
    // Guarda la preferencia del tema en localStorage para futuras visitas.
    localStorage.setItem('theme', theme);
  }, [theme]); // Dependencia: este efecto se re-ejecuta cuando 'theme' cambia.

  // Función para alternar el tema de 'light' a 'dark' y viceversa.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Provee el estado del tema y la función toggleTheme a sus hijos.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Esto representa los componentes que el ThemeProvider envuelve */}
    </ThemeContext.Provider>
  );
};

// 3. Hook personalizado para que los componentes puedan acceder fácilmente al tema.
// Esto es un atajo para no tener que importar useContext y ThemeContext en cada componente.
export const useTheme = () => useContext(ThemeContext);
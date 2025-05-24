import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Inicializa el tema: intenta obtenerlo de localStorage; si no existe, usa 'light' como predeterminado.
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Asegúrate de que el tema guardado sea 'light' o 'dark', por si hay un valor inválido
    return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'light';
  });

  // Efecto secundario que se ejecuta cada vez que 'theme' cambia.
  // Se encarga de aplicar la clase 'light' o 'dark' al body del documento.
  useEffect(() => {
    // Esto es CRUCIAL. Aplica la clase correcta al <body>
    document.body.className = theme; // El CSS global (index.css/App.css) reaccionará a esta clase.
    localStorage.setItem('theme', theme); // Guarda la preferencia del tema en localStorage.
  }, [theme]); // Dependencia: este efecto se re-ejecuta cuando 'theme' cambia.

  // Función para alternar el tema entre 'light' y 'dark'.
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // El proveedor del contexto hace que 'theme' y 'toggleTheme' estén disponibles para todos los componentes hijos.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Esto representa los componentes que el ThemeProvider envuelve */}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para que los componentes puedan acceder fácilmente al tema.
export const useTheme = () => useContext(ThemeContext);
import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Importa el hook para acceder al tema
import styles from './Header.module.css'; // Importa tus estilos CSS Modules para el Header
import { Sun, Moon } from 'lucide-react'; // Importa los iconos de lucide-react (asegúrate de tener 'lucide-react' instalado)

function Header() {
  const { theme, toggleTheme } = useTheme(); // Obtiene el tema actual y la función para cambiarlo

  return (
    // Aplica la clase del tema al elemento <header> para que sus estilos CSS se adapten
    <header className={`${styles.header} ${theme}`}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>FBI Data Explorer</h1> {/* O el título que prefieras */}
        <p className={styles.subtitle}>Explore public data from the FBI</p> {/* O un subtítulo */}
      </div>
      <button
        onClick={toggleTheme}
        className={styles.themeToggle} // Aplica los estilos definidos en Header.module.css
      >
        {/* Muestra el icono de luna si el tema actual es claro, y el sol si es oscuro */}
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
      </button>
      {/* Puedes añadir más elementos a tu cabecera aquí */}
    </header>
  );
}

export default Header;
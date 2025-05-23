// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.css';
import { useTheme } from '../../context/ThemeContext'; // Importa el hook de tema

const Header = () => {
  const { theme, toggleTheme } = useTheme(); // Usa el hook

  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>FBI Data Explorer</h1> {/* O el título que prefieras */}
        <p className={styles.subtitle}>Explore public data from the FBI</p> {/* O un subtítulo */}
      </div>
      <button
        onClick={toggleTheme}
        className={styles.themeToggle} // Aplica los estilos definidos en Header.module.css
      >
        {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
      </button>
    </header>
  );
};

export default Header;
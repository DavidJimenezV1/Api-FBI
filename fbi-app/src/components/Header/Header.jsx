import React from 'react';
import styles from './Header.module.css'; // Importa el archivo de estilos CSS Module

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>FBI Most Wanted</h1>
    </header>
  );
};

export default Header;
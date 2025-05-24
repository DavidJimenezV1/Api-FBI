import React from 'react';
import styles from './Footer.module.css'; // Importa tus estilos CSS Modules para el Footer

const Footer = () => {
  return (
    // Aplica la clase del tema al footer
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} FBI Data Explorer</p>
    </footer>
  );
};

export default Footer;
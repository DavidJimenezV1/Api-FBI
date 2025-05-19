import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link to="/most-wanted" className={styles.navItem}>
        Más Buscados
      </Link>
      <Link to="/crimes" className={styles.navItem}>
        Crímenes
      </Link>
      <Link to="/favorites" className={styles.navItem}>
        Favoritos
      </Link>
      <Link to="/" className={styles.navItem}>
        Buscar
      </Link>
    </nav>
  );
};

export default NavBar;
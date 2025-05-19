import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link to="/most-wanted" className={styles.navItem}>
        Más Buscados
      </Link>
      <Link to="/fugitives" className={styles.navItem}>
        Fugitivos
      </Link>
      <Link to="/crimes" className={styles.navItem}>
        Crímenes
      </Link>
      <Link to="/news-alerts" className={styles.navItem}>
        Noticias
      </Link>
      <Link to="/favorites" className={styles.navItem}>
        Favoritos
      </Link>
      <Link to="/" className="navItem">
        Buscar
      </Link>
    </nav>
  );
};

export default NavBar;

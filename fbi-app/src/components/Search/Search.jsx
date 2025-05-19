import React, { useState } from 'react';
import styles from './Search.module.css';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className={styles.searchButton}>Buscar</button>
    </form>
  );
};

export default Search; // ✅ Correcto
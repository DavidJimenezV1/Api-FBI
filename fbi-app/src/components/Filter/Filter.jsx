import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ onFilterChange, filters }) => {
  const handleFilterChange = (event) => {
    onFilterChange({ [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="sex" className={styles.filterLabel}>
        Género:
        <select
          name="sex"
          id="sex"
          className={styles.filterSelect}
          value={filters.sex || ''}
          onChange={handleFilterChange}
        >
          <option value="">Todos</option>
          <option value="Male">Masculino</option>
          <option value="Female">Femenino</option>
          {/* Agrega más opciones si la API proporciona otros géneros */}
        </select>
      </label>

      {/* Aquí puedes agregar más filtros (por raza, categoría, etc.) */}
    </div>
  );
};

export default Filter; // ✅ Correcto
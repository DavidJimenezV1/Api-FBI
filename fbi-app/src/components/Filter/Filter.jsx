import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ onFilterChange, filters }) => {
  const handleFilterChange = (event) => {
    onFilterChange({ [event.target.name]: event.target.value });
  };

  // Aquí deberías obtener las categorías únicas de la API para popular el select
  const crimeCategories = ['Todos', 'Violent Crime', 'White-Collar Crime', 'Cyber Crime', 'Terrorism', /* ... otras categorías ... */];

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
          {/* Podríamos agregar más opciones */}
        </select>
      </label>

      {/* Nuevo filtro para la categoría del crimen */}
      <label htmlFor="subjects" className={styles.filterLabel}>
        Categoría:
        <select
          name="subjects"
          id="subjects"
          className={styles.filterSelect}
          value={filters.subjects || ''}
          onChange={handleFilterChange}
        >
          <option value="">Todas</option>
          {crimeCategories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>

      {/* Aquí puedes agregar más filtros en el futuro */}
    </div>
  );
};

export default Filter;
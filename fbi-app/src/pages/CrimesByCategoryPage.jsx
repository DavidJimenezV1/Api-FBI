import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading/Loading';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';

const CrimesByCategoryPage = () => {
  const apiUrl = 'https://api.fbi.gov/wanted/v1/list';  // Reemplazar con la URL correcta
  const { data, loading, error } = useFetch(apiUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para el filtro de categoría

  useEffect(() => {
    if (data) {
      let filtered = [...data];

      // Aplica el filtro de categoría
      if (selectedCategory) {
        filtered = filtered.filter(item =>
          item.subjects && item.subjects.includes(selectedCategory)
        );
      }

      // Luego filtra por el término de búsqueda
      if (searchTerm) {
        filtered = filtered.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      setSearchResults(filtered);
    }
  }, [data, searchTerm, selectedCategory]);  // Depende de data, searchTerm y selectedCategory

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Obtiene todas las categorías únicas de los datos
  const categories = Array.from(new Set(data?.flatMap(item => item.subjects || []) || []));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <div>
      <h1>Crímenes del FBI por Categoría</h1>
      <Search onSearch={handleSearch} />
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="">Todas las Categorías</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {searchTerm
        ? searchResults.map(item => <Card key={item.uid} item={item} />)
        : searchResults.length > 0
        ? searchResults.map(item => <Card key={item.uid} item={item} />)
        : data && data.map(item => <Card key={item.uid} item={item} />)}
    </div>
  );
};

export default CrimesByCategoryPage;
import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading/Loading';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search';
import Filter from '../components/Filter/Filter';

const MostWantedPage = () => {
  const apiUrl = 'https://api.fbi.gov/wanted/v1/list';
  const { data, loading, error } = useFetch(apiUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      let filtered = [...data];

      // Aplica los filtros
      for (const key in filters) {
        if (filters[key]) {
          filtered = filtered.filter(item =>
            item[key] && String(item[key]).toLowerCase() === filters[key].toLowerCase()
          );
        }
      }
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [data, filters]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <div>
      <h1>Más Buscados del FBI</h1>
      <Search onSearch={handleSearch} />
      <Filter onFilterChange={handleFilterChange} filters={filters} />
      {searchTerm ? (
        searchResults.map(item => <Card key={item.uid} item={item} />)
      ) : (
        data && data.map(item => <Card key={item.uid} item={item} />)
      )}
    </div>
  );
};

export default MostWantedPage;
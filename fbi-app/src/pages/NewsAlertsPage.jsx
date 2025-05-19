import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading/Loading';
import Card from '../components/Card/Card';
import Search from '../components/Search/Search'; // Importa el componente Search

const NewsAlertsPage = () => {
  const apiUrl = 'https://api.fbi.gov/wanted/v1/pressreleases'; // Reemplaza con la URL correcta

  const { data, loading, error } = useFetch(apiUrl);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [data, searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  return (
    <div>
      <h1>Noticias y Alertas del FBI</h1>
      <Search onSearch={handleSearch} />
      {searchTerm ? (
        searchResults.map(item => (
          <Card key={item.id} item={item} />
        ))
      ) : (
        data &&
        data.map(item => (
          <Card key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default NewsAlertsPage;
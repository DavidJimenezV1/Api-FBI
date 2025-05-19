import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';
import Loading from '../components/Loading/Loading';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        // Si los favoritos se guardaron como IDs, obtén la información completa aquí
        if (parsedFavorites.length > 0 && typeof parsedFavorites[0] === 'string') {
          // Aquí deberías obtener la información de la API usando los IDs guardados
          // Ejemplo (necesitas adaptarlo a tu API):
          const fetchFavorites = async () => {
            setLoading(true);
            const fetchedFavorites = [];
            for (const id of parsedFavorites) {
              // Suponiendo que tienes una función para obtener un elemento por ID
              // Y que la URL para obtener un objeto por id es:  https://api.fbi.gov/wanted/v1/list/{id}
              const response = await fetch(`https://api.fbi.gov/wanted/v1/list/${id}`);
              const data = await response.json();
              if (data.items && data.items.length > 0) {
                fetchedFavorites.push(data.items[0]);
              }
            }
            setFavorites(fetchedFavorites);
            setLoading(false);
          };
          fetchFavorites();
        } else {
          setFavorites(parsedFavorites);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error al analizar favoritos:', error);
        setFavorites([]);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">No hay favoritos</h1>
        <p className="text-gray-500 mb-6">
          Agrega elementos a tus favoritos para verlos aquí.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>Mis Favoritos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map(item => (
          <Card key={item.uid} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;

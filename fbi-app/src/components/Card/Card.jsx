import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Heart, HeartOff } from 'lucide-react';

const Card = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Comprueba si el elemento está en la lista de favoritos al cargar la tarjeta
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      setIsFavorite(favorites.some(favItem => favItem.id === item.id));
    }
  }, [item.id]);

  const toggleFavorite = () => {
    // Agrega o elimina el elemento de la lista de favoritos
    const storedFavorites = localStorage.getItem('favorites');
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    if (isFavorite) {
      favorites = favorites.filter(favItem => favItem.id !== item.id);
    } else {
      favorites.push(item);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {item.images && item.images[0] && (
        <img src={item.images[0].thumb} alt={item.title} className={styles.cardImage} />
      )}
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardDetails}>{item.description}</p>
      <button  // Cambiado a un botón HTML estándar
        onClick={toggleFavorite}
        className={styles.favoriteButton}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? <HeartOff className="h-5 w-5" /> : <Heart className="h-5 w-5" />}
      </button>
    </div>
  );
};

export default Card;
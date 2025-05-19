import React from 'react';
import styles from './Card.module.css';

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      {item.images && item.images[0] && (
        <img src={item.images[0].thumb} alt={item.title} className={styles.cardImage} />
      )}
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardDetails}>{item.description}</p>
      {/* Puedes agregar más información del 'item' aquí */}
    </div>
  );
};

export default Card;
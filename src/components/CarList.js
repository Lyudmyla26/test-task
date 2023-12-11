
import { useState } from "react";
import { CarItem } from "./CarItem";
import { CarListe,  Items } from "./CarList.styled";

export const CarList = ({ items }) => {
 const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const handleToggleFavorite = (id) => {
    if (favorites.includes(id)) {
      const updatedFavorites = favorites.filter((favoriteId) => favoriteId !== id);
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, id];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };
  return (
    <CarListe>
      {items.map(item => (
        <Items key={item.id}>
          <CarItem favorite={() => handleToggleFavorite(item.id)}  item={item} isFavorite={favorites.includes(item.id)} />
        </Items>
      ))}
    </CarListe>
  );
};
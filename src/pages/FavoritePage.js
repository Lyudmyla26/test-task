import { useEffect, useState } from "react";
import { fetchQuizById } from "../axios/api";
import { CarList } from "../components/CarList";

const FavoritePage = () => {
     const [carItems, setCarItems] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteIds(favorites);
  }, []);
  useEffect(() => {
    async function getQuizzes() {
      try {
          const carItems = await Promise.all(favoriteIds.map(async(id) => fetchQuizById(id) )) 
        setCarItems(carItems);
      } catch (error) {
        console.log(error);
      }
    }
    getQuizzes();
  }, [favoriteIds]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteIds(favorites);
  }, []);

  return <div><CarList items={carItems} /></div>;
};
export default FavoritePage;
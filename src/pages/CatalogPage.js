import { useEffect, useState } from "react";
import { fetchCar } from "../axios/api";
import { CarList } from "../components/CarList";
import { Filter } from "../components/Filter.js";
import make from "../makes.json";
import ButtonLoadnMore from "../components/ButtonLoadMore.js";

const CatalogPage = () => {
  const [carItems, setCarItems] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [visibleAds, setVisible] = useState(12);
 
  

  useEffect(() => {
    async function getQuizzes() {
      try {
        const carItems = await fetchCar();
        setCarItems(carItems);
        setFilteredCars(carItems); 
        console.log( carItems);
      } catch (error) {
        console.log(error);
      }
    }
    getQuizzes();
  }, []);
  const handleFilterChange = (selectedBrand) => {
    const filteredCars = carItems.filter((car) => !selectedBrand || car.make === selectedBrand);
    setFilteredCars(filteredCars);
  };
    const loadMore = () => {
  
    setVisible((prevVisible) => prevVisible + 12);
  };
  

 

  return (
    <>
      <Filter makes={make} carItems={carItems} onFilterChange={handleFilterChange} />
      <CarList items={filteredCars.slice(0, visibleAds)}  />
      {visibleAds < carItems.length && <ButtonLoadnMore onClick={loadMore}/>}

     
    </>
  );
};

export default CatalogPage;
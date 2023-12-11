
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Inpute } from './Filter.styled';

export const Filter = ({ makes, carItems, onFilterChange }) => {
  const [selectedBrand, setSelectedBrand] = useState('');

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    onFilterChange(brand);
  };

  return (
    <>
      <Inpute>
        Car brand
        <select value={selectedBrand} onChange={handleBrandChange}>
          <option value="">ALL</option>
          {makes.map((brand) => (
            <option key={nanoid()} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </Inpute>
    </>
  );
};
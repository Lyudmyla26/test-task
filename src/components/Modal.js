import { useEffect } from "react";
import placeholder from "../img/Placeholder.png"
import { Backdrop, Close, Descriptions, Image, Modale, Model} from "./Modal.styled";
import { Button } from "./CarItem.styled";

export const Modal = ({ item, closeModal }) => {
    const { make, model, year, rentalPrice, engineSize, fuelConsumption, functionalities, mileage, rentalConditions, accessories, description, img, address, type, id} = item;
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    };
 const handleImageError = (event) => {
    event.target.src = placeholder;
  };
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    const handleCloseModal = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
    const numbers = (number) => {
    return new Intl.NumberFormat().format(number);
  };
    
  return (
    <Backdrop  onClick={handleCloseModal}>
          <Modale>
           
        <Close type="button" onClick={closeModal}>
           X
				</Close>
              <Image
            src={img || placeholder}
            alt="авто"
        width={408}
        onError={handleImageError}
          />
        <h2>{make} <Model>{model}</Model>, {year}</h2>
              <Descriptions> {address} | id:{id} | Year:{year} | Type:{type} | Fuel Consumption:{fuelConsumption
} | Engine Size:{engineSize}</Descriptions>
              <p>{description}</p>
              <h3>Accessories and functionalities:</h3>
              <Descriptions>{accessories.join(" | ")} {functionalities.join(" | ")}</Descriptions>
              <h3>Rental Conditions:</h3>
              <p>{rentalConditions}</p>
              <p>Mileage:{numbers(mileage) }</p>
              <p>Prise:{rentalPrice}</p>
     <Button href="tel:+380730000000">Rental car</Button>
      </Modale>
    </Backdrop>
  );
};
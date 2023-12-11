
import { useState } from "react";
import placeholder from "../img/Placeholder.png"
import '../App.css';
import { Modal } from "./Modal";
import { CiHeart } from "react-icons/ci";
import { Button, Container, Descriotion, Icons, Name, Prise, Title } from "./CarItem.styled";
export const CarItem = ({item, favorite, isFavorite
}) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleImageError = (event) => {
    event.target.src = placeholder;
  };
  return (
    <div>
      <Container>
          <img
            src={item.img || placeholder}
            alt="авто"
        width={260}
        height={200}
        onError={handleImageError}
      />
      <Icons onClick={favorite} style={{ color: isFavorite ? 'red' : 'black' }} ><CiHeart /></Icons>
 </Container>
      <Title>
      <Name>{item.make}, {item.year}{item.id}</Name>
          <Prise>{item.rentalPrice}</Prise>
          </Title>
      <Descriotion>{item.type} | {item.model} | {item.mileage} | {item.rentalCompany} | {item.accessories[0]} | { item.address}</Descriotion>
        <Button type="button" onClick={openModal}>Learn more</Button>
      
      {isModalOpen && (
        <Modal item={item} closeModal={closeModal} />)}
    </div>
  );
};
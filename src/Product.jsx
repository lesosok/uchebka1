import { useParams } from "react-router-dom";
import { useContext } from "react";
import { KorzinaContext } from "./Korzina";

function Product() {
  const { id } = useParams(); // достаём id из URL
  const { addToKorzina } = useContext(KorzinaContext); // берём функцию из контекста

  const handleAddToKorzina = () => {
    addToKorzina(`Товар ${id}`); // добавляем товар по его id
  };

  return (
    <div>
      <h2>Товар с ID: {id}</h2>
      <button onClick={handleAddToKorzina}>+</button>
    </div>
  );
}

export default Product;
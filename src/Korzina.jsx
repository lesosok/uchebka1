import { createContext, useState, useContext } from "react";

export const KorzinaContext = createContext();

export const KorzinaProvider = ({ children }) => {
  const [korzina, setKorzina] = useState([]);

  const addToKorzina = (productName) => {
    setKorzina((prevKorzina) => [...prevKorzina, productName]);
  };

  return (
    <KorzinaContext.Provider value={{ korzina, addToKorzina }}>
      {children}
    </KorzinaContext.Provider>
  );
};

export function Korzina() {
  const { korzina } = useContext(KorzinaContext);

  const content = korzina.length ? korzina.join(", ") : "";

  return (
    <div>
      <h2>Товары в корзине: {content}</h2>
    </div>
  );
}

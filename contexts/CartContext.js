import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  return <CartContext.Provider value={[cart, setCart]} {...props} />;
};

export const useCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeItemFromCart = (item) => {
    setCart(cart.filter((iterItem) => iterItem.product_id != item.product_id));
  };
  return {
    cart: cart,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
  };
};

import { createContext, useState, useContext } from "react";
import CartModal from "./components/CartModal.jsx";

const itemContext = createContext();

function useValue() {
  const value = useContext(itemContext);
  return value;
}

function CustomItemContext({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [cart, setCart] = useState([]);  // cart array
  const [showCart, setShowCart] = useState(false);

  const handleAdd = (price, name) => {
    setTotal(total + price);
    setItem(item + 1);

    const index = cart.findIndex((item) => item.name === name);

    if(index !== -1)
    {
      cart[index].qty++;
      setCart(cart);
    }
    else {
      setCart([...cart, {price, name, qty:1}]);
    }
  };

  const handleRemove = (price, name) => {
    if (total <= 0) {
      return;
    }

    const index = cart.findIndex((item) => item.name === name);

    if(index !== -1 && cart[index].qty > 1)
    {
      cart[index].qty--;
      setCart(cart);
      setTotal(total-price);
      setItem(item - 1);
    }
    else if(index !== -1 && cart[index].qty === 1)
    {
      cart.splice(index, 1);
      setTotal(total-price);
      setItem(item - 1);
    }

  };

  const clear = () => {
    setTotal(0);
    setItem(0);
    setCart([]);
  };

  const toggle = () => {
    setShowCart(!showCart);
  }


  return (
    <itemContext.Provider
      value={{ total, item, handleAdd, handleRemove, clear, toggle, cart}}
    >
      {showCart ? <CartModal />:undefined}
      {children}
    </itemContext.Provider>
  );
}

export { useValue };
export default CustomItemContext;

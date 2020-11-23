import React, { useReducer, useEffect, useContext } from "react";
import cartReducer from "./cartReducer";

const CartContext = React.createContext(null);

let initialCart;
try {
  initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  console.error("The cart could not be parsed into JSON.");
  initialCart = [];
}

export function CartProvider(props) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  const contextValue = { cart, dispatch };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

// Custom hook in order to consume easier the context hook
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCart must be used within a CartProvider, wrap a parent component in a <CartProvider> to fix this error"
    );
  }
  return context;
}

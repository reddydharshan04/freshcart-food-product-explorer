import { useContext } from "react";
import { ShoppingContext } from "./shoppingStore";

export function useShopping() {
  const context = useContext(ShoppingContext);
  if (!context) throw new Error("useShopping must be used inside ShoppingProvider");
  return context;
}
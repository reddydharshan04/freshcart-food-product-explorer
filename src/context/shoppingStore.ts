import { createContext } from "react";

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface ShoppingContextValue {
  cart: CartItem[];
  cartCount: number;
  savedIds: number[];
  addToCart: (productId: number, quantity?: number) => void;
  changeQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  toggleSaved: (productId: number) => void;
  isSaved: (productId: number) => boolean;
}

export const ShoppingContext = createContext<ShoppingContextValue | null>(null);
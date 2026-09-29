import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { PRODUCTS } from "../services/api";
import { ShoppingContext } from "./shoppingStore";
import type { CartItem } from "./shoppingStore";

const CART_KEY = "freshcart-cart";
const SAVED_KEY = "freshcart-saved";

function readCart(): CartItem[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(CART_KEY) ?? "[]");
    if (!Array.isArray(value)) return [];
    return value.filter((item): item is CartItem =>
      Number.isInteger(item?.productId) &&
      PRODUCTS.some((product) => product.id === item.productId) &&
      Number.isInteger(item?.quantity) && item.quantity > 0,
    );
  } catch {
    return [];
  }
}

function readSavedIds(): number[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(SAVED_KEY) ?? "[]");
    if (!Array.isArray(value)) return [];
    return value.filter((id): id is number =>
      Number.isInteger(id) && PRODUCTS.some((product) => product.id === id),
    );
  } catch {
    return [];
  }
}

export function ShoppingProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState(readCart);
  const [savedIds, setSavedIds] = useState(readSavedIds);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(SAVED_KEY, JSON.stringify(savedIds));
    } catch {}
  }, [savedIds]);

  const addToCart = (productId: number, quantity = 1) => {
    const product = PRODUCTS.find((item) => item.id === productId);
    if (!product || quantity < 1) return;
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) => item.productId === productId
          ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
          : item);
      }
      return [...current, { productId, quantity: Math.min(quantity, product.stock) }];
    });
  };

  const changeQuantity = (productId: number, quantity: number) => {
    const product = PRODUCTS.find((item) => item.id === productId);
    if (!product) return;
    setCart((current) => current.map((item) => item.productId === productId
      ? { ...item, quantity: Math.max(1, Math.min(quantity, product.stock)) }
      : item));
  };

  const removeFromCart = (productId: number) => {
    setCart((current) => current.filter((item) => item.productId !== productId));
  };

  const toggleSaved = (productId: number) => {
    setSavedIds((current) => current.includes(productId)
      ? current.filter((id) => id !== productId)
      : [...current, productId]);
  };

  return (
    <ShoppingContext.Provider value={{
      cart,
      cartCount: cart.reduce((total, item) => total + item.quantity, 0),
      savedIds,
      addToCart,
      changeQuantity,
      removeFromCart,
      clearCart: () => setCart([]),
      toggleSaved,
      isSaved: (productId) => savedIds.includes(productId),
    }}>
      {children}
    </ShoppingContext.Provider>
  );
}
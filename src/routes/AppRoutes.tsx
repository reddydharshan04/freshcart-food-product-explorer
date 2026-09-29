import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ProductDetailsPage } from "../pages/ProductDetailsPage";
import { CartPage } from "../pages/CartPage";
import { SavedProductsPage } from "../pages/SavedProductsPage";
import { ProductsPage } from "../pages/ProductsPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/saved" element={<SavedProductsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

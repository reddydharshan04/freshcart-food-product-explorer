import { Link } from "react-router-dom";
import { ProductList } from "../components/ProductList";
import { useShopping } from "../context/useShopping";
import { PRODUCTS } from "../services/api";

export function SavedProductsPage() {
  const { savedIds } = useShopping();
  const products = savedIds
    .map((id) => PRODUCTS.find((product) => product.id === id))
    .filter((product) => product !== undefined);

  return (
    <main className="container saved-page">
      <Link to="/products" className="back-link">← Back to shop</Link>
      <div className="cart-heading">
        <div><span className="eyebrow">YOUR SHORTLIST</span><h1>Saved items</h1></div>
        <span>{products.length} items</span>
      </div>
      {products.length ? (
        <ProductList products={products} />
      ) : (
        <section className="cart-message">
          <span className="cart-message-icon">♡</span>
          <h2>Nothing saved yet</h2>
          <p>Use the heart on a product to keep it here for later.</p>
          <Link className="btn" to="/products">Explore products <span>→</span></Link>
        </section>
      )}
    </main>
  );
}
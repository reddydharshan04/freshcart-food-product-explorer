import { useState } from "react";
import { Link } from "react-router-dom";
import { useShopping } from "../context/useShopping";
import { PRODUCTS } from "../services/api";
import { formatPrice, getDiscountedPrice } from "../utils/format";

export function CartPage() {
  const { cart, changeQuantity, removeFromCart, clearCart } = useShopping();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const items = cart.flatMap((item) => {
    const product = PRODUCTS.find((entry) => entry.id === item.productId);
    return product ? [{ ...item, product }] : [];
  });
  const subtotal = items.reduce(
    (total, item) => total + getDiscountedPrice(item.product.price, item.product.discountPercentage) * item.quantity,
    0,
  );

  if (orderPlaced) {
    return (
      <main className="container cart-page">
        <section className="cart-message" aria-live="polite">
          <span className="cart-message-icon">✓</span>
          <p className="eyebrow">DEMO ORDER COMPLETE</p>
          <h1>Thanks for shopping FreshCart.</h1>
          <p>Your demo order has been recorded in this session. No payment was collected.</p>
          <Link className="btn" to="/products">Continue shopping <span>→</span></Link>
        </section>
      </main>
    );
  }

  return (
    <main className="container cart-page">
      <Link to="/products" className="back-link">← Continue shopping</Link>
      <div className="cart-heading">
        <div><span className="eyebrow">YOUR ORDER</span><h1>Your basket</h1></div>
        <span>{items.reduce((count, item) => count + item.quantity, 0)} items</span>
      </div>

      {items.length === 0 ? (
        <section className="cart-message">
          <span className="cart-message-icon">🛒</span>
          <h2>Your basket is empty</h2>
          <p>Pick something fresh for your table.</p>
          <Link className="btn" to="/products">Explore products <span>→</span></Link>
        </section>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map(({ product, quantity }) => {
              const price = getDiscountedPrice(product.price, product.discountPercentage);
              return (
                <article className="cart-item" key={product.id}>
                  <Link to={`/products/${product.id}`} className="cart-item-image">
                    <img src={product.thumbnail} alt={product.title} />
                  </Link>
                  <div className="cart-item-info">
                    <span className="badge">{product.category.replaceAll("-", " ")}</span>
                    <h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
                    <span className="cart-unit-price">{formatPrice(price)} each</span>
                    <div className="quantity-control" aria-label={`Quantity for ${product.title}`}>
                      <button type="button" aria-label={`Decrease ${product.title} quantity`} disabled={quantity <= 1} onClick={() => changeQuantity(product.id, quantity - 1)}>−</button>
                      <span aria-live="polite">{quantity}</span>
                      <button type="button" aria-label={`Increase ${product.title} quantity`} disabled={quantity >= product.stock} onClick={() => changeQuantity(product.id, quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-end">
                    <strong>{formatPrice(price * quantity)}</strong>
                    <button type="button" className="remove-item" onClick={() => removeFromCart(product.id)}>Remove</button>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="cart-summary">
            <h2>Order summary</h2>
            <div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div><span>Delivery</span><strong>Free</strong></div>
            <div className="cart-total"><span>Total</span><strong>{formatPrice(subtotal)}</strong></div>
            <button type="button" className="checkout-button" onClick={() => { clearCart(); setOrderPlaced(true); }}>Place demo order</button>
            <p>Demo checkout only. No payment or delivery is arranged.</p>
          </aside>
        </div>
      )}
    </main>
  );
}
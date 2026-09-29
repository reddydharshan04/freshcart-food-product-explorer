import { Link, Outlet, useLocation } from "react-router-dom";
import { useShopping } from "../context/useShopping";

export function Layout() {
  const location = useLocation();
  const { cartCount, savedIds } = useShopping();
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/products" className="logo"><span className="logo-mark">F</span><span>fresh<span className="logo-accent">cart</span></span></Link>
          <nav className="main-nav" aria-label="Primary navigation">
            <Link className={location.pathname === "/products" ? "active" : ""} to="/products">Shop</Link>
            <Link to="/products#categories">Categories</Link>
            <Link to="/products#about">Why FreshCart</Link>
          </nav>
          <div className="header-actions">
            <Link className="icon-button" to="/products#shop" aria-label="Search products">⌕</Link>
            <Link className="saved-button" to="/saved" aria-label={`Saved items, ${savedIds.length} items`}>♡ <span>{savedIds.length}</span></Link>
            <Link className="cart-button" to="/cart" aria-label={`Cart, ${cartCount} items`}>🛒 <span>{cartCount}</span></Link>
          </div>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer"><div className="container footer-inner"><strong>fresh<span className="logo-accent">cart</span></strong><span>Fresh food, thoughtfully delivered.</span><span>© 2026 FreshCart</span></div></footer>
    </div>
  );
}

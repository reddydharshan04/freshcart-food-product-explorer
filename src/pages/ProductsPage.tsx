import { useMemo, useState } from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { EmptyState } from "../components/EmptyState";
import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { ProductList } from "../components/ProductList";
import { RatingFilter } from "../components/RatingFilter";
import { SearchBar } from "../components/SearchBar";
import { useProducts } from "../hooks/useProducts";
import { filterProducts, getCategories } from "../utils/filterProducts";

export function ProductsPage() {
  const { products, loading, error, retry } = useProducts();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [minRating, setMinRating] = useState(0);
  const categories = useMemo(() => getCategories(products), [products]);
  const visibleProducts = useMemo(() => filterProducts(products, { query, category, minRating }), [products, query, category, minRating]);
  const hasActiveFilters = query !== "" || category !== "all" || minRating !== 0;
  const clearFilters = () => { setQuery(""); setCategory("all"); setMinRating(0); };

  const renderContent = () => {
    if (loading) return <LoadingState message="Preparing today's fresh picks..." />;
    if (error) return <ErrorState message="Unable to load the catalogue." onRetry={retry} />;
    if (!visibleProducts.length) return <EmptyState message="No products match your search." actionLabel="Clear filters" onAction={clearFilters} />;
    return <><div className="results-row"><p><strong>{visibleProducts.length}</strong> fresh picks</p><span>Sorted by popularity</span></div><ProductList products={visibleProducts} /></>;
  };

  return <>
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy"><span className="eyebrow">FRESH EVERY DAY</span><h1>Good food.<br/><em>Good mood.</em></h1><p>Discover hand-picked ingredients, snacks and drinks for your everyday table.</p><a className="hero-cta" href="#shop">Explore the collection <span>→</span></a></div>
        <div className="hero-art" aria-label="Fresh produce illustration"><div className="hero-circle"></div><div className="produce produce-one">🥑</div><div className="produce produce-two">🍅</div><div className="produce produce-three">🍋</div><div className="produce produce-four">🥬</div><div className="hero-note"><strong>10+</strong><span>fresh favourites<br/>to explore</span></div></div>
      </div>
    </section>
    <section className="shop-section container" id="shop">
      <div className="section-heading"><div><span className="eyebrow">OUR COLLECTION</span><h2>Fresh picks for you</h2></div><p>Quality ingredients, simple choices.</p></div>
      <div className="controls-modern"><SearchBar value={query} onChange={setQuery} /><CategoryFilter categories={categories} value={category} onChange={setCategory} /><RatingFilter value={minRating} onChange={setMinRating} />{hasActiveFilters && <button type="button" className="clear-button" onClick={clearFilters}>Reset</button>}</div>
      {renderContent()}
    </section>
    <section className="trust-strip" id="categories"><div className="container trust-grid" id="about"><div><span>✦</span><strong>Farm-fresh quality</strong><small>Picked with care</small></div><div><span>◷</span><strong>Fast delivery</strong><small>Freshness at your door</small></div><div><span>♡</span><strong>Easy shopping</strong><small>Simple, honest pricing</small></div></div></section>
  </>;
}

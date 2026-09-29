import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { formatCategory, formatPrice, formatRating, getDiscountedPrice } from "../utils/format";
import { useShopping } from "../context/useShopping";

export function ProductCard({ product }: { product: Product }) {
	const finalPrice = getDiscountedPrice(product.price, product.discountPercentage);
	const { toggleSaved, isSaved } = useShopping();
	const saved = isSaved(product.id);

	return (
		<article className="product-card">
			<div className="product-image-wrap">
				<Link to={`/products/${product.id}`} aria-label={`View ${product.title}`}>
					<img src={product.thumbnail} alt={product.title} loading="lazy" />
				</Link>
				<span className="discount">-{Math.round(product.discountPercentage)}%</span>
				<button
					className={`heart${saved ? " is-saved" : ""}`}
					type="button"
					aria-label={saved ? `Remove ${product.title} from saved items` : `Save ${product.title}`}
					aria-pressed={saved}
					onClick={() => toggleSaved(product.id)}
				>{saved ? "♥" : "♡"}</button>
			</div>
			<div className="product-card-body">
				<span className="badge">{formatCategory(product.category)}</span>
				<h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
				<div className="product-meta">
					<div><span className="price">{formatPrice(finalPrice)}</span><span className="old-price">{formatPrice(product.price)}</span></div>
					<span className="rating">★ {formatRating(product.rating)}</span>
				</div>
				<Link to={`/products/${product.id}`} className="btn">View product <span>→</span></Link>
			</div>
		</article>
	);
}

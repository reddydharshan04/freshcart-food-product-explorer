import type { Product } from "../types/product";

const image = (url: string) => `https://images.unsplash.com/${url}?auto=format&fit=crop&w=900&q=85`;

export const PRODUCTS: Product[] = [
  {
    id: 1, title: "Farm Fresh Avocado", description: "Creamy, ripe Hass avocados selected for everyday breakfasts, salads and toast.", category: "fresh-produce", price: 149, discountPercentage: 10, rating: 4.8, stock: 28, tags: ["fresh", "healthy"], brand: "GreenBasket", sku: "FB-AVO-01", weight: 500,
    dimensions: { width: 12, height: 8, depth: 8 }, warrantyInformation: "Freshness guaranteed", shippingInformation: "Same-day delivery in selected areas", availabilityStatus: "In Stock", reviews: [], returnPolicy: "Quality issue replacement", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000001", qrCode: "" }, images: [image("photo-1550258987-190a2d41a8ba")], thumbnail: image("photo-1550258987-190a2d41a8ba")
  },
  {
    id: 2, title: "Organic Tomato Basket", description: "Juicy vine-ripened tomatoes, perfect for curries, salads, chutneys and sandwiches.", category: "fresh-produce", price: 69, discountPercentage: 5, rating: 4.7, stock: 42, tags: ["organic", "vegetables"], brand: "Daily Harvest", sku: "DH-TOM-02", weight: 1000,
    dimensions: { width: 18, height: 12, depth: 12 }, warrantyInformation: "Freshness guaranteed", shippingInformation: "Packed fresh", availabilityStatus: "In Stock", reviews: [], returnPolicy: "Quality issue replacement", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000002", qrCode: "" }, images: [image("photo-1546094096-0df4bcaaa337")], thumbnail: image("photo-1546094096-0df4bcaaa337")
  },
  {
    id: 3, title: "Cold Brew Coffee", description: "Smooth, slow-brewed coffee with a rich finish and naturally low bitterness.", category: "beverages", price: 129, discountPercentage: 15, rating: 4.9, stock: 18, tags: ["coffee", "cold-brew"], brand: "Bean & Co.", sku: "BC-CB-03", weight: 250,
    dimensions: { width: 7, height: 16, depth: 7 }, warrantyInformation: "Best before 30 days", shippingInformation: "Carefully packed", availabilityStatus: "In Stock", reviews: [], returnPolicy: "Replacement for damaged items", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000003", qrCode: "" }, images: [image("photo-1517701604599-bb29b565090c")], thumbnail: image("photo-1517701604599-bb29b565090c")
  },
  {
    id: 4, title: "Greek Yogurt", description: "Thick and creamy yogurt with a naturally tangy taste. Great with fruit and granola.", category: "dairy", price: 99, discountPercentage: 8, rating: 4.6, stock: 25, tags: ["yogurt", "protein"], brand: "PureDay", sku: "PD-YOG-04", weight: 400,
    dimensions: { width: 10, height: 8, depth: 10 }, warrantyInformation: "Chilled product", shippingInformation: "Cold-chain delivery", availabilityStatus: "In Stock", reviews: [], returnPolicy: "Replacement for damaged items", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000004", qrCode: "" }, images: [image("photo-1488477181946-6428a0291777")], thumbnail: image("photo-1488477181946-6428a0291777")
  },
  {
    id: 5, title: "Masala Trail Mix", description: "Roasted nuts, seeds and crunchy bites with a subtle Indian masala kick.", category: "snacks", price: 179, discountPercentage: 12, rating: 4.5, stock: 34, tags: ["snack", "nuts"], brand: "NutriTrail", sku: "NT-MIX-05", weight: 300,
    dimensions: { width: 15, height: 20, depth: 7 }, warrantyInformation: "Best before 6 months", shippingInformation: "Ships within 24 hours", availabilityStatus: "In Stock", reviews: [], returnPolicy: "Replacement for damaged items", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000005", qrCode: "" }, images: [image("photo-1518843875459-f738682238a6")], thumbnail: image("photo-1518843875459-f738682238a6")
  },
  {
    id: 6, title: "Sourdough Bread", description: "Artisan sourdough loaf with a crisp crust and soft, airy centre.", category: "bakery", price: 119, discountPercentage: 5, rating: 4.8, stock: 12, tags: ["bread", "artisan"], brand: "Bake House", sku: "BH-SOU-06", weight: 400,
    dimensions: { width: 22, height: 10, depth: 10 }, warrantyInformation: "Best consumed fresh", shippingInformation: "Freshly baked dispatch", availabilityStatus: "Low Stock", reviews: [], returnPolicy: "Freshness replacement", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000006", qrCode: "" }, images: [image("photo-1509440159596-0249088772ff")], thumbnail: image("photo-1509440159596-0249088772ff")
  },
  {
    id: 7, title: "Dark Chocolate Bites", description: "Rich dark chocolate squares made for a small, satisfying sweet treat.", category: "sweets", price: 199, discountPercentage: 18, rating: 4.7, stock: 21, tags: ["chocolate", "sweet"], brand: "Cocoa Lane", sku: "CL-CHO-07", weight: 180,
    dimensions: { width: 12, height: 18, depth: 4 }, warrantyInformation: "Best before 9 months", shippingInformation: "Ships within 24 hours", availabilityStatus: "In Stock", reviews: [], returnPolicy: "Replacement for damaged items", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000007", qrCode: "" }, images: [image("photo-1606313564200-e75d5e30476c")], thumbnail: image("photo-1606313564200-e75d5e30476c")
  },
  {
    id: 8, title: "Mango Chia Smoothie", description: "A bright tropical smoothie blend with mango, chia and a refreshing finish.", category: "beverages", price: 159, discountPercentage: 10, rating: 4.6, stock: 15, tags: ["smoothie", "mango"], brand: "Blend Bar", sku: "BB-SMO-08", weight: 350,
    dimensions: { width: 8, height: 18, depth: 8 }, warrantyInformation: "Consume chilled", shippingInformation: "Cold-chain delivery", availabilityStatus: "In Stock", reviews: [], returnPolicy: "Replacement for damaged items", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000008", qrCode: "" }, images: [image("photo-1505252585461-04db1eb84625")], thumbnail: image("photo-1505252585461-04db1eb84625")
  },
  {
    id: 9, title: "Paneer Cubes", description: "Soft, fresh paneer cubes that work beautifully in curries, wraps and grills.", category: "dairy", price: 149, discountPercentage: 6, rating: 4.8, stock: 17, tags: ["paneer", "protein"], brand: "PureDay", sku: "PD-PAN-09", weight: 250,
    dimensions: { width: 12, height: 6, depth: 10 }, warrantyInformation: "Chilled product", shippingInformation: "Cold-chain delivery", availabilityStatus: "In Stock", reviews: [], returnPolicy: "Replacement for damaged items", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000009", qrCode: "" }, images: [image("photo-1631452180519-c014fe946bc7")], thumbnail: image("photo-1631452180519-c014fe946bc7")
  },
  {
    id: 10, title: "Honey Oat Granola", description: "Crunchy rolled oats, nuts and seeds lightly sweetened with honey.", category: "breakfast", price: 229, discountPercentage: 14, rating: 4.7, stock: 31, tags: ["granola", "breakfast"], brand: "Morning Mill", sku: "MM-GRA-10", weight: 400,
    dimensions: { width: 14, height: 22, depth: 7 }, warrantyInformation: "Best before 6 months", shippingInformation: "Ships within 24 hours", availabilityStatus: "In Stock", reviews: [], returnPolicy: "Replacement for damaged items", minimumOrderQuantity: 1,
    meta: { createdAt: "2026-01-01", updatedAt: "2026-09-01", barcode: "890100000010", qrCode: "" }, images: [image("photo-1517093602195-b40af9688b46")], thumbnail: image("photo-1517093602195-b40af9688b46")
  }
];

export async function getProducts(_signal?: AbortSignal): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 350));
  return PRODUCTS;
}

export async function getProductById(id: number, _signal?: AbortSignal): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const product = PRODUCTS.find((item) => item.id === id);
  if (!product) {
    const error = new Error("Product not found") as Error & { status: number };
    error.status = 404;
    throw error;
  }
  return product;
}

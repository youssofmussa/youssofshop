
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Tailored Wool Blazer",
    description: "A premium wool blazer with a tailored fit. Perfect for business meetings or formal events. Features classic notched lapels and a two-button closure for a timeless look.",
    price: 199.99,
    originalPrice: 249.99,
    images: [
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598808503746-f34cfb6350ff?q=80&w=1074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604644401890-0bd678c83788?q=80&w=870&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["blazer", "formal", "wool"],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Navy", value: "#0d1b2a" },
      { name: "Charcoal", value: "#333333" },
    ],
    featured: true,
    stock: 20,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Casual Cotton T-Shirt",
    description: "A comfortable and stylish cotton t-shirt for everyday wear. Made from premium organic cotton that's soft on your skin and kind to the environment.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=927&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["t-shirt", "casual", "cotton"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", value: "#ffffff" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#888888" },
      { name: "Blue", value: "#0077b6" },
    ],
    featured: false,
    newArrival: true,
    stock: 150,
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    name: "Floral Summer Dress",
    description: "A beautiful floral dress perfect for summer days. Made from lightweight, breathable fabric that keeps you cool while looking stylish.",
    price: 79.99,
    originalPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1618093143879-e4ec33188226?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593126463552-be5fab9c9133?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615387000571-bdcfe92eb5fb?q=80&w=774&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["dress", "summer", "floral"],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Blue Floral", value: "#4895ef" },
      { name: "Red Floral", value: "#e63946" },
    ],
    featured: true,
    stock: 35,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: "High-Waisted Jeans",
    description: "Classic high-waisted jeans with a slim fit and slight stretch for comfort. The perfect addition to any casual wardrobe with timeless style.",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1581798117964-644150074edc?q=80&w=988&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507091337016-115e8d1e15d5?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610739557320-8c9bc1b2c92a?q=80&w=927&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["jeans", "denim", "casual"],
    sizes: ["24", "26", "28", "30", "32"],
    colors: [
      { name: "Dark Blue", value: "#0a2463" },
      { name: "Light Blue", value: "#89c2d9" },
      { name: "Black", value: "#000000" },
    ],
    newArrival: true,
    stock: 80,
    rating: 4.6,
    reviews: 112,
  },
  {
    id: 5,
    name: "Slim Fit Chinos",
    description: "Modern slim fit chinos made from soft cotton twill. Perfect for both casual and smart-casual looks with a comfortable stretch for all-day wear.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484186694577-9d6dc6cfc7ef?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515247897943-b8ab1a33a932?q=80&w=1170&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["chinos", "pants", "casual"],
    sizes: ["28", "30", "32", "34", "36"],
    colors: [
      { name: "Khaki", value: "#c8b88a" },
      { name: "Navy", value: "#1d3557" },
      { name: "Olive", value: "#606c38" },
    ],
    stock: 45,
    rating: 4.3,
    reviews: 78,
  },
  {
    id: 6,
    name: "Leather Biker Jacket",
    description: "A classic leather biker jacket with an asymmetric zip. Made from premium leather with a comfortable fit and timeless style that gets better with age.",
    price: 249.99,
    originalPrice: 299.99,
    images: [
      "https://images.unsplash.com/photo-1664368832278-169bc9fd1c32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGxlYXRoZXIlMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?q=80&w=1170&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["jacket", "leather", "biker"],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Brown", value: "#582f0e" },
    ],
    featured: true,
    stock: 15,
    rating: 4.9,
    reviews: 92,
  },
  {
    id: 7,
    name: "Oversized Knit Sweater",
    description: "A cozy oversized knit sweater for cold days. Features a relaxed fit and soft, warm fabric that's perfect for layering in cooler weather.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1005&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=962&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["sweater", "knit", "winter"],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Cream", value: "#f5f5dc" },
      { name: "Gray", value: "#6c757d" },
      { name: "Light Pink", value: "#f8c4c4" },
    ],
    newArrival: true,
    stock: 30,
    rating: 4.7,
    reviews: 65,
  },
  {
    id: 8,
    name: "Athletic Performance Shorts",
    description: "High-performance athletic shorts designed for comfort during intense workouts. Features moisture-wicking fabric and a secure yet comfortable fit.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1562886877-52ada5c0d6cf?q=80&w=986&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518059294975-e11b13f5e5d4?q=80&w=988&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519098901909-b1553a1190af?q=80&w=1074&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["shorts", "athletic", "sports"],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#6c757d" },
      { name: "Navy", value: "#1d3557" },
    ],
    stock: 60,
    rating: 4.4,
    reviews: 48,
  },
  {
    id: 9,
    name: "Elegant Silk Blouse",
    description: "An elegant silk blouse with a flattering fit. Made from premium silk with a smooth finish and sophisticated design perfect for professional settings.",
    price: 119.99,
    originalPrice: 149.99,
    images: [
      "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=880&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552902943-3a59923bc6b3?q=80&w=944&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548389996-aa941891e961?q=80&w=987&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["blouse", "silk", "formal"],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "White", value: "#ffffff" },
      { name: "Cream", value: "#f5f5dc" },
      { name: "Black", value: "#000000" },
      { name: "Burgundy", value: "#800020" },
    ],
    featured: true,
    stock: 25,
    rating: 4.8,
    reviews: 73,
  },
  {
    id: 10,
    name: "Waterproof Rain Jacket",
    description: "A durable waterproof jacket for rainy days. Features sealed seams and adjustable hood to keep you dry in any weather conditions while maintaining style.",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1605908502724-9093a79a1b39?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?q=80&w=986&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?q=80&w=1964&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["jacket", "rain", "waterproof"],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Yellow", value: "#ffd60a" },
      { name: "Navy", value: "#1d3557" },
      { name: "Red", value: "#e63946" },
    ],
    newArrival: true,
    stock: 40,
    rating: 4.6,
    reviews: 58,
  },
  {
    id: 11,
    name: "Classic Oxford Shirt",
    description: "A timeless oxford shirt for a clean, classic look. Made from premium cotton with a comfortable fit that's perfect for both work and casual occasions.",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1598961942613-ba897716405b?q=80&w=1160&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604695573706-53170668f6a6?q=80&w=1287&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1644424235033-85a31a2e1df7?q=80&w=1287&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["shirt", "oxford", "formal"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "White", value: "#ffffff" },
      { name: "Light Blue", value: "#89c2d9" },
      { name: "Pink", value: "#ffb5b5" },
    ],
    stock: 50,
    rating: 4.5,
    reviews: 82,
  },
  {
    id: 12,
    name: "Casual Linen Dress",
    description: "A breezy linen dress for casual summer days. Made from high-quality linen fabric that keeps you cool while providing a relaxed, effortless style.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?q=80&w=855&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554476642-1339d139c70a?q=80&w=2034&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["dress", "linen", "casual"],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Beige", value: "#f5f5dc" },
      { name: "Light Blue", value: "#89c2d9" },
      { name: "Sage Green", value: "#9caf88" },
    ],
    featured: false,
    stock: 35,
    rating: 4.7,
    reviews: 62,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((product) => product.newArrival);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getProductsBySearch = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
};

export const getRelatedProducts = (productId: number, limit = 4): Product[] => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return products
    .filter(
      (product) =>
        product.id !== productId &&
        (product.category === currentProduct.category ||
          product.tags.some((tag) => currentProduct.tags.includes(tag)))
    )
    .slice(0, limit);
};


import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wool Blazer",
    description: "A sophisticated wool blazer with a tailored fit. Perfect for business meetings or formal events with premium details and expert craftsmanship.",
    price: 199.99,
    originalPrice: 249.99,
    images: [
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=870&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598808503746-f34cfb6350ff?q=80&w=1074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604644401890-0bd678c83788?q=80&w=870&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["blazer", "formal", "wool", "sale"],
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
    name: "Organic Cotton T-Shirt",
    description: "A comfortable and stylish cotton t-shirt for everyday wear. Made from premium organic cotton that's soft on your skin and kind to the environment.",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=987&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=927&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["t-shirt", "casual", "cotton", "new-arrival"],
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
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1746&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623086365215-e10a284ce8b8?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["dress", "summer", "floral", "sale"],
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
    name: "High-Waisted Denim Jeans",
    description: "Classic high-waisted jeans with a slim fit and slight stretch for comfort. The perfect addition to any casual wardrobe with timeless style.",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=1886&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["jeans", "denim", "casual", "new-arrival"],
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
    name: "Modern Slim Fit Chinos",
    description: "Modern slim fit chinos made from soft cotton twill. Perfect for both casual and smart-casual looks with a comfortable stretch for all-day wear.",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1897&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604176424472-48e3030bb0f9?q=80&w=1936&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525845859779-54d477ff291f?q=80&w=1887&auto=format&fit=crop",
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
    name: "Premium Leather Biker Jacket",
    description: "A classic leather biker jacket with an asymmetric zip. Made from premium leather with a comfortable fit and timeless style that gets better with age.",
    price: 249.99,
    originalPrice: 299.99,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=935&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626497059703-995954944be2?q=80&w=1887&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["jacket", "leather", "biker", "sale"],
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
      "https://images.unsplash.com/photo-1608638562455-bc8927d3abd9?q=80&w=1915&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?q=80&w=1910&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604093999627-d1a4f2d3f6a8?q=80&w=1887&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["sweater", "knit", "winter", "new-arrival"],
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
    name: "Performance Athletic Shorts",
    description: "High-performance athletic shorts designed for comfort during intense workouts. Features moisture-wicking fabric and a secure yet comfortable fit.",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1577284233919-3335cc804764?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?q=80&w=1916&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581344947736-f2f915b3410c?q=80&w=1887&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["shorts", "athletic", "sports", "new-arrival"],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#6c757d" },
      { name: "Navy", value: "#1d3557" },
    ],
    newArrival: true,
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
      "https://images.unsplash.com/photo-1604575396874-b1a218f6ddd5?q=80&w=1888&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615397587950-3cbb55f95d8e?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609673000738-e22ea303856c?q=80&w=1887&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["blouse", "silk", "formal", "sale"],
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
    name: "Stylish Waterproof Rain Jacket",
    description: "A durable waterproof jacket for rainy days. Features sealed seams and adjustable hood to keep you dry in any weather conditions while maintaining style.",
    price: 129.99,
    images: [
      "https://images.unsplash.com/photo-1543076499-a6133cb932fd?q=80&w=1827&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["jacket", "rain", "waterproof", "new-arrival"],
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
    name: "Premium Oxford Shirt",
    description: "A timeless oxford shirt for a clean, classic look. Made from premium cotton with a comfortable fit that's perfect for both work and casual occasions.",
    price: 69.99,
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1780&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=1887&auto=format&fit=crop",
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
    name: "Casual Linen Summer Dress",
    description: "A breezy linen dress for casual summer days. Made from high-quality linen fabric that keeps you cool while providing a relaxed, effortless style.",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1888&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1973&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["dress", "linen", "casual", "new-arrival"],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Beige", value: "#f5f5dc" },
      { name: "Light Blue", value: "#89c2d9" },
      { name: "Sage Green", value: "#9caf88" },
    ],
    newArrival: true,
    stock: 35,
    rating: 4.7,
    reviews: 62,
  },
  {
    id: 13,
    name: "Designer Denim Jacket",
    description: "A stylish denim jacket with modern detailing. Perfect for layering in any season with durable construction and timeless appeal.",
    price: 119.99,
    originalPrice: 149.99,
    images: [
      "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1738&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?q=80&w=1915&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["jacket", "denim", "casual", "sale"],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Blue", value: "#1e3a8a" },
      { name: "Light Wash", value: "#a8dadc" },
      { name: "Black", value: "#000000" },
    ],
    stock: 28,
    rating: 4.7,
    reviews: 54,
  },
  {
    id: 14,
    name: "Boho Maxi Dress",
    description: "A bohemian-inspired maxi dress with intricate patterns. Features flowing fabric and a flattering silhouette perfect for summer evenings.",
    price: 99.99,
    images: [
      "https://images.unsplash.com/photo-1566491888763-e71518ded3dd?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1886&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["dress", "maxi", "boho", "new-arrival"],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Multicolor", value: "#ff9e00" },
      { name: "Earth Tones", value: "#cb997e" },
    ],
    newArrival: true,
    stock: 22,
    rating: 4.9,
    reviews: 43,
  },
  {
    id: 15,
    name: "Vintage Cargo Pants",
    description: "Stylish cargo pants with a vintage-inspired design. Features multiple pockets and durable fabric with a comfortable relaxed fit.",
    price: 79.99,
    originalPrice: 99.99,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517445312882-bc9910d018b3?q=80&w=1906&auto=format&fit=crop",
    ],
    category: "men",
    tags: ["pants", "cargo", "vintage", "sale"],
    sizes: ["30", "32", "34", "36"],
    colors: [
      { name: "Olive", value: "#606c38" },
      { name: "Khaki", value: "#c8b88a" },
      { name: "Black", value: "#000000" },
    ],
    stock: 42,
    rating: 4.6,
    reviews: 67,
  },
  {
    id: 16,
    name: "Elegant Evening Gown",
    description: "A stunning evening gown for special occasions. Features luxurious fabric with elegant detailing and a flattering silhouette.",
    price: 299.99,
    originalPrice: 349.99,
    images: [
      "https://images.unsplash.com/photo-1566700274088-6e819d15fa2b?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585944429478-96a8a013d258?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565462900119-a16283d8c30d?q=80&w=1887&auto=format&fit=crop",
    ],
    category: "women",
    tags: ["dress", "formal", "evening", "sale"],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Burgundy", value: "#800020" },
      { name: "Navy", value: "#0d1b2a" },
    ],
    featured: true,
    stock: 15,
    rating: 4.9,
    reviews: 38,
  },
];

// Utility functions for filtering and retrieving products
export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((product) => product.newArrival || product.tags.includes("new-arrival"));
};

export const getSaleProducts = (): Product[] => {
  return products.filter((product) => product.originalPrice || product.tags.includes("sale"));
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getProductsByTag = (tag: string): Product[] => {
  return products.filter((product) => product.tags.includes(tag));
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

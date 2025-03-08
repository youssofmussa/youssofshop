
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  sizes: string[];
  colors: Color[];
  featured?: boolean;
  newArrival?: boolean;
  stock: number;
  rating: number;
  reviews: number;
}

export interface Color {
  name: string;
  value: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: Color;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type SortOption = 'popular' | 'newest' | 'price-asc' | 'price-desc';

export interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
}

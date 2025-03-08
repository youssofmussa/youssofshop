
import React from "react";
import ProductCard from "./product-card";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  columns?: number;
  featuredIndices?: number[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  columns = 4,
  featuredIndices = []
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    );
  }

  return (
    <div 
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} gap-6 md:gap-8`}
    >
      {products.map((product, index) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          featured={featuredIndices.includes(index)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;

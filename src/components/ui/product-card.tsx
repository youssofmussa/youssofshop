
import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();
  const defaultSize = product.sizes[0];
  const defaultColor = product.colors[0];
  
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, defaultSize, defaultColor, 1);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className={`group ${featured ? "col-span-1 md:col-span-2" : "col-span-1"} block animate-fade-in relative`}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4 product-card-shadow bg-secondary/20">
        <div className="w-full h-full relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
          
          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-center opacity-0 group-hover:opacity-100">
            <div className="p-4 w-full flex justify-between items-center">
              <Button 
                variant="secondary" 
                size="sm" 
                className="rounded-full h-10 w-10 p-0 bg-white text-primary hover:bg-primary hover:text-white transition-all"
                onClick={handleAddToCart}
                aria-label="Add to cart"
              >
                <ShoppingCart size={16} />
              </Button>
              
              <Button 
                variant="secondary" 
                size="sm" 
                className="rounded-full h-10 w-10 p-0 bg-white text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Add to wishlist"
              >
                <Heart size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.newArrival && (
            <Badge className="bg-primary text-white">New</Badge>
          )}
          {hasDiscount && (
            <Badge variant="destructive">-{discountPercentage}%</Badge>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center text-sm space-x-2">
          <span className="font-medium">
            ${product.price.toFixed(2)}
          </span>
          
          {hasDiscount && (
            <span className="text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

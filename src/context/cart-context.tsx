
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { CartItem, Product, Color } from "@/types";
import { toast } from "sonner";

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: { product: Product; size: string; color: Color } }
  | { type: "UPDATE_QUANTITY"; payload: { product: Product; size: string; color: Color; quantity: number } }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateCartTotals = (items: CartItem[]): Pick<CartState, "totalItems" | "totalPrice"> => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  return { totalItems, totalPrice };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, size, color, quantity } = action.payload;
      
      // Check if item already exists in cart
      const existingItemIndex = state.items.findIndex(
        (item) => 
          item.product.id === product.id && 
          item.size === size && 
          item.color.name === color.name
      );
      
      let updatedItems;
      
      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        updatedItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + quantity };
          }
          return item;
        });
      } else {
        // Add new item
        updatedItems = [...state.items, action.payload];
      }
      
      return {
        ...state,
        items: updatedItems,
        ...calculateCartTotals(updatedItems),
      };
    }
    
    case "REMOVE_FROM_CART": {
      const { product, size, color } = action.payload;
      const updatedItems = state.items.filter(
        (item) => 
          !(item.product.id === product.id && 
            item.size === size && 
            item.color.name === color.name)
      );
      
      return {
        ...state,
        items: updatedItems,
        ...calculateCartTotals(updatedItems),
      };
    }
    
    case "UPDATE_QUANTITY": {
      const { product, size, color, quantity } = action.payload;
      
      if (quantity <= 0) {
        return cartReducer(state, { 
          type: "REMOVE_FROM_CART", 
          payload: { product, size, color } 
        });
      }
      
      const updatedItems = state.items.map((item) => {
        if (
          item.product.id === product.id &&
          item.size === size &&
          item.color.name === color.name
        ) {
          return { ...item, quantity };
        }
        return item;
      });
      
      return {
        ...state,
        items: updatedItems,
        ...calculateCartTotals(updatedItems),
      };
    }
    
    case "CLEAR_CART":
      return initialState;
      
    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addToCart: (product: Product, size: string, color: Color, quantity: number) => void;
  removeFromCart: (product: Product, size: string, color: Color) => void;
  updateQuantity: (product: Product, size: string, color: Color, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    // Load cart from localStorage on initial render
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart) as CartState;
          return parsedCart;
        } catch (error) {
          console.error("Failed to parse cart from localStorage:", error);
        }
      }
    }
    return initialState;
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addToCart = (product: Product, size: string, color: Color, quantity: number) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, size, color, quantity },
    });
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (product: Product, size: string, color: Color) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { product, size, color },
    });
    toast.info(`${product.name} removed from cart`);
  };

  const updateQuantity = (product: Product, size: string, color: Color, quantity: number) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { product, size, color, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.info("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

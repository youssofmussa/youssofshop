
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  ShoppingBag, 
  User, 
  Search, 
  Menu, 
  X, 
  Heart, 
  LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/cart-context";
import { useAuth } from "@/context/auth-context";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Men", path: "/category/men" },
    { name: "Women", path: "/category/women" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Sale", path: "/sale" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-10",
        isScrolled 
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-display text-2xl font-semibold tracking-tight animate-fade-in"
        >
          CHIC
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                location.pathname === link.path
                  ? "after:w-full"
                  : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Link to="/search" className="p-2 rounded-full hover:bg-secondary transition-colors">
            <Search size={20} />
          </Link>

          <Link to="/cart" className="p-2 rounded-full hover:bg-secondary transition-colors relative">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-primary text-white text-xs animate-scale-in"
              >
                {totalItems}
              </Badge>
            )}
          </Link>
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto" aria-label="User menu">
                  <div className="w-8 h-8 rounded-full overflow-hidden border">
                    <img 
                      src={user?.avatar || "https://i.pravatar.cc/150?img=default"} 
                      alt={user?.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 animate-scale-in">
                <DropdownMenuLabel>Hi, {user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/account" className="cursor-pointer w-full flex items-center">
                    <User size={16} className="mr-2" /> My Account
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders" className="cursor-pointer w-full flex items-center">
                    <ShoppingBag size={16} className="mr-2" /> Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/wishlist" className="cursor-pointer w-full flex items-center">
                    <Heart size={16} className="mr-2" /> Wishlist
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer text-destructive">
                  <LogOut size={16} className="mr-2" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="sm" className="px-3">
                <User size={18} className="mr-2" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            </Link>
          )}

          {/* Mobile menu toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <SheetHeader className="mb-6">
                <SheetTitle className="font-display text-2xl">CHIC</SheetTitle>
                <SheetDescription>
                  Effortless style for everyone
                </SheetDescription>
              </SheetHeader>
              
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.path}>
                    <Link
                      to={link.path}
                      className="text-lg font-medium hover:text-primary/80 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                ))}
                
                <SheetClose asChild>
                  <Link
                    to="/search"
                    className="text-lg font-medium hover:text-primary/80 transition-colors flex items-center"
                  >
                    <Search size={18} className="mr-2" /> Search
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link
                    to="/wishlist"
                    className="text-lg font-medium hover:text-primary/80 transition-colors flex items-center"
                  >
                    <Heart size={18} className="mr-2" /> Wishlist
                  </Link>
                </SheetClose>
              </nav>
              
              <SheetFooter className="mt-6">
                {isAuthenticated ? (
                  <div className="w-full space-y-4">
                    <SheetClose asChild>
                      <Link to="/account">
                        <Button variant="outline" className="w-full">
                          My Account
                        </Button>
                      </Link>
                    </SheetClose>
                    <Button
                      variant="ghost"
                      className="w-full"
                      onClick={logout}
                    >
                      Log out
                    </Button>
                  </div>
                ) : (
                  <div className="w-full space-y-4">
                    <SheetClose asChild>
                      <Link to="/login">
                        <Button className="w-full">Sign In</Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/register">
                        <Button variant="outline" className="w-full">
                          Create Account
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                )}
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

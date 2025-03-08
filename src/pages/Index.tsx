
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Tag, Clock } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import HeroSlider from "@/components/ui/hero-slider";
import ProductGrid from "@/components/ui/product-grid";
import CategoryCard from "@/components/ui/category-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    title: "Summer Collection 2023",
    subtitle: "Discover our latest arrivals for the season with bold colors and premium fabrics.",
    cta: {
      text: "Shop Collection",
      link: "/new-arrivals",
    },
    align: "left" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1986&auto=format&fit=crop",
    title: "Minimalist Essentials",
    subtitle: "Clean lines, neutral tones, and timeless designs for the modern wardrobe.",
    cta: {
      text: "Explore",
      link: "/category/men",
    },
    align: "right" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?q=80&w=2070&auto=format&fit=crop",
    title: "Luxury Collection",
    subtitle: "Elevated pieces for special occasions crafted with exceptional attention to detail.",
    cta: {
      text: "View Collection",
      link: "/category/women",
    },
    align: "center" as const,
  },
];

const categories = [
  {
    name: "Men's Collection",
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1974&auto=format&fit=crop",
    link: "/category/men",
    size: "md" as const,
  },
  {
    name: "Women's Collection",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1974&auto=format&fit=crop",
    link: "/category/women",
    size: "md" as const,
  },
  {
    name: "Premium Selection",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2074&auto=format&fit=crop",
    link: "/premium",
    size: "lg" as const,
  },
];

const features = [
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Premium Quality",
    description: "All products are made with the finest materials and craftsmanship",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Fast Shipping",
    description: "Free shipping on all orders over $50 with quick delivery",
  },
  {
    icon: <Tag className="h-5 w-5" />,
    title: "Easy Returns",
    description: "30-day free returns policy with no questions asked",
  },
];

const testimonialsData = [
  {
    name: "Jessica Thompson",
    role: "Fashion Blogger",
    text: "The quality of these clothes is exceptional. I've been a loyal customer for years and every piece I've purchased has remained in great condition.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    text: "I appreciate the timeless design and attention to detail. These pieces have become staples in my professional wardrobe.",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Sarah Johnson",
    role: "Customer",
    text: "The shopping experience is seamless, and the clothes fit perfectly. Their size guide is accurate, which is refreshing for online shopping.",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <MainLayout>
      {/* Hero Slider */}
      <section className="animate-fade-in mb-16">
        <HeroSlider slides={heroSlides} />
      </section>

      {/* Features */}
      <section className="container px-6 md:px-10 mx-auto py-12 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/40 space-y-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-medium text-lg">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container px-6 md:px-10 mx-auto py-16 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">Explore our collections for every style and occasion</p>
          </div>
          <Link to="/categories" className="group inline-flex items-center text-sm font-medium mt-4 md:mt-0">
            View All Categories
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index} 
              name={category.name} 
              image={category.image} 
              link={category.link} 
              size={category.size} 
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-6 md:px-10 mx-auto py-16 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked selection of our best products</p>
          </div>
          <Link to="/featured" className="group inline-flex items-center text-sm font-medium mt-4 md:mt-0">
            View All Featured
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} columns={4} featuredIndices={[0, 3]} />
      </section>

      {/* New Arrivals */}
      <section className="container px-6 md:px-10 mx-auto py-16 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">New Arrivals</h2>
            <p className="text-muted-foreground">Fresh styles just added to our collection</p>
          </div>
          <Link to="/new-arrivals" className="group inline-flex items-center text-sm font-medium mt-4 md:mt-0">
            View All New Arrivals
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ProductGrid products={newArrivals} columns={4} />
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/50 py-16 my-16 animate-fade-in">
        <div className="container px-6 md:px-10 mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Discover why our customers love shopping with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-background rounded-lg p-6 shadow-sm flex flex-col"
              >
                <div className="mb-4 flex-1">
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container px-6 md:px-10 mx-auto py-16 animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter and get 10% off your first purchase, plus stay updated on our latest collections and exclusive offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
            <Button className="sm:flex-shrink-0">Subscribe</Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;

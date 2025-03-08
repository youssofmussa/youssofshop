
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductGrid from "@/components/ui/product-grid";
import { getProductsByCategory } from "@/data/products";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryProducts = getProductsByCategory(category || "");
  
  const getCategoryTitle = () => {
    switch (category) {
      case "men":
        return "Men's Collection";
      case "women":
        return "Women's Collection";
      default:
        return "Product Collection";
    }
  };

  const getCategoryDescription = () => {
    switch (category) {
      case "men":
        return "Discover our premium selection of men's clothing, from casual essentials to statement pieces for every occasion.";
      case "women":
        return "Explore our curated collection of women's fashion featuring everything from elegant classics to trendy statement pieces.";
      default:
        return "Browse our collection of high-quality clothing designed with style and comfort in mind.";
    }
  };

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="bg-secondary/30 py-16 mb-10 animate-fade-in">
        <div className="container px-6 md:px-10 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">{getCategoryTitle()}</h1>
            <p className="text-muted-foreground text-lg mb-8">
              {getCategoryDescription()}
            </p>
          </div>
        </div>
      </section>

      {/* Category Products */}
      <section className="container px-6 md:px-10 mx-auto py-10 mb-10 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">{getCategoryTitle()}</h2>
            <p className="text-muted-foreground">Discover our selection of premium quality items</p>
          </div>
          <Link to="/" className="group inline-flex items-center text-sm font-medium mt-4 md:mt-0">
            Back to Home
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} columns={4} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default CategoryPage;

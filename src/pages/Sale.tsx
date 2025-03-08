
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Tag } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ProductGrid from "@/components/ui/product-grid";
import { getSaleProducts } from "@/data/products";

const Sale = () => {
  const saleProducts = getSaleProducts();

  return (
    <MainLayout>
      {/* Hero Banner */}
      <section className="bg-red-50 dark:bg-red-900/20 py-16 mb-10 animate-fade-in">
        <div className="container px-6 md:px-10 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
              <Tag className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Sale & Special Offers</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Discover incredible savings on premium fashion items. 
              Limited time offers with discounts up to 50% off.
            </p>
          </div>
        </div>
      </section>

      {/* Sale Products */}
      <section className="container px-6 md:px-10 mx-auto py-10 mb-10 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-2">Sale Products</h2>
            <p className="text-muted-foreground">Limited time offers with amazing discounts</p>
          </div>
          <Link to="/" className="group inline-flex items-center text-sm font-medium mt-4 md:mt-0">
            Back to Home
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ProductGrid products={saleProducts} columns={4} />
      </section>
    </MainLayout>
  );
};

export default Sale;

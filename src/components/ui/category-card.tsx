
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  name: string;
  image: string;
  link: string;
  size?: "sm" | "md" | "lg";
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  image,
  link,
  size = "md",
}) => {
  const sizeClasses = {
    sm: "col-span-1 aspect-[2/3]",
    md: "col-span-1 md:col-span-2 aspect-[4/3]",
    lg: "col-span-1 md:col-span-3 aspect-[3/1]",
  };

  return (
    <Link
      to={link}
      className={cn(
        "group relative overflow-hidden rounded-lg",
        sizeClasses[size]
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 tracking-tight">
          {name}
        </h3>
        <div className="flex items-center">
          <span className="text-sm text-white/90 relative">
            <span className="relative group-hover:translate-x-0 inline-block transition-transform duration-300 ease-in-out">
              Shop now
            </span>
            <span className="absolute left-0 -bottom-[2px] w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

import React from "react";
import { cn } from "../libs/utils";
import { Check } from "lucide-react";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

interface ProductCardProps {
  product: ProductProps;
  isSelected: boolean;
  onSelect: (id: string) => void;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isSelected,
  onSelect,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative p-6 rounded-2xl transition-all duration-300",
        "border border-border/60 hover:border-primary/30",
        "bg-card hover:shadow-md",
        isSelected && "ring-2 ring-primary/60 shadow-lg border-transparent",
        className
      )}
      onClick={() => onSelect(product.id)}
    >
      {product.isPopular && (
        <span
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 
                    px-4 py-1 text-xs font-medium rounded-full bg-primary text-white
                    animate-fade-in"
        >
          Most Popular
        </span>
      )}

      <div className="space-y-4">
        <h3 className="text-xl font-medium">{product.name}</h3>

        <div className="flex items-baseline">
          <span className="text-3xl font-bold">${product.price}</span>
          <span className="ml-1 text-sm text-muted-foreground">/month</span>
        </div>

        <ul className="space-y-2 mt-4">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={cn(
            "w-full mt-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
            isSelected
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-secondary text-foreground hover:bg-secondary/80"
          )}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product.id);
          }}
        >
          {isSelected ? "Selected" : "Select Plan"}
        </button>
      </div>
    </div>
  );
};

import React from "react";
import { ProductCard, ProductProps } from "./ProductCard";
import { cn } from "../libs/utils";

interface ProductSelectionProps {
  products: ProductProps[];
  selectedProductId: string;
  onProductSelect: (id: string) => void;
  className?: string;
}

const ProductSelection: React.FC<ProductSelectionProps> = ({
  products,
  selectedProductId,
  onProductSelect,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 py-6",
        "animate-slide-up",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={selectedProductId === product.id}
          onSelect={onProductSelect}
        />
      ))}
    </div>
  );
};

export default ProductSelection;

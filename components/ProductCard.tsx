import React from 'react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { ShoppingCartIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const hasImage = product.images && product.images.length > 0;

  // Safety Check: Ensure price is a number before formatting it.
  const displayPrice = typeof product.price === 'number' 
    ? `₹${product.price.toLocaleString('en-IN')}`
    : 'Contact for Price';

  return (
    <div className="group relative flex flex-col bg-ram-green border border-ram-grey/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-ram-gold/20 hover:border-ram-gold/50">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden">
        {hasImage ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-ram-grey/20 animate-pulse" aria-label="Image placeholder" role="img" />
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-product font-semibold text-lg text-ram-light truncate">{product.name}</h3>
        <div className="flex items-baseline text-sm text-ram-grey mt-1 gap-2">
          <span>{product.category}</span>
          <span className="border-l border-ram-grey/50 pl-2">Scale: {product.scale}</span>
        </div>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-ram-gold">{displayPrice}</p>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-ram-dark text-ram-gold px-4 py-2 rounded-md border border-ram-gold/50 transition-all duration-300 hover:bg-ram-gold hover:text-ram-dark focus:outline-none focus:ring-2 focus:ring-ram-gold focus:ring-opacity-50"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

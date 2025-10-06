import React, { useState, useEffect, useMemo } from 'react';
import Container from '../components/Container';
import ProductCard from '../components/ProductCard';
import { supabase } from '../lib/supabaseClient';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const { data, error } = await supabase.from('products').select('*');

        if (error) {
          throw error;
        }
        
        setProducts(data || []);

      } catch (error: any) {
        setError(error.message);
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Dynamically generate categories from the product list
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    return ['All', ...Array.from(uniqueCategories)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (categoryFilter === 'All') {
      return products;
    }
    return products.filter(p => p.category === categoryFilter);
  }, [categoryFilter, products]);

  return (
    <Container className="pt-8 pb-16">
      <div className="mb-8 flex justify-center flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-4 py-2 rounded-full font-heading text-sm uppercase transition-colors duration-300 ${
              categoryFilter === cat
                ? 'bg-ram-gold text-ram-dark'
                : 'bg-ram-green text-ram-light hover:bg-ram-grey/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {loading && <p className="text-center text-ram-gold">Loading Collection...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-ram-grey col-span-full">No products found for this category.</p>
          )}
        </div>
      )}
    </Container>
  );
};

export default ProductsPage;
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Coffee, Cake, Utensils, Grid } from 'lucide-react';

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const categories = [
    { id: 'all', name: 'All Items', icon: <Grid size={18} /> },
    { id: 'coffee', name: 'Coffee', icon: <Coffee size={18} /> },
    { id: 'cake', name: 'Cakes', icon: <Cake size={18} /> },
    { id: 'bread', name: 'Bread', icon: <Utensils size={18} /> },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setSearchParams({ category: id });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-highlight font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Menu</span>
          <h1 className="text-6xl font-serif text-primary mb-6">A Symphony of Flavors</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto leading-relaxed">
            Every item on our menu is crafted with the finest ingredients and a touch of Mandalay charm. From our velvet brews to our golden crusts, discover your new favorite.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center space-x-2 px-8 py-4 rounded-full font-medium transition-all transform active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-primary text-accent shadow-lg scale-105'
                  : 'bg-white text-secondary hover:bg-primary/5 border border-primary/10'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-secondary/50 font-serif italic text-2xl">No items found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

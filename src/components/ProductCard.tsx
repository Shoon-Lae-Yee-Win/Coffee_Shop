import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-primary/5 group"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-accent text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            View Details
          </span>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-highlight font-bold mb-1 block">
              {product.category}
            </span>
            <h3 className="font-serif text-xl text-primary">{product.name}</h3>
          </div>
          <span className="font-serif italic text-secondary">${product.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-secondary/70 line-clamp-2 mb-6 h-10">
          {product.description}
        </p>
        
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-accent text-primary border border-primary/10 py-3 rounded-2xl flex items-center justify-center space-x-2 font-medium hover:bg-primary hover:text-accent transition-all active:scale-95"
        >
          <Plus size={18} />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Plus, Minus, ShoppingBag, Star, Clock, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-serif text-primary mb-4">Product not found</h2>
        <Link to="/menu" className="text-highlight hover:underline">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-square rounded-[48px] overflow-hidden shadow-2xl border-8 border-accent/30">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden opacity-50 hover:opacity-100 transition-opacity cursor-pointer border border-primary/10">
                  <img
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full"
          >
            <div className="mb-8">
              <span className="text-highlight font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                {product.category}
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-primary mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-serif italic text-secondary">${product.price.toFixed(2)}</span>
                <div className="h-4 w-px bg-primary/10"></div>
                <div className="flex items-center text-highlight">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <span className="ml-2 text-xs text-secondary/60 font-bold">(24 Reviews)</span>
                </div>
              </div>
              <p className="text-secondary/70 leading-relaxed text-lg mb-8">
                {product.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-accent/30 p-4 rounded-2xl flex items-center space-x-3">
                <Clock size={20} className="text-primary" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-primary/50">Prep Time</p>
                  <p className="text-sm font-bold text-primary">15-20 Mins</p>
                </div>
              </div>
              <div className="bg-accent/30 p-4 rounded-2xl flex items-center space-x-3">
                <ShieldCheck size={20} className="text-primary" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-primary/50">Quality</p>
                  <p className="text-sm font-bold text-primary">Artisanal</p>
                </div>
              </div>
            </div>

            <div className="mt-auto space-y-4">
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-primary text-accent py-5 rounded-full font-bold text-lg shadow-xl hover:bg-secondary transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-3"
              >
                <ShoppingBag size={22} />
                <span>Add to Cart</span>
              </button>
              <p className="text-center text-xs text-secondary/50 italic">
                Freshly prepared upon order. Available for pickup & delivery in Mandalay.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

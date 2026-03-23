import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-accent/20 flex flex-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <ShoppingBag size={40} className="text-secondary/30" />
          </div>
          <h2 className="text-4xl font-serif text-primary mb-4">Your cart is empty</h2>
          <p className="text-secondary/70 mb-10 leading-relaxed">
            It looks like you haven't added any sweet melodies to your cart yet. Explore our menu to find something delicious.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center space-x-2 bg-primary text-accent px-10 py-4 rounded-full font-bold hover:bg-secondary transition-all"
          >
            <span>Browse Menu</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-serif text-primary mb-12">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white p-6 rounded-[32px] shadow-sm flex flex-col sm:flex-row items-center gap-6 border border-primary/5"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="flex-grow text-center sm:text-left">
                    <span className="text-[10px] uppercase font-bold text-highlight tracking-widest mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-serif text-primary mb-1">{item.name}</h3>
                    <p className="text-sm text-secondary/60 italic">${item.price.toFixed(2)} each</p>
                  </div>

                  <div className="flex items-center space-x-4 bg-accent/30 p-2 rounded-2xl">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center rounded-xl bg-white text-primary hover:bg-primary hover:text-accent transition-colors shadow-sm"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-primary w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-xl bg-white text-primary hover:bg-primary hover:text-accent transition-colors shadow-sm"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-right min-w-[80px]">
                    <p className="font-serif text-lg text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-secondary/30 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="bg-white p-10 rounded-[48px] shadow-xl border border-primary/5 sticky top-32">
            <h2 className="text-2xl font-serif text-primary mb-8">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-secondary/70">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary/70">
                <span>Delivery Fee</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="h-px bg-primary/10 my-6"></div>
              <div className="flex justify-between text-xl font-serif text-primary">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-primary text-accent py-5 rounded-full font-bold text-lg shadow-xl hover:bg-secondary transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-3">
              <CreditCard size={22} />
              <span>Checkout</span>
            </button>
            
            <div className="mt-8 flex items-center justify-center space-x-4 opacity-30 grayscale">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

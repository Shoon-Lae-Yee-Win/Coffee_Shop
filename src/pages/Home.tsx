import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Coffee, Cake, Utensils, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredItems = products.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
            alt="Cafe background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-accent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-highlight font-serif italic text-2xl mb-4 block">Welcome to Mocha Melody</span>
            <h1 className="text-7xl md:text-9xl font-serif text-primary leading-[0.85] mb-8">
              Luxury <br />
              <span className="italic text-secondary">Brewed</span> <br />
              with Love.
            </h1>
            <p className="text-lg text-secondary/80 max-w-md mb-10 leading-relaxed">
              Experience the finest artisanal coffee and handcrafted pastries in the heart of Mandalay. A cozy sanctuary for your senses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="bg-primary text-accent px-10 py-5 rounded-full font-bold shadow-xl hover:bg-secondary transition-all transform hover:scale-105 active:scale-95 flex items-center space-x-2"
              >
                <span>Explore Menu</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-primary text-primary px-10 py-5 rounded-full font-bold hover:bg-primary hover:text-accent transition-all"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-[120px] overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac226a7c9588?auto=format&fit=crop&q=80&w=1000"
                alt="Cafe aesthetic"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 bg-white p-8 rounded-[40px] shadow-2xl max-w-[240px]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-highlight p-2 rounded-full text-white">
                  <Coffee size={20} />
                </div>
                <span className="font-serif italic text-primary">Signature Blend</span>
              </div>
              <p className="text-xs text-secondary/70 leading-relaxed">
                Our beans are ethically sourced and roasted to perfection for a velvet-smooth finish.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-highlight font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Our Favorites</span>
              <h2 className="text-5xl font-serif text-primary">Featured Delights</h2>
            </div>
            <Link to="/menu" className="text-primary font-bold flex items-center space-x-2 hover:text-highlight transition-colors group">
              <span>View Full Menu</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Banner */}
      <section className="py-32 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2000"
            alt="Coffee beans"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-accent mb-8 leading-tight">
              "Coffee is a hug in a mug, and cake is a <span className="italic text-highlight">sweet melody</span> for the soul."
            </h2>
            <div className="w-20 h-1 bg-highlight mx-auto mb-8"></div>
            <p className="text-accent/70 font-serif italic text-xl">
              Handcrafted with passion in Mandalay
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-32 bg-accent/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[48px] text-center shadow-sm hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                <Coffee size={32} className="text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Specialty Coffee</h3>
              <p className="text-sm text-secondary/70 mb-8">From velvet mochas to floral lattes, discover your perfect brew.</p>
              <Link to="/menu?category=coffee" className="text-highlight font-bold uppercase tracking-widest text-xs hover:underline">Explore Coffee</Link>
            </div>

            <div className="bg-white p-12 rounded-[48px] text-center shadow-sm hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                <Cake size={32} className="text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Artisan Cakes</h3>
              <p className="text-sm text-secondary/70 mb-8">Decadent layers of sweetness, baked fresh with premium ingredients.</p>
              <Link to="/menu?category=cake" className="text-highlight font-bold uppercase tracking-widest text-xs hover:underline">Explore Cakes</Link>
            </div>

            <div className="bg-white p-12 rounded-[48px] text-center shadow-sm hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                <Utensils size={32} className="text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">Fresh Breads</h3>
              <p className="text-sm text-secondary/70 mb-8">Traditional sourdough and buttery brioche, the heart of our bakery.</p>
              <Link to="/menu?category=bread" className="text-highlight font-bold uppercase tracking-widest text-xs hover:underline">Explore Bread</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Coffee, Utensils, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-32 bg-primary text-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000"
            alt="Cafe interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-highlight font-serif italic text-2xl mb-4 block">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-8">Crafting Sweet Melodies</h1>
            <p className="text-xl opacity-80 max-w-2xl mx-auto font-serif italic">
              "Mocha Melody was born from a simple dream: to bring the elegance of European bakeries to the vibrant streets of Mandalay."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
              <div className="aspect-square rounded-[80px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556217477-d32525143809?auto=format&fit=crop&q=80&w=1000"
                  alt="Baker at work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-highlight p-10 rounded-[40px] shadow-2xl text-white hidden md:block">
                <p className="text-4xl font-serif mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold">Handmade Daily</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-5xl font-serif text-primary mb-8">The Heart of Mandalay</h2>
              <p className="text-secondary/70 leading-relaxed text-lg mb-6">
                Located in the historic heart of Mandalay, Mocha Melody is more than just a café—it's a sanctuary. We believe that the best things in life are made slowly, with patience and the finest ingredients.
              </p>
              <p className="text-secondary/70 leading-relaxed text-lg mb-10">
                Our journey started with a small oven and a passion for the perfect sourdough. Today, we continue that tradition, sourcing our coffee beans from local Shan highlands and our butter from the finest French creameries.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-2xl text-primary">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">Made with Love</h4>
                    <p className="text-sm text-secondary/60">Every pastry is a labor of love.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-2xl text-primary">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">Premium Quality</h4>
                    <p className="text-sm text-secondary/60">Only the finest ingredients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-accent/20 rounded-[64px] p-12 md:p-24 text-center">
            <h2 className="text-4xl font-serif text-primary mb-16">What Defines Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <Coffee size={40} className="text-highlight mx-auto mb-6" />
                <h3 className="text-2xl font-serif text-primary mb-4">Ethical Sourcing</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">We work directly with local farmers in Myanmar to ensure fair trade and the highest quality beans.</p>
              </div>
              <div>
                <Utensils size={40} className="text-highlight mx-auto mb-6" />
                <h3 className="text-2xl font-serif text-primary mb-4">Freshly Baked</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">Our ovens never stop. We bake in small batches throughout the day to ensure every bite is fresh.</p>
              </div>
              <div>
                <Heart size={40} className="text-highlight mx-auto mb-6" />
                <h3 className="text-2xl font-serif text-primary mb-4">Community First</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">Mocha Melody is a space for everyone. We host local artists and musicians to keep the melody alive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-accent pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-serif font-bold mb-6">MOCHA MELODY</h3>
          <p className="text-sm opacity-70 leading-relaxed mb-6">
            Crafting moments of sweetness and warmth in the heart of Mandalay. Luxury coffee, artisanal cakes, and fresh bread baked with love.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-highlight transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-highlight transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-highlight transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 italic">Quick Links</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li><a href="/" className="hover:text-highlight transition-colors">Home</a></li>
            <li><a href="/menu" className="hover:text-highlight transition-colors">Menu</a></li>
            <li><a href="/about" className="hover:text-highlight transition-colors">Our Story</a></li>
            <li><a href="/contact" className="hover:text-highlight transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 italic">Contact Us</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li className="flex items-center space-x-3">
              <MapPin size={16} className="text-highlight" />
              <span>78th Street, Mandalay, Myanmar</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-highlight" />
              <span>+95 9 123 456 789</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-highlight" />
              <span>hello@mochamelody.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6 italic">Opening Hours</h4>
          <ul className="space-y-4 text-sm opacity-70">
            <li className="flex justify-between">
              <span>Mon - Fri</span>
              <span>7:00 AM - 9:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sat - Sun</span>
              <span>8:00 AM - 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-accent/10 text-center text-xs opacity-50">
        <p>© 2026 Mocha Melody Café. All rights reserved. Designed with love in Mandalay.</p>
      </div>
    </footer>
  );
};

export default Footer;

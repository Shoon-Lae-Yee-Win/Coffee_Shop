import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Instagram, Facebook, Music2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-highlight font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get in Touch</span>
          <h1 className="text-6xl font-serif text-primary mb-6">Visit Our Sanctuary</h1>
          <p className="text-secondary/70 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our menu or want to book a table for a special occasion, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="bg-white p-10 rounded-[48px] shadow-sm border border-primary/5">
              <h2 className="text-3xl font-serif text-primary mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-2xl text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">Our Location</h4>
                    <p className="text-secondary/60">78th Street, Between 30th & 31st St,<br />Mandalay, Myanmar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-2xl text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">Phone Number</h4>
                    <p className="text-secondary/60">+95 9 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-2xl text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-primary mb-1">Email Address</h4>
                    <p className="text-secondary/60">hello@mochamelody.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-primary/10">
                <h4 className="font-serif text-xl text-primary mb-6 italic">Follow the Melody</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-accent transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-accent transition-all">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-accent transition-all">
                    <Music2 size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-white rounded-[48px] overflow-hidden shadow-sm border border-primary/5 relative group">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map placeholder" 
                className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur px-8 py-4 rounded-full shadow-xl flex items-center space-x-3">
                  <MapPin className="text-highlight" />
                  <span className="font-bold text-primary">Find us in Mandalay</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 md:p-16 rounded-[64px] shadow-xl border border-primary/5"
          >
            <h2 className="text-4xl font-serif text-primary mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary/50 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-accent/30 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-highlight outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary/50 ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-accent/30 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-highlight outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary/50 ml-4">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about catering"
                  className="w-full bg-accent/30 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-highlight outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary/50 ml-4">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className="w-full bg-accent/30 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-highlight outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-accent py-5 rounded-full font-bold text-lg shadow-xl hover:bg-secondary transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-3">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'coffee' | 'cake' | 'bread';
  image: string;
  longDescription: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Velvet Mocha',
    price: 5.50,
    description: 'Rich dark chocolate blended with our signature espresso.',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Our Velvet Mocha is a masterpiece of balance. We combine premium dark chocolate ganache with a double shot of our house-blend espresso, topped with silky steamed milk and a dusting of cocoa. Perfect for those who love a sweet yet sophisticated caffeine kick.'
  },
  {
    id: '2',
    name: 'Rose Gold Latte',
    price: 6.00,
    description: 'A delicate floral latte with a hint of honey.',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1593967858208-67ddb5b4cfee?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Infused with organic rose petals and locally sourced honey, this latte is as beautiful as it is delicious. The floral notes perfectly complement the nutty undertones of our medium roast beans.'
  },
  {
    id: '3',
    name: 'Caramel Cloud Cold Brew',
    price: 5.25,
    description: '12-hour cold brew topped with salted caramel cold foam.',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Our cold brew is steeped for 12 hours for maximum smoothness. It is then topped with a thick layer of handcrafted salted caramel cold foam that slowly melts into the coffee, creating a dreamy, cloud-like experience.'
  },
  {
    id: '4',
    name: 'Strawberry Dream Cake',
    price: 7.50,
    description: 'Light sponge cake with fresh strawberries and cream.',
    category: 'cake',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800',
    longDescription: 'A slice of pure happiness. Our Strawberry Dream Cake features three layers of airy vanilla sponge, filled with fresh Mandalay strawberries and Madagascar vanilla bean whipped cream. It is light, refreshing, and perfectly sweet.'
  },
  {
    id: '5',
    name: 'Midnight Chocolate Truffle',
    price: 8.00,
    description: 'Decadent flourless chocolate cake with a molten center.',
    category: 'cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    longDescription: 'For the true chocolate lover. This decadent cake is made with 70% dark Belgian chocolate. Served slightly warm to reveal a silky truffle center, it is the ultimate luxury treat.'
  },
  {
    id: '6',
    name: 'Earl Grey Lemon Tart',
    price: 6.50,
    description: 'Zesty lemon curd infused with aromatic Earl Grey tea.',
    category: 'cake',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=800',
    longDescription: 'A sophisticated twist on a classic. Our buttery shortcrust pastry is filled with a bright lemon curd that has been steeped with premium Earl Grey tea leaves, adding a subtle bergamot aroma that lingers on the palate.'
  },
  {
    id: '7',
    name: 'Artisan Sourdough',
    price: 9.00,
    description: 'Traditional 36-hour fermented sourdough with a crisp crust.',
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1585478259715-876acc5be8eb?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Baked fresh every morning using our 5-year-old starter. This bread has a perfectly chewy interior with large air pockets and a deep, complex flavor that only comes from slow fermentation.'
  },
  {
    id: '8',
    name: 'Golden Brioche Loaf',
    price: 7.00,
    description: 'Rich, buttery, and slightly sweet French-style bread.',
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    longDescription: 'Our brioche is made with high-quality French butter and organic eggs, giving it a beautiful golden hue and a melt-in-your-mouth texture. Perfect for French toast or simply enjoyed with a spread of salted butter.'
  },
  {
    id: '9',
    name: 'Honey Walnut Focaccia',
    price: 8.50,
    description: 'Soft focaccia topped with toasted walnuts and local honey.',
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=800',
    longDescription: 'A unique sweet and savory combination. Our soft, olive oil-rich focaccia is topped with crunchy toasted walnuts and finished with a generous drizzle of wildflower honey from the Shan hills.'
  }
];

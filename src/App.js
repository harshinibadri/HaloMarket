import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    // Mock product data, you can replace this with API calls
    setProducts([
      { id: 1, title: 'Sleek Running Shoes ', description: 'Comfortable and stylish shoes perfect for both casual wear and intense workouts.', price: 200, image: '/images/product17.jpg' },
      { id: 2, title: 'Premium Gaming Laptop', description: 'High-performance laptop with top-tier specs for the ultimate gaming experience.', price: 10000, image: '/images/product2.jpg' },
      { id: 3, title: 'Eco-Friendly Water Bottle', description: 'Sustainable, BPA-free water bottle that keeps your drinks cold for hours.', price: 30, image: '/images/product19.png' },
      { id: 4, title: 'Nourishing Face Wash', description: ' Gentle cleanser that refreshes and hydrates your skin for a glowing complexion.', price: 140, image: '/images/product4.jpg' },
      { id: 5, title: 'Hydrating Serum', description: 'Lightweight serum that deeply hydrates and reduces fine lines for youthful skin.', price: 90, image: '/images/product5.jpg' },
      { id: 6, title: 'Custom Curology Skincare Kit', description: 'Personalized skincare kit designed to address your unique skin concerns.', price: 200, image: '/images/product6.jpg' },
      { id: 7, title: 'Luxury Necessaire Body Set', description: 'Premium body care set for a spa-like experience at ', price: 350, image: '/images/product7.jpg' },
      { id: 8, title: 'Organic Hemp Seed Oil', description: 'Multi-purpose oil packed with essential fatty acids and antioxidants for skin and hair.', price: 245, image: '/images/product8.jpg' },
      { id: 9, title: 'Elegant Chair Set', description: 'Stylish and comfortable chair set designed to elevate your living space.', price: 5500, image: '/images/product9.jpg' },
      { id: 10, title: 'Chic Evening Dress', description: 'Elegant dress crafted for special occasions with a flattering silhouette.', price: 565, image: '/images/product16.jpg' },
      { id: 11, title: 'Contemporary Sofa', description: ' Modern and stylish sofa offering both comfort and aesthetic appeal.', price: 700, image: '/images/product11.jpg' },
      { id: 12, title: 'Soft Cotton Bedsheets ', description: 'Luxurious cotton bedsheets that ensure a comfortable, restful nights sleep.', price: 280, image: '/images/product12.jpg' },
      { id: 13, title: 'Lavender Purple Kurti ', description: 'Vibrant lavender kurti crafted for both comfort and elegance.3', price: 690, image: '/images/product13.jpg' },
      { id: 14, title: 'Emerald Green Kurti', description: 'Stunning green kurti with a perfect blend of traditional and modern style.', price: 700, image: '/images/product14.jpg' },
      { id: 15, title: 'Stylish Men’s Shirt', description: 'Premium men’s shirt ideal for both formal and casual wear with a sleek design.', price: 510, image: '/images/product15.jpg' },
    ]);
  }, []);

   // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Header cart={cart} setSearchTerm={setSearchTerm} />
      <Routes>
        {/* Pass filtered products to ProductList */}
        <Route path="/" element={<ProductList products={filteredProducts} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;

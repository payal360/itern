import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import FoodDetails from './pages/FoodDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('cartItems');
    return saved ? JSON.parse(saved) : [];
  });

  // Update dark mode in localStorage and document
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Update cart in localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart handler
  const handleAddToCart = (food, action) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === food.id);

      if (action === 'add') {
        if (existingItem) {
          return prevItems.map(item =>
            item.id === food.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevItems, { ...food, quantity: 1 }];
      }

      if (action === 'increase') {
        return prevItems.map(item =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      if (action === 'decrease') {
        if (existingItem.quantity === 1) {
          return prevItems.filter(item => item.id !== food.id);
        }
        return prevItems.map(item =>
          item.id === food.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      return prevItems;
    });
  };

  // Update quantity handler
  const handleUpdateQuantity = (id, action) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === id);
      
      if (action === 'increase') {
        return prevItems.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      if (action === 'decrease') {
        if (existingItem.quantity === 1) {
          return prevItems.filter(item => item.id !== id);
        }
        return prevItems.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }

      return prevItems;
    });
  };

  // Remove item handler
  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Clear cart handler
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Calculate cart count
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
          <Navbar 
            cartCount={cartCount} 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
          />
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onAddToCart={handleAddToCart} 
                  cartItems={cartItems} 
                />
              } 
            />
            <Route 
              path="/menu" 
              element={
                <Menu 
                  onAddToCart={handleAddToCart} 
                  cartItems={cartItems} 
                />
              } 
            />
            <Route 
              path="/food/:id" 
              element={
                <FoodDetails 
                  onAddToCart={handleAddToCart} 
                  cartItems={cartItems} 
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                  onClearCart={handleClearCart}
                />
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <Checkout 
                  cartItems={cartItems}
                  onClearCart={handleClearCart}
                />
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

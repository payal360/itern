import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import foodData, { restaurants, categories } from '../data/foodData';
import FoodCard from '../components/FoodCard';
import SearchBar from '../components/SearchBar';
import SkeletonCard from '../components/SkeletonCard';

const Home = ({ onAddToCart, cartItems }) => {
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const popularFoods = foodData.filter(food => food.isPopular);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const filteredFoods = popularFoods.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    food.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-orange-400 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Delicious Food,
                <br />
                Delivered to You
              </h1>
              <p className="text-lg text-orange-100">
                Order your favorite meals from the best restaurants in town.
                Fast delivery, fresh food, amazing taste!
              </p>
              <Link
                to="/menu"
                className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
              >
                Explore Menu
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500"
                alt="Delicious food"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-gray-50 dark:fill-gray-900"
            />
          </svg>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 -mt-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Browse Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/menu?category=${category.id}`}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <span className="text-4xl mb-2">{category.icon}</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Featured Restaurants
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.slice(0, 6).map(restaurant => (
              <div
                key={restaurant.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Restaurant';
                  }}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {restaurant.cuisine}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="flex items-center text-sm">
                      <span className="text-yellow-400 mr-1">★</span>
                      {restaurant.rating}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {restaurant.deliveryTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Foods Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Popular Right Now 🔥
            </h2>
            <Link
              to="/menu"
              className="text-primary hover:text-orange-600 font-medium"
            >
              View All →
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredFoods.slice(0, 8).map(food => (
                <FoodCard
                  key={food.id}
                  food={food}
                  onAddToCart={onAddToCart}
                  cartItems={cartItems}
                />
              ))}
            </div>
          )}
          
          {!loading && filteredFoods.length === 0 && (
            <div className="text-center py-12">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                No foods found
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try searching for something else
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Hungry? Order Now!</h2>
          <p className="text-orange-100 mb-8">
            Get your favorite food delivered to your doorstep in minutes.
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg"
          >
            Order Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">🍔</span>
                <span className="text-xl font-bold">FoodieHub</span>
              </div>
              <p className="text-gray-400">
                Delicious food delivered to your doorstep.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/menu" className="hover:text-white">Menu</Link></li>
                <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/menu?category=veg" className="hover:text-white">Vegetarian</Link></li>
                <li><Link to="/menu?category=non-veg" className="hover:text-white">Non-Veg</Link></li>
                <li><Link to="/menu?category=dessert" className="hover:text-white">Desserts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📍 123 Food Street, City</li>
                <li>📞 +91 1234567890</li>
                <li>✉️ hello@foodiehub.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 FoodieHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

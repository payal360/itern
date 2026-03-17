import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import foodData from '../data/foodData';
import FoodCard from '../components/FoodCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import SkeletonCard from '../components/SkeletonCard';

const Menu = ({ onAddToCart, cartItems }) => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  useEffect(() => {
    // Get category from URL params
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [searchParams]);

  // Filter foods
  let filteredFoods = foodData.filter(food => {
    const matchesSearch = 
      food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.restaurant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      food.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' || food.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort foods
  if (sortBy === 'price-low') {
    filteredFoods = [...filteredFoods].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredFoods = [...filteredFoods].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredFoods = [...filteredFoods].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
            Our Menu
          </h1>
          
          {/* Search */}
          <div className="mb-6">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
            
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <label className="text-gray-600 dark:text-gray-400 text-sm">
                Sort by:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Food Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results count */}
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Showing {filteredFoods.length} items
        </p>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredFoods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFoods.map(food => (
              <FoodCard
                key={food.id}
                food={food}
                onAddToCart={onAddToCart}
                cartItems={cartItems}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-6xl mb-4 block">🔍</span>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              No items found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

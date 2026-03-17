import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import foodData from '../data/foodData';

const FoodDetails = ({ onAddToCart, cartItems }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const food = foodData.find(f => f.id === parseInt(id));

  if (!food) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block">😕</span>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
            Food not found
          </h2>
          <Link
            to="/menu"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const isInCart = cartItems.some(item => item.id === food.id);
  const cartItem = cartItems.find(item => item.id === food.id);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'veg':
        return 'bg-green-500';
      case 'non-veg':
        return 'bg-red-500';
      case 'dessert':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Get related foods
  const relatedFoods = foodData
    .filter(f => f.category === food.category && f.id !== food.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-500 dark:text-gray-400">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/menu" className="hover:text-primary">Menu</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 dark:text-gray-300">{food.name}</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-xl"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x400?text=Food+Image';
              }}
            />
            <span className={`absolute top-4 left-4 ${getCategoryColor(food.category)} text-white text-sm px-3 py-1 rounded-full capitalize`}>
              {food.category}
            </span>
            {food.isPopular && (
              <span className="absolute top-4 right-4 bg-yellow-400 text-gray-800 text-sm px-3 py-1 rounded-full font-medium">
                ⭐ Popular
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
                {food.name}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                by {food.restaurant}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-lg">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="font-semibold">{food.rating}</span>
              </div>
              <span className="text-gray-500 dark:text-gray-400">
                1000+ ratings
              </span>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-primary">
              ₹{food.price}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Description
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {food.description}
              </p>
            </div>

            {/* Add to Cart */}
            <div className="pt-4">
              {isInCart ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 dark:text-gray-300">Quantity:</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => onAddToCart(food, 'decrease')}
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-xl font-bold"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold text-gray-700 dark:text-white w-8 text-center">
                      {cartItem.quantity}
                    </span>
                    <button
                      onClick={() => onAddToCart(food, 'increase')}
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-xl font-bold"
                    >
                      +
                    </button>
                  </div>
                  <Link
                    to="/cart"
                    className="ml-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    Go to Cart
                  </Link>
                </div>
              ) : (
                <button
                  onClick={() => onAddToCart(food, 'add')}
                  className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg"
                >
                  Add to Cart - ₹{food.price}
                </button>
              )}
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t dark:border-gray-700">
              <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl block mb-1">🚚</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Free Delivery</span>
              </div>
              <div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <span className="text-2xl block mb-1">⏱️</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">30-40 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Foods */}
        {relatedFoods.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedFoods.map(relatedFood => (
                <div
                  key={relatedFood.id}
                  onClick={() => navigate(`/food/${relatedFood.id}`)}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105"
                >
                  <img
                    src={relatedFood.image}
                    alt={relatedFood.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {relatedFood.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-primary font-bold">₹{relatedFood.price}</span>
                      <span className="flex items-center text-sm text-gray-500">
                        <span className="text-yellow-400 mr-1">★</span>
                        {relatedFood.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodDetails;

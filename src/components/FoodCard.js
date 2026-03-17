import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ food, onAddToCart, cartItems }) => {
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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/food/${food.id}`} className="block relative">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Food+Image';
          }}
        />
        {/* Category Badge */}
        <span className={`absolute top-3 left-3 ${getCategoryColor(food.category)} text-white text-xs px-2 py-1 rounded-full capitalize`}>
          {food.category}
        </span>
        {/* Popular Badge */}
        {food.isPopular && (
          <span className="absolute top-3 right-3 bg-yellow-400 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
            ⭐ Popular
          </span>
        )}
      </Link>

      <div className="p-4">
        <Link to={`/food/${food.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:text-primary transition-colors">
            {food.name}
          </h3>
        </Link>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-2">
          {food.description}
        </p>

        <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            {food.rating}
          </span>
          <span className="mx-2">•</span>
          <span>{food.restaurant}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-primary">₹{food.price}</span>
          
          {isInCart ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onAddToCart(food, 'decrease')}
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                -
              </button>
              <span className="text-gray-700 dark:text-white font-medium w-6 text-center">
                {cartItem.quantity}
              </span>
              <button
                onClick={() => onAddToCart(food, 'increase')}
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => onAddToCart(food, 'add')}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

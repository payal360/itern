import React from 'react';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/100x100?text=Food';
        }}
      />

      {/* Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {item.restaurant}
        </p>
        <p className="text-primary font-bold mt-1">₹{item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onUpdateQuantity(item.id, 'decrease')}
          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors font-bold"
        >
          -
        </button>
        <span className="text-gray-700 dark:text-white font-medium w-8 text-center">
          {item.quantity}
        </span>
        <button
          onClick={() => onUpdateQuantity(item.id, 'increase')}
          className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors font-bold"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
        title="Remove item"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>

      {/* Item Total */}
      <div className="text-right min-w-[80px]">
        <p className="text-sm text-gray-500 dark:text-gray-400">Total</p>
        <p className="text-lg font-bold text-gray-800 dark:text-white">
          ₹{item.price * item.quantity}
        </p>
      </div>
    </div>
  );
};

export default CartItem;

import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 500 ? 0 : 40;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center px-4">
          <span className="text-8xl mb-6 block">🛒</span>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Your Cart ({cartItems.length} items)
          </h1>
          <button
            onClick={onClearCart}
            className="text-red-500 hover:text-red-600 font-medium"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveItem}
              />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Delivery Fee</span>
                  <span className={deliveryFee === 0 ? 'text-green-500' : ''}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax (5%)</span>
                  <span>₹{tax}</span>
                </div>
                
                {subtotal < 500 && (
                  <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 p-3 rounded-lg text-sm">
                    Add ₹{500 - subtotal} more for free delivery!
                  </div>
                )}

                <div className="border-t dark:border-gray-700 pt-4">
                  <div className="flex justify-between text-xl font-bold text-gray-800 dark:text-white">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="mt-6 w-full block text-center py-3 bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/menu"
                className="mt-3 w-full block text-center py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

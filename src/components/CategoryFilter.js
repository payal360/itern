import React from 'react';
import { categories } from '../data/foodData';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-primary text-white shadow-lg scale-105'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
          }`}
        >
          <span className="text-lg">{category.icon}</span>
          <span className="font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

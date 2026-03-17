import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="skeleton h-48 w-full"></div>
      <div className="p-4 space-y-3">
        <div className="skeleton h-6 w-3/4 rounded"></div>
        <div className="skeleton h-4 w-full rounded"></div>
        <div className="skeleton h-4 w-2/3 rounded"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="skeleton h-6 w-20 rounded"></div>
          <div className="skeleton h-10 w-28 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;

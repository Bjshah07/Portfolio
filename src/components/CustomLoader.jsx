import React from 'react';

const CustomLoader = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p className="ml-4 text-white text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default CustomLoader;

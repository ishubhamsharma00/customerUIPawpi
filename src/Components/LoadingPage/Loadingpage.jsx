// LoadingPage.js
import React from 'react';
import loading from '../../Images/loading page/loader.gif'; 

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="text-center">
        <img
          src={loading} 
          alt="Dog Running"
          className="w-full h-full max-h-96 mb-4 rounded-md" 
        />
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;

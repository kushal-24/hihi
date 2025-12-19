// Loader.jsx
import React from 'react';

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-pink-100/80 backdrop-blur-sm">
      <div 
        className="
          w-16 h-16 border-4 border-t-4 border-pink-500 border-t-transparent rounded-full 
          animate-spin
        "
      ></div>
      <p className="mt-4 text-pink-700 font-bold">Loading Manasvi's World...</p>
    </div>
  );
}

export default Loader;
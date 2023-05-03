import React from 'react';

const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16 8 8 0 000 16z"></path>
      </svg>
      <h2 className="text-lg font-bold tracking-wider text-blue-800">Loading...</h2>
    </div>
  );
};

export default Spinner;

import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const baseStyles = "px-4 py-2 font-semibold rounded-md shadow-sm focus:outline-none";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring focus:ring-gray-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;

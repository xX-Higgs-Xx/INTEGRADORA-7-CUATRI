import React from 'react';

const InputField = ({ type, placeholder }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full p-2 mt-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
    />
  );
};

export default InputField;

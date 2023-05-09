import React from "react";

function Input({ label, name, id, type, value, onChange }) {
  return (
    <>
      <label htmlFor="email" className="block font-semibold text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Input;

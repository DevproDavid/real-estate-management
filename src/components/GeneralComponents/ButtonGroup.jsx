import React from 'react';

function ButtonGroup({
  buttons = [],
  selected = null,
  onSelect = () => {},
  className = '',
}) {
  return (
    <div
      className={`w-full max-w-full md:w-[210px] 
        bg-gray-100 border border-gray-400 
        px-1.5 py-1.5 
        rounded-t-xl md:rounded-xl 
        flex justify-between items-center 
        gap-2 md:gap-1 
        overflow-visible mt-0
        ${className}`}
    >
      {buttons.map((label, index) => (
        <button
          key={index}
          onClick={() => onSelect(label)}
          className={`flex-1 text-lg md:text-sm py-3 md:py-2 rounded-md text-black transition text-center
            ${
              selected === label
                ? 'bg-[#D1F0E2] font-bold text-green-600'
                : 'hover:bg-gray-200'
            }
          `}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;

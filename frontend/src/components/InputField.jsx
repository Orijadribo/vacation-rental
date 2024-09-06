import React, { useState } from 'react';

const InputField = ({ label, type, name, value, setValue }) => {
  const [isFocused, setIsFocused] = useState(false);
//   const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className='relative my-2 w-full max-w-md'>
      <input
        type={type}
        id={name}
        name={name}
        autoComplete='on'
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className='h-14 w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-base focus:outline-none focus:ring-2 focus:ring-[#7108AA] focus:border-transparent'
        placeholder=' '
      />
      <label
        className={`absolute left-3 transition-all duration-150 ease-out pointer-events-none ${
          isFocused || value
            ? 'top-2 text-xs text-[#7108AA]'
            : 'top-1/2 -translate-y-1/2 text-base text-gray-500'
        }`}
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;

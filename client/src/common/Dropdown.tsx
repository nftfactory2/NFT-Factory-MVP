'use client';
import React, { useState, useEffect } from 'react';

interface DropdownList {
  item: string[];
  title: string;
  subTitle?: string;
  onChangeHandler: (value: string | number) => void;
}

const DropdownSelect: React.FC<DropdownList> = ({
  item,
  title,
  subTitle,
  onChangeHandler,
}) => {
  const [value, setValue] = useState<string | number>('');
  useEffect(() => {
    if (onChangeHandler) {
      onChangeHandler(value);
    }
  }, [value]);

  return (
    <div className='my-4'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      {subTitle && <h3 className='text-sm text-gray-600'>{subTitle}</h3>}
      <div className='mt-2'>
        <select
          value={value}
          placeholder='Select'
          name={title}
          className='py-2 px-3 border rounded-md w-full text-black bg-white'
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {item.length > 0 &&
            item.map((x, index) => (
              <option key={index} value={x}>
                {x}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownSelect;

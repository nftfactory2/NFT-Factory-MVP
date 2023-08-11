import React, { useState, useEffect } from 'react';

interface Props {
  title: string;
  placeholder: string;
  onChangeHandler: (value: string) => void;
  style?: object;
  type: string;
  name: string;
}

const EditableSection: React.FC<Props> = (props) => {
  const { title, placeholder, onChangeHandler, style, type, name } = props;
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (onChangeHandler) {
        onChangeHandler(value);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  return (
    <div
      className='mb-4 flex flex-column'
      style={{
        ...style,
      }}
    >
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor='email'
      >
        {title}:
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={type}
        name={name}
        type={type ?? 'text'}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default EditableSection;

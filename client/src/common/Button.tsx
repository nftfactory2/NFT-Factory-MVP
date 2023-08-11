import React from 'react';

interface CustomButton {
  height?: number;
  width?: number;
  text: string;
  backgroundColor?: string;
  style?: object;
}

const Button: React.FC<CustomButton> = ({
  height,
  width = 100,
  text,
  backgroundColor = 'primary',
  style,
}) => {
  return (
    <div
      className={`bg-${backgroundColor}`}
      style={{
        width: `${width}%`,
        height,
        ...style,
      }}
    >
      {text}
    </div>
  );
};

export default Button;

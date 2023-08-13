import React, { ReactNode } from 'react';
import Link from 'next/link';
interface CustomButton {
  height?: number;
  width?: number;
  children?: ReactNode;
  backgroundColor?: string;
  style?: object;
  as?: string;
  href?: string;
  handleClick?: () => void;
}

const Button: React.FC<CustomButton> = ({
  height,
  width = 100,
  children,
  backgroundColor = 'primary',
  style,
  as = 'button',
  href = '/',
  handleClick,
}) => {
  return (
    <div
      className={`bg-${backgroundColor}`}
      onClick={handleClick}
      style={{
        width: `${width}%`,
        height,
        cursor: 'pointer',
        ...style,
      }}
    >
      {as === 'link' ? <Link href={href}>{children}</Link> : <>{children}</>}
    </div>
  );
};

export default Button;

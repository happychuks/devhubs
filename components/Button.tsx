import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring';
  const variantStyles =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300'
      : 'bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-300';

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;

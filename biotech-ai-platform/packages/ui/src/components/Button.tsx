import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded font-semibold";
  const styles = variant === 'primary'
    ? `${baseStyle} bg-blue-500 text-white hover:bg-blue-600`
    : `${baseStyle} bg-gray-200 text-gray-800 hover:bg-gray-300`;
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

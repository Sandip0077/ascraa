// File: src/components/ui/badge.js
import React from 'react';
import classNames from 'classnames';

export const Badge = ({ variant = 'default', className = '', children, ...props }) => {
  const base = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-600 text-white border-transparent',
    secondary: 'bg-gray-100 text-gray-800 border-transparent',
    destructive: 'bg-red-600 text-white border-transparent',
    outline: 'border-gray-300 text-gray-800',
  };

  return (
    <div
      className={classNames(base, variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
};

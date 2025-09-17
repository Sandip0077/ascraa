// button.js
import React from 'react';
import classNames from 'classnames';

export const Button = React.forwardRef(
  ({ variant = 'default', size = 'default', className = '', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      outline: 'border border-gray-300 bg-white hover:bg-gray-50 focus:ring-blue-500',
      ghost: 'bg-transparent hover:bg-gray-100 focus:ring-blue-500',
    };
    const sizes = {
      default: 'h-10 px-4 py-2 text-sm',
      sm: 'h-8 px-3 text-sm',
      icon: 'h-10 w-10 p-0',
    };
    return (
      <button
        ref={ref}
        className={classNames(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

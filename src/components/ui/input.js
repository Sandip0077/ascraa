// File: src/components/ui/input.js
import React from 'react';
import classNames from 'classnames';

/**
 * Input component wrapper
 */
export function Input({ className = '', ...props }) {
  return (
    <input
      className={classNames(
        'block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500',
        className
      )}
      {...props}
    />
  );
}
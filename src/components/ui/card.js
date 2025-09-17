// File: src/components/ui/card.js
import React from 'react';
import classNames from 'classnames';

export function Card({ className = '', children }) {
  return (
    <div className={classNames('bg-white shadow rounded-lg', className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className = '', children }) {
  return (
    <div className={classNames('px-4 py-2 border-b border-gray-200', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className = '', children }) {
  return (
    <h3 className={classNames('text-lg font-semibold text-gray-900', className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className = '', children }) {
  return (
    <p className={classNames('text-sm text-gray-600', className)}>
      {children}
    </p>
  );
}

export function CardContent({ className = '', children }) {
  return (
    <div className={classNames('p-4', className)}>
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children }) {
  return (
    <div className={classNames('px-4 py-2 border-t border-gray-200', className)}>
      {children}
    </div>
  );
}

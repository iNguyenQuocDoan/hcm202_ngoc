'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/shared/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? props.name;
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'h-10 rounded-md border border-gray-300 px-3 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
            className,
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';

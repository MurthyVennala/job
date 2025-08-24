import React, { ElementType } from 'react';
import clsx from 'clsx';

// We make the component polymorphic by using a generic type `T` for the element type.
// The `as` prop allows consumers to specify what element should be rendered.
type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: 'primary' | 'ghost' | 'outline';
  // We also pass through all other props that the element might have,
  // but we omit our custom props to avoid conflicts.
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'variant'>;

// The default element type is 'button'.
export default function Button<T extends ElementType = 'button'>({
  as,
  className,
  variant = 'primary',
  ...rest
}: ButtonProps<T>): React.ReactNode {
  const Component = as || 'button';

  return (
    <Component
      className={clsx(
        'px-4 py-2 rounded-xl text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 focus:ring-blue-500',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed',
        variant === 'ghost' && 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800',
        variant === 'outline' && 'border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800',
        className
      )}
      {...rest}
    />
  );
}

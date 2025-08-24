
import React, { PropsWithChildren } from 'react';

export default function Badge({ children }: PropsWithChildren<{}>): React.ReactNode {
  return (
    <span className="inline-block text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 font-medium">
      {children}
    </span>
  );
}

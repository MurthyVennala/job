
import React, { PropsWithChildren } from 'react';

export default function Card({ children }: PropsWithChildren<{}>): React.ReactNode {
  return (
    <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-100/70 dark:border-gray-800 p-4">
      {children}
    </div>
  );
}

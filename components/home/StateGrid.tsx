
import React from 'react';
import Card from '../ui/Card';
import { Messages } from '../../types';

interface StateGridProps {
  dict: Messages;
  states: string[];
}

export default function StateGrid({ dict, states }: StateGridProps): React.ReactNode {
  return (
    <Card>
      <h3 className="text-base font-semibold mb-3">{dict.quick.state}</h3>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-11 gap-2">
        {states.map(s => (
          <a key={s} href={`#/state/${s.toLowerCase()}`} className="px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm text-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            {s}
          </a>
        ))}
      </div>
    </Card>
  );
}

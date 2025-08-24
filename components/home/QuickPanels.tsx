
import React from 'react';
import Card from '../ui/Card';
import { Messages } from '../../types';

interface QualificationPanelProps {
  dict: Messages;
  qualifications: { key: string; label: string }[];
}

export function QualificationPanel({ dict, qualifications }: QualificationPanelProps): React.ReactNode {
  return (
    <Card>
      <h3 className="text-base font-semibold mb-3">{dict.quick.qualification}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {qualifications.map(q => (
          <a key={q.key} href={`#/qualification/${q.key.toLowerCase()}`} className="text-center px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            {q.label}
          </a>
        ))}
      </div>
    </Card>
  );
}

interface SectorPanelProps {
  dict: Messages;
  sectors: { key: string; label: string }[];
}

export function SectorPanel({ dict, sectors }: SectorPanelProps): React.ReactNode {
  return (
    <Card>
      <h3 className="text-base font-semibold mb-3">{dict.quick.sector}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {sectors.map(s => (
          <a key={s.key} href={`#/sector/${s.key.toLowerCase()}`} className="text-center px-3 py-2 rounded-xl border border-gray-200 dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            {s.label}
          </a>
        ))}
      </div>
    </Card>
  );
}


import React from 'react';
import Card from '../ui/Card';
import { useI18n } from '../../i18n/I18nContext';
import { GovIcon, BankIcon, TeachingIcon, RailwayIcon, PoliceIcon, EngineeringIcon } from '../../constants';

export default function CategoryGrid(): React.ReactNode {
  const { dict } = useI18n();

  const items = [
    { key: 'all-govt', label: dict.nav.allGovt, Icon: GovIcon },
    { key: 'bank', label: dict.nav.bank, Icon: BankIcon },
    { key: 'teaching', label: dict.nav.teaching, Icon: TeachingIcon },
    { key: 'railway', label: dict.nav.railway, Icon: RailwayIcon },
    { key: 'defence', label: dict.nav.defence, Icon: PoliceIcon },
    { key: 'engineering', label: dict.nav.engineering, Icon: EngineeringIcon }
  ];

  return (
    <Card>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {items.map(it => (
          <a key={it.key} href={`#/${it.key}`} className="group border border-gray-200 dark:border-gray-700 rounded-2xl p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex flex-col items-center justify-center text-center gap-3">
              <it.Icon className="w-8 h-8 text-blue-600 dark:text-blue-500" />
              <span className="text-sm font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">{it.label}</span>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
}

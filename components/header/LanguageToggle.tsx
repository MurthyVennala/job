
import React from 'react';
import { useI18n } from '../../i18n/I18nContext';
import { Locale } from '../../types';

const langs: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'te', label: 'తెలుగు' }
];

export default function LanguageToggle(): React.ReactNode {
  const { locale: currentLocale, setLocale } = useI18n();

  return (
    <div className="flex items-center gap-1 sm:gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
      {langs.map(l => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={`text-sm px-2 py-1 rounded-md transition-colors ${
            currentLocale === l.code 
              ? 'font-semibold bg-white dark:bg-gray-700 shadow-sm' 
              : 'hover:bg-gray-200 dark:hover:bg-gray-700/50'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

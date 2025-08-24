
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useI18n } from '../../i18n/I18nContext';

const navItems = [
  { href: '#/', labelKey: 'nav.home' },
  { href: '#/all-govt', labelKey: 'nav.allGovt' },
  { href: '#/bank', labelKey: 'nav.bank' },
  { href: '#/teaching', labelKey: 'nav.teaching' },
  { href: '#/railway', labelKey: 'nav.railway' },
  { href: '#/results', labelKey: 'nav.results' },
];

export default function NavBar(): React.ReactNode {
  const { dict } = useI18n();
  
  const getNestedValue = <T,>(obj: T, path: string): string => {
    return path.split('.').reduce((acc, key) => (acc as any)?.[key], obj) || '';
  }

  return (
    <header className="border-b border-gray-100 dark:border-gray-900 sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-3">
        <Link to="/" className="text-lg font-extrabold tracking-tight text-blue-600 dark:text-blue-500">
          {dict.brand}
        </Link>
        <nav className="hidden md:flex gap-1">
          {navItems.map(it => (
            <a key={it.href} href={it.href} className="text-sm px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {getNestedValue(dict, it.labelKey)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

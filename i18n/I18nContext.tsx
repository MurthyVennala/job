
import React, { createContext, useState, useContext, useMemo, ReactNode } from 'react';
import { Locale, Messages } from '../types';
import { messages } from './messages';
import { DEFAULT_LOCALE, LOCALES } from '../constants';

interface II18nContext {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dict: Messages;
}

const I18nContext = createContext<II18nContext | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }): React.ReactNode => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  const setLocaleHandler = (newLocale: Locale) => {
    if (LOCALES.includes(newLocale)) {
      setLocale(newLocale);
    }
  };

  const dict = useMemo(() => messages[locale], [locale]);

  const value = useMemo(() => ({ locale, setLocale: setLocaleHandler, dict }), [locale, dict]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): II18nContext => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

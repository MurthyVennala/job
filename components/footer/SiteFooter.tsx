
import React from 'react';
import { useI18n } from '../../i18n/I18nContext';

export default function SiteFooter(): React.ReactNode {
  const { dict } = useI18n();

  return (
    <footer className="mt-10 border-t border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-8 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold mb-3 text-lg text-blue-600 dark:text-blue-500">{dict.brand}</div>
          <p className="text-gray-600 dark:text-gray-400">Your one-stop portal for government job alerts, results, and admit cards.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><a href="#/about" className="hover:underline">{dict.footer.about}</a></li>
            <li><a href="#/disclaimer" className="hover:underline">{dict.footer.disclaimer}</a></li>
            <li><a href="#/privacy" className="hover:underline">{dict.footer.privacy}</a></li>
            <li><a href="#/contact" className="hover:underline">{dict.footer.contact}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Resources</div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><a href="#/results" className="hover:underline">{dict.nav.results}</a></li>
            <li><a href="#/admit-cards" className="hover:underline">{dict.nav.admit}</a></li>
            <li><a href="#/answer-keys" className="hover:underline">{dict.nav.answerKeys}</a></li>
          </ul>
        </div>
        <div className="text-gray-600 dark:text-gray-400 md:col-start-4">
          © {new Date().getFullYear()} {dict.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

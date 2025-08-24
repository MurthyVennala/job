
import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import NotificationTicker from '../components/home/NotificationTicker';
import CategoryGrid from '../components/home/CategoryGrid';
import StateGrid from '../components/home/StateGrid';
import { QualificationPanel, SectorPanel } from '../components/home/QuickPanels';
import JobCard from '../components/jobs/JobCard';
import { notifications, jobs } from '../data';
import { states, qualifications, sectors } from '../constants';

export default function HomePage(): React.ReactNode {
  const { dict } = useI18n();

  return (
    <div className="space-y-6">
      {/* Hero */}
      <section className="rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-100/70 dark:border-gray-800 p-6">
        <h1 className="text-2xl md:text-3xl font-extrabold">{dict.hero.title}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{dict.hero.subtitle}</p>
      </section>

      {/* Latest Notifications Ticker */}
      <NotificationTicker title={dict.tickers.latest} items={notifications} />

      {/* Quick Panels */}
      <div className="grid md:grid-cols-2 gap-6">
        <QualificationPanel dict={dict} qualifications={qualifications} />
        <SectorPanel dict={dict} sectors={sectors} />
      </div>

      {/* Category Shortcuts */}
      <CategoryGrid />

      {/* State Grid */}
      <StateGrid dict={dict} states={states} />

      {/* Main Job List */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold pt-4">Latest Jobs</h2>
        {jobs.map(job => <JobCard key={job.id} job={job} />)}
      </section>
    </div>
  );
}

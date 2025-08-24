import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { Job } from '../../types';
import { useI18n } from '../../i18n/I18nContext';

export default function JobCard({ job }: { job: Job }): React.ReactNode {
  const { dict } = useI18n();
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400">{job.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{job.org} • {job.sector}{job.state ? ` • ${job.state}` : ''}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {job.vacancies && <Badge>{job.vacancies} Vacancies</Badge>}
            {job.qualification.map(q => <Badge key={q}>{q}</Badge>)}
            {job.tags?.map(t => <Badge key={t}>{t}</Badge>)}
          </div>
          {job.lastDate && (
            <p className="mt-3 text-sm font-medium text-red-600 dark:text-red-400">
              Last Date: {new Date(job.lastDate).toLocaleDateString('en-GB')}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link to={`/jobs/${job.id}`}>
            <Button>{dict.actions.view}</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Job } from '../../types';

interface JobHeaderProps {
  job: Job;
}

const isExpired = (lastDate?: string): boolean => {
    if (!lastDate) return false;
    return new Date(lastDate) < new Date();
};

export default function JobHeader({ job }: JobHeaderProps): React.ReactNode {
    const expired = isExpired(job.lastDate);
    const lastDateFormatted = job.lastDate ? new Date(job.lastDate).toLocaleDateString('en-GB') : 'N/A';

  return (
    <Card>
      {expired ? (
        <Badge>⏳ This job has expired</Badge>
      ) : (
        <Badge>🔔 Apply Before {lastDateFormatted}</Badge>
      )}
      <h1 className="mt-2 text-2xl md:text-3xl font-extrabold text-blue-700 dark:text-blue-400">{job.title}</h1>
      <p className="mt-1 text-lg font-medium text-gray-700 dark:text-gray-300">{job.org}</p>
      
      <div className="mt-4 border-t border-gray-100 dark:border-gray-800 pt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Vacancies</p>
            <p className="font-semibold text-sm mt-1">{job.vacancies || 'N/A'}</p>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Qualification</p>
            <p className="font-semibold text-sm mt-1">{job.qualification.join(', ')}</p>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Age Limit</p>
            <p className="font-semibold text-sm mt-1">{job.ageLimit || 'N/A'}</p>
        </div>
        <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</p>
            <p className="font-semibold text-sm mt-1">{job.state || 'All India'}</p>
        </div>
      </div>
    </Card>
  );
}
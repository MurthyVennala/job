import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Job } from '../../types';
import { ChevronRightIcon } from '../../constants';
import { sectors } from '../../constants';
import { Link } from 'react-router-dom';

interface JobSidebarProps {
  job: Job;
  relatedJobs: Job[];
}

const isExpired = (lastDate?: string): boolean => {
    if (!lastDate) return false;
    // Set time to end of day for comparison
    const endDate = new Date(lastDate);
    endDate.setHours(23, 59, 59, 999);
    return endDate < new Date();
};

const SidebarCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <Card>
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        {children}
    </Card>
);

export default function JobSidebar({ job, relatedJobs }: JobSidebarProps): React.ReactNode {
  const expired = isExpired(job.lastDate);

  return (
    <div className="space-y-6 sticky top-20">
      {/* Links Section */}
      <SidebarCard title="Important Links">
        <div className="space-y-3">
          <div className="relative group">
            {expired ? (
              <Button
                className="w-full flex items-center justify-center gap-2"
                disabled={true}
              >
                📝 Apply Now
              </Button>
            ) : (
              <Button
                as="a"
                href={job.applyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full flex items-center justify-center gap-2"
              >
                📝 Apply Now
              </Button>
            )}
            {expired && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Applications are closed.
                </div>
            )}
          </div>
          {job.pdfUrl && (
             <Button as="a" href={job.pdfUrl} target="_blank" rel="noreferrer noopener" variant="outline" className="w-full flex items-center justify-center gap-2">
                📄 Download Official Notification
            </Button>
          )}
          {job.officialUrl && (
            <Button as="a" href={job.officialUrl} target="_blank" rel="noreferrer noopener" variant="outline" className="w-full flex items-center justify-center gap-2">
                🌐 Visit Official Website
            </Button>
          )}
        </div>
      </SidebarCard>

      {/* Related Jobs Section */}
      {relatedJobs.length > 0 && (
        <SidebarCard title={`More ${job.sector} Jobs`}>
          <ul className="space-y-3">
            {relatedJobs.map(relatedJob => (
              <li key={relatedJob.id}>
                <Link to={`/jobs/${relatedJob.id}`} className="block p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{relatedJob.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{relatedJob.org}</p>
                </Link>
              </li>
            ))}
          </ul>
        </SidebarCard>
      )}

      {/* Quick Navigation Section */}
      <SidebarCard title="Explore by Category">
        <ul className="space-y-1">
            {sectors.map(sector => (
                <li key={sector.key}>
                    <a href={`#/sector/${sector.key.toLowerCase()}`} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium">
                        <span>{sector.label} Jobs</span>
                        <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                    </a>
                </li>
            ))}
        </ul>
      </SidebarCard>
    </div>
  );
}

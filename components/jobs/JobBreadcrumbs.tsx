import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '../../constants';

interface JobBreadcrumbsProps {
  sector: string;
  title: string;
}

export default function JobBreadcrumbs({ sector, title }: JobBreadcrumbsProps): React.ReactNode {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <ChevronRightIcon className="w-4 h-4" />
        </li>
        <li>
          <a href={`#/sector/${sector.toLowerCase()}`} className="hover:underline">{sector} Jobs</a>
        </li>
        <li>
          <ChevronRightIcon className="w-4 h-4" />
        </li>
        <li className="font-medium text-gray-700 dark:text-gray-300 line-clamp-1" aria-current="page">
          {title}
        </li>
      </ol>
    </nav>
  );
}
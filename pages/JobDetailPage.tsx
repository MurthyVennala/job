import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { jobs } from '../data';
import JobBreadcrumbs from '../components/jobs/JobBreadcrumbs';
import JobHeader from '../components/jobs/JobHeader';
import JobDescription from '../components/jobs/JobDescription';
import JobSidebar from '../components/jobs/JobSidebar';
import JobSEO from '../components/jobs/JobSEO';

const setMeta = (name: string, content: string) => {
  let element = document.querySelector(`meta[name='${name}']`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setOgMeta = (property: string, content: string) => {
    let element = document.querySelector(`meta[property='${property}']`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};


export default function JobDetailPage(): React.ReactNode {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobs.find(j => j.id === jobId);

  useEffect(() => {
    if (job) {
      const plainDescription = job.description.replace(/<[^>]*>?/gm, '').substring(0, 160);
      const pageTitle = `${job.title} - ${job.org} | Sarkari Jobs Hub`;
      const url = window.location.href;

      document.title = pageTitle;
      setMeta('description', plainDescription);

      // Open Graph & Twitter
      setOgMeta('og:title', pageTitle);
      setOgMeta('og:description', plainDescription);
      setOgMeta('og:type', 'article');
      setOgMeta('og:url', url);
      setMeta('twitter:card', 'summary_large_image');
      setMeta('twitter:title', pageTitle);
      setMeta('twitter:description', plainDescription);

    } else {
      document.title = 'Job not found | Sarkari Jobs Hub';
    }
    window.scrollTo(0, 0);
  }, [job]);

  if (!job) {
    return <Navigate to="/" replace />;
  }

  const relatedJobs = jobs.filter(j => j.sector === job.sector && j.id !== job.id).slice(0, 5);

  return (
    <div className="space-y-6">
      <JobSEO job={job} />
      <JobBreadcrumbs sector={job.sector} title={job.title} />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <JobHeader job={job} />
          <JobDescription description={job.description} />
        </div>
        <aside className="lg:col-span-1 space-y-6">
          <JobSidebar job={job} relatedJobs={relatedJobs} />
        </aside>
      </div>
    </div>
  );
}
import React from 'react';
import { Job } from '../../types';

interface JobSEOProps {
  job: Job;
}

export default function JobSEO({ job }: JobSEOProps): React.ReactNode {
  const jobPosting = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description.replace(/<[^>]*>?/gm, ''), // Strip HTML for plain text description
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.org,
      "sameAs": job.officialUrl,
    },
    "datePosted": job.postedAt,
    "validThrough": job.lastDate,
    "employmentType": "FULL_TIME",
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": job.state || ""
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "value": 0,
        "unitText": "MONTH"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
    />
  );
}
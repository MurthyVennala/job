import React from 'react';
import { Locale } from './types';

export const LOCALES = ['en', 'hi', 'te'] as const;
export const DEFAULT_LOCALE: Locale = 'en';

export const states = [
  'AP','AS','BR','CG','DL','GJ','HR','HP','JH','JK','KA','KL','MH','MP','OD','PB','RJ','TN','TS','UK','UP','WB'
];

export const qualifications = [
  { key: '10th', label: '10th Pass' },
  { key: '12th', label: '12th Pass' },
  { key: 'Graduate', label: 'Graduate' },
  { key: 'Diploma', label: 'Diploma' },
  { key: 'ITI', label: 'ITI' },
  { key: 'Engineering', label: 'Engineering' }
];

export const sectors = [
  { key: 'SSC', label: 'SSC' },
  { key: 'UPSC', label: 'UPSC' },
  { key: 'Railway', label: 'Railway' },
  { key: 'Bank', label: 'Bank' },
  { key: 'Teaching', label: 'Teaching' },
  { key: 'Engineering', label: 'Engineering' },
  { key: 'Defence', label: 'Police/Defence' },
  { key: 'PSU', label: 'PSU' }
];

// Icons as React Components
export const GovIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V7.5a.75.75 0 0 1 .75-.75Zm.75 9h4.875a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-.75.75H9.75a.75.75 0 0 1-.75-.75V16.5a.75.75 0 0 1 .75-.75Z" />
  </svg>
);

export const BankIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
  </svg>
);

export const TeachingIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12l4.636 2.576M23 12l-4.636 2.576" />
  </svg>
);

export const RailwayIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 9h.75v.75h-.75V9Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75Zm6-4.5h.75v.75h-.75v-.75Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75Zm2.25-4.5h.75v.75h-.75v-.75Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75ZM9 6.75h.75v.75H9v-.75Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75Zm2.25-4.5h.75v.75h-.75v-.75Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75ZM9 9h.75v.75H9V9Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75Zm2.25-4.5h.75v.75h-.75v-.75Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75ZM15 9h.75v.75H15V9Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75Zm-6 4.5h.75v.75h-.75v-.75Zm.75 2.25h-.75v.75h.75v-.75ZM9 19.5h.75v.75H9v-.75Zm.75 2.25h-.75v.75h.75v-.75Zm2.25-4.5h.75v.75h-.75v-.75Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75Zm2.25-4.5h.75v.75h-.75v-.75Zm.75 2.25h-.75v.75h.75v-.75Zm-.75 2.25h.75v.75h-.75v-.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 21H8.25A2.25 2.25 0 0 1 6 18.75V7.5A2.25 2.25 0 0 1 8.25 5.25h7.5A2.25 2.25 0 0 1 18 7.5v11.25A2.25 2.25 0 0 1 15.75 21Z" />
  </svg>
);

export const PoliceIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Z" />
  </svg>
);

export const EngineeringIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.495-2.495a1.125 1.125 0 0 1 1.591 0l3.001 3.002a1.125 1.125 0 0 1 0 1.591l-2.495 2.495M11.42 15.17 3 22.59c-.527.527-1.243.829-1.995.829a2.25 2.25 0 0 1-1.995-2.25c0-.752.302-1.468.829-1.995l9.41-9.41M14.25 3l4.5 4.5M3 3l4.5 4.5" />
  </svg>
);

export const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

export const FileDownIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactNode => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);
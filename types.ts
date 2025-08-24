import { LOCALES } from './constants';

export type Job = {
  id: string;
  title: string;
  org: string;
  sector: 'SSC'|'UPSC'|'Railway'|'Bank'|'Teaching'|'Engineering'|'Defence'|'PSU'|'State';
  state?: string;
  vacancies?: number;
  qualification: string[];
  applyUrl: string;
  lastDate?: string; // ISO
  postedAt: string;  // ISO
  tags?: string[];
  description: string;
  ageLimit?: string;
  examDate?: string;
  pdfUrl: string;
  officialUrl: string;
};

export type Notification = {
  id: string;
  text: string;
  url: string;
  postedAt: string; // ISO
};

export type Locale = typeof LOCALES[number];

export type Messages = {
  brand: string;
  nav: {
    home: string;
    allGovt: string;
    stateGovt: string;
    bank: string;
    teaching: string;
    engineering: string;
    railway: string;
    defence: string;
    results: string;
    admit: string;
    answerKeys: string;
  },
  hero: {
    title: string;
    subtitle: string;
  },
  tickers: { latest: string; },
  quick: {
    qualification: string;
    state: string;
    sector: string;
  },
  actions: {
    view: string;
    apply: string;
    save: string;
  },
  footer: {
    about: string;
    disclaimer: string;
    privacy: string;
    contact: string;
  }
};
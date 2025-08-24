import { Job, Notification } from './types';

export const notifications: Notification[] = [
  { id: 'n1', text: 'SSC CGL 2025 Notification Out', url: '#', postedAt: new Date().toISOString() },
  { id: 'n2', text: 'RRB Technician 2025: Apply by Sep 10', url: '#', postedAt: new Date().toISOString() },
  { id: 'n3', text: 'APPSC Group-1 Prelims Date Announced', url: '#', postedAt: new Date().toISOString() },
  { id: 'n4', text: 'UPSC Civil Services 2025 applications open', url: '#', postedAt: new Date().toISOString() },
  { id: 'n5', text: 'State Bank of India Clerk Recruitment', url: '#', postedAt: new Date().toISOString() },
];

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'SSC CGL 2025',
    org: 'Staff Selection Commission',
    sector: 'SSC',
    vacancies: 8572,
    qualification: ['Graduate'],
    applyUrl: '#/apply/j1',
    lastDate: '2025-09-12',
    postedAt: '2025-08-18',
    tags: ['All India','Central Govt'],
    description: `
      <p>The Staff Selection Commission will hold the <strong>Combined Graduate Level Examination, 2025</strong> for filling up of various Group ‘B’ and Group ‘C’ posts in different Ministries/ Departments/ Organizations of Government of India.</p>
      <h4 class="font-semibold mt-4 mb-2">Post Details:</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>Assistant Audit Officer</li>
        <li>Inspector of Income Tax</li>
        <li>Upper Division Clerk</li>
        <li>Junior Statistical Officer</li>
      </ul>
      <h4 class="font-semibold mt-4 mb-2">Pay Scale:</h4>
      <p>Pay Level-8 (₹ 47600 to 151100) to Pay Level-4 (₹ 25500 to 81100).</p>`,
    ageLimit: '18-32 years',
    examDate: 'Dec 2025 (Tier-I)',
    pdfUrl: '#/pdf/j1',
    officialUrl: '#/official/j1',
  },
  {
    id: 'j2',
    title: 'IBPS PO 2025',
    org: 'Institute of Banking Personnel Selection',
    sector: 'Bank',
    vacancies: 4020,
    qualification: ['Graduate'],
    applyUrl: '#/apply/j2',
    lastDate: '2025-08-30',
    postedAt: '2025-08-17',
    tags: ['Banking'],
    description: `
      <p>The Institute of Banking Personnel Selection (IBPS) has announced the recruitment for Probationary Officers (PO) for various public sector banks.</p>
      <h4 class="font-semibold mt-4 mb-2">Eligibility Criteria:</h4>
      <p>A degree (Graduation) in any discipline from a University recognised by the Govt. Of India.</p>`,
    ageLimit: '20-30 years',
    examDate: 'Oct 2025 (Prelims)',
    pdfUrl: '#/pdf/j2',
    officialUrl: '#/official/j2',
  },
  {
    id: 'j3',
    title: 'RRC Junior Engineer',
    org: 'Indian Railways',
    sector: 'Railway',
    vacancies: 1120,
    qualification: ['Diploma','Engineering'],
    applyUrl: '#/apply/j3',
    lastDate: '2025-09-05',
    postedAt: '2025-08-15',
    tags: ['Technical'],
    description: `
      <p>Railway Recruitment Cell (RRC) invites online applications for the recruitment of Junior Engineer (JE) in various technical departments of Indian Railways.</p>
      <h4 class="font-semibold mt-4 mb-2">Disciplines:</h4>
      <ul class="list-disc list-inside space-y-1">
        <li>Civil Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Electrical Engineering</li>
      </ul>`,
    ageLimit: '18-33 years',
    pdfUrl: '#/pdf/j3',
    officialUrl: '#/official/j3',
  },
  {
    id: 'j4',
    title: 'State Police Constable',
    org: 'State Police Recruitment Board',
    sector: 'Defence',
    state: 'Telangana',
    vacancies: 15600,
    qualification: ['12th Pass'],
    applyUrl: '#/apply/j4',
    lastDate: '2025-09-20',
    postedAt: '2025-08-20',
    tags: ['Police', 'State Govt'],
    description: `
      <p>Applications are invited for the recruitment of Police Constables in the state of Telangana. This is a great opportunity for candidates looking to join the police force.</p>
      <h4 class="font-semibold mt-4 mb-2">Selection Process:</h4>
      <p>The selection process will include a Preliminary Written Test, Physical Measurement Test (PMT), Physical Efficiency Test (PET), and Final Written Examination.</p>`,
    ageLimit: '18-25 years',
    pdfUrl: '#/pdf/j4',
    officialUrl: '#/official/j4',
  }
];
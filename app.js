const JOBS_DATA = [
  { id: 1, companyName: 'Mobile First Corp', position: 'React Native Developer', location: 'Remote', type: 'Full-time', salary: '$90k  $175k', description: 'Build cross-platform mobile apps using React Native. Work on products used by millions worldwide.' },
  { id: 2, companyName: 'WebFlow Agency', position: 'Web Designer & Developer', location: 'Los Angeles, CA', type: 'Part-time', salary: '$80k  $120k', description: 'Create stunning web experiences for high-profile clients. Portfolio and modern design skills required.' },
  { id: 3, companyName: 'DataViz Solutions', position: 'Data Visualization Specialist', location: 'Boston, MA', type: 'Full-time', salary: '$110k  $160k', description: 'Transform complex data into compelling visualizations using D3.js and React.' },
  { id: 4, companyName: 'CloudFirst Inc', position: 'Backend Developer', location: 'Seattle, WA', type: 'Full-time', salary: '$140k  $190k', description: 'Design and maintain scalable backend systems using Python and AWS.' },
  { id: 5, companyName: 'Innovation Labs', position: 'UI/UX Engineer', location: 'Austin, TX', type: 'Full-time', salary: '$100k  $170k', description: 'Create beautiful interfaces for our product suite. Strong design skills required.' },
  { id: 6, companyName: 'MegaCorp Solutions', position: 'JavaScript Developer', location: 'New York, NY', type: 'Full-time', salary: '$100k  $170k', description: 'Build enterprise applications with JavaScript and modern frameworks.' },
  { id: 7, companyName: 'StartupXYZ', position: 'Full Stack Engineer', location: 'Remote', type: 'Full-time', salary: '$90k  $140k', description: 'Join our fast-growing startup. Node.js and React experience required.' },
  { id: 8, companyName: 'TechCorp Industries', position: 'Senior Frontend Developer', location: 'San Francisco, CA', type: 'Full-time', salary: '$150k – $215k', description: 'Build scalable web applications using React and TypeScript.' },
  { id: 9, companyName: 'PixelCraft Studio', position: 'Product Designer', location: 'Remote', type: 'Contract', salary: '$75k $110k', description: 'Shape the visual identity of our products working closely with engineers.' },
  { id: 10, companyName: 'DevStream Inc', position: 'DevOps Engineer', location: 'Chicago, IL', type: 'Full-time', salary: '$130k  $180k', description: 'Own CI/CD pipeline and cloud infrastructure. Docker, Kubernetes, Terraform required.' },
];


let jobs = JOBS_DATA.map(j => ({ ...j, status: 'none' }));
let activeTab = 'all';

const totalCountEl = document.getElementById('totalCount');
const interviewCountEl = document.getElementById('interviewCount');
const rejectedCountEl = document.getElementById('rejectedCount');
const jobsCountLabel = document.getElementById('jobsCountLabel');
const jobsGrid = document.getElementById('jobsGrid');
const emptyState = document.getElementById('emptyState');
const emptyStateTitle = document.getElementById('emptyStateTitle');
const emptyStateSub = document.getElementById('emptyStateSub');
const tabAllCount = document.getElementById('tab-all-count');
const tabInterviewCount = document.getElementById('tab-interview-count');
const tabRejectedCount = document.getElementById('tab-rejected-count');
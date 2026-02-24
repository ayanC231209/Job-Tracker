const JOBS_DATA = [
  { id: 1, companyName: 'Mobile First Corp', position: 'React Native Developer', location: 'Remote', type: 'Full-time', salary: '$90k - $175k', description: 'Build cross-platform mobile apps using React Native. Work on products used by millions worldwide.' },
  { id: 2, companyName: 'WebFlow Agency', position: 'Web Designer & Developer', location: 'Los Angeles, CA', type: 'Part-time', salary: '$80k - $120k', description: 'Create stunning web experiences for high-profile clients. Portfolio and modern design skills required.' },
  { id: 3, companyName: 'DataViz Solutions', position: 'Data Visualization Specialist', location: 'Boston, MA', type: 'Full-time', salary: '$110k - $160k', description: 'Transform complex data into compelling visualizations using D3.js and React.' },
  { id: 4, companyName: 'CloudFirst Inc', position: 'Backend Developer', location: 'Seattle, WA', type: 'Full-time', salary: '$140k - $190k', description: 'Design and maintain scalable backend systems using Python and AWS.' },
  { id: 5, companyName: 'Innovation Labs', position: 'UI/UX Engineer', location: 'Austin, TX', type: 'Full-time', salary: '$100k - $170k', description: 'Create beautiful interfaces for our product suite. Strong design skills required.' },
  { id: 6, companyName: 'MegaCorp Solutions', position: 'JavaScript Developer', location: 'New York, NY', type: 'Full-time', salary: '$100k - $170k', description: 'Build enterprise applications with JavaScript and modern frameworks.' },
  { id: 7, companyName: 'StartupXYZ', position: 'Full Stack Engineer', location: 'Remote', type: 'Full-time', salary: '$90k - $140k', description: 'Join our fast-growing startup. Node.js and React experience required.' },
  { id: 8, companyName: 'TechCorp Industries', position: 'Senior Frontend Developer', location: 'San Francisco, CA', type: 'Full-time', salary: '$150k – $215k', description: 'Build scalable web applications using React and TypeScript.' },
  { id: 9, companyName: 'PixelCraft Studio', position: 'Product Designer', location: 'Remote', type: 'Contract', salary: '$75k - $110k', description: 'Shape the visual identity of our products working closely with engineers.' },
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


function updateCounts() {
  const interview = jobs.filter(j => j.status === 'interview').length;
  const rejected = jobs.filter(j => j.status === 'rejected').length;

  totalCountEl.textContent = jobs.length;
  interviewCountEl.textContent = interview;
  rejectedCountEl.textContent = rejected;

  tabAllCount.textContent = jobs.length;
  tabInterviewCount.textContent = interview;
  tabRejectedCount.textContent = rejected;

  jobsCountLabel.textContent = `${jobs.length} job${jobs.length !== 1 ? 's' : ''}`;
}

function getFiltered() {
  if (activeTab === 'interview') return jobs.filter(j => j.status === 'interview');
  if (activeTab === 'rejected') return jobs.filter(j => j.status === 'rejected');
  return jobs;
}

function createCard(job) {
  const isInterview = job.status === 'interview';
  const isRejected = job.status === 'rejected';

  const card = document.createElement('article');
  card.className = 'bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3';
  card.dataset.id = job.id;

 
  let badge = `<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">Not Applied</span>`;
  if (isInterview) badge = `<span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">Interview</span>`;
  if (isRejected) badge = `<span class="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600 border border-red-200">Rejected</span>`;


  const intCls = isInterview
    ? 'px-4 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-white border border-emerald-500'
    : 'px-4 py-1.5 rounded-lg text-xs font-semibold bg-transparent text-emerald-400 border border-emerald-800 hover:bg-emerald-500 hover:text-white hover:border-emerald-500';

  const rejCls = isRejected
    ? 'px-4 py-1.5 rounded-lg text-xs font-semibold bg-red-500 text-white border border-red-500'
    : 'px-4 py-1.5 rounded-lg text-xs font-semibold bg-transparent text-red-400 border border-red-800 hover:bg-red-500 hover:text-white hover:border-red-500';

  card.innerHTML = `
    <div class="flex items-start justify-between gap-2">
      <div>
        <p class="font-semibold text-gray-900 text-sm">${job.companyName}</p>
        <p class="text-xs text-indigo-500 mt-0.5">${job.position}</p>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0">
        ${badge}
        <button data-action="delete" class="text-gray-600 hover:text-red-400 transition-colors" aria-label="Delete">
          <svg class="w-4 h-4 pointer-events-none" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="flex items-center gap-3 text-xs text-gray-400">
      <span>${job.location}</span>
      <span>${job.type}</span>
      <span class="text-emerald-600 font-medium ml-auto">${job.salary}</span>
    </div>

    <p class="text-xs text-gray-500 leading-relaxed line-clamp-2">${job.description}</p>

    <div class="flex items-center gap-2 pt-1">
      <button data-action="interview" class="${intCls}">Interview</button>
      <button data-action="rejected"  class="${rejCls}">Rejected</button>
    </div>
  `;

  return card;
}

function render() {
  jobsGrid.innerHTML = '';
  const filtered = getFiltered();

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    emptyState.classList.add('flex');
    if (activeTab === 'interview') {
      emptyStateTitle.textContent = 'No Interview Jobs Yet';
      emptyStateSub.textContent = 'Click "Interview" on a card to add it here.';
    } else if (activeTab === 'rejected') {
      emptyStateTitle.textContent = 'No Rejected Jobs';
      emptyStateSub.textContent = 'Click "Rejected" on a card to add it here.';
    } else {
      emptyStateTitle.textContent = 'No Jobs Available';
      emptyStateSub.textContent = 'All cards have been removed.';
    }
  } else {
    emptyState.classList.add('hidden');
    emptyState.classList.remove('flex');
    filtered.forEach(job => jobsGrid.appendChild(createCard(job)));
  }

  updateCounts();
}

render();
function toggleStatus(id, action) {
  const job = jobs.find(j => j.id === id);
  if (!job) return;
  job.status = job.status === action ? 'none' : action;
  render();
}

function deleteJob(id) {
  jobs = jobs.filter(j => j.id !== id);
  render();
}


jobsGrid.addEventListener('click', e => {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const card = btn.closest('article');
  if (!card) return;
  const id = parseInt(card.dataset.id, 10);
  const act = btn.dataset.action;
  if (act === 'delete') deleteJob(id);
  else if (act === 'interview' || act === 'rejected') toggleStatus(id, act);
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    activeTab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.className = 'tab-btn px-4 py-1.5 rounded-full text-sm font-semibold bg-gray-200 text-gray-600 hover:bg-gray-300';
    });
    btn.className = 'tab-btn px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-500 text-white';
    render();
  });
});

render();

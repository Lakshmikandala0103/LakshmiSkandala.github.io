export type ExperienceItem = {
  org: string
  role: string
  period: string
  type: 'Industry' | 'Research' | 'Leadership' | 'Volunteer' | 'Internship'
  bullets: string[]
}

export const experience: ExperienceItem[] = [
  {
    org: 'Cogent IBS',
    role: 'AI Intern',
    period: 'Jun – Aug 2025',
    type: 'Industry',
    bullets: [
      'Migrated customer, product, and order data from MongoDB to PostgreSQL using Python/SQL; designed normalized schemas and indexing for transactional performance.',
      'Built and tested ETL pipelines with automated validation: referential integrity, type constraints, and deduplication.',
      'Implemented backend-facing endpoints for real-time lookups; benchmarked and optimized query performance iteratively.',
      'Collaborated via Git code reviews in an Agile development workflow.',
    ],
  },
  {
    org: 'BLAST AI',
    role: 'Researcher — Multimodal Real Estate Price Estimation',
    period: 'Jun – Jul 2023',
    type: 'Research',
    bullets: [
      'Researched multimodal techniques for predicting real estate prices by combining visual imagery and numerical data from Kaggle and GitHub datasets.',
      'Developed a CNN-based ML model in Python to predict property values specifically in Southern California.',
      'Applied dimensional reduction and feature selection algorithms to significantly enhance prediction outcomes.',
    ],
  },
  {
    org: 'IBM SkillsBuild AI Experiential Learning Lab',
    role: 'AI Project Developer — Numina',
    period: '2025',
    type: 'Industry',
    bullets: [
      'Built Numina, a conversational AI-powered personal finance assistant using IBM watsonx Assistant.',
      'Designed agentic AI workflows for budgeting, debt management, and spending analysis with multi-turn context management.',
      'Applied prompt engineering, intent recognition, and entity extraction concepts from the IBM SkillsBuild program.',
      'Architected for future Plaid API integration and IBM Cloud Engine deployment.',
    ],
  },
  {
    org: 'Boundary.0 @ SJSU',
    role: 'Events Coordinator',
    period: 'Aug 2024 – Present',
    type: 'Leadership',
    bullets: [
      'Plan and organize all org events including meetings, networking sessions, and special collaborative projects.',
      'Coordinate with external startups and partners for joint events and outreach.',
    ],
  },
  {
    org: 'Step Up Tutoring',
    role: 'Volunteer Tutor',
    period: 'Sep 2023 – Sep 2024',
    type: 'Volunteer',
    bullets: [
      'Provided personalized tutoring in Mathematics and Science to students over one year.',
      'Part of the KIPP tutoring group, offering after-school academic support to students unable to afford tutoring.',
      'Contributed to equity in education, building meaningful connections and helping students unlock their potential.',
    ],
  },
  {
    org: 'Mentors at De Anza',
    role: 'Student Mentor',
    period: 'Sep 2023 – Jun 2024',
    type: 'Leadership',
    bullets: [
      'Guided first-year students through campus resources, academic planning, and transfer preparation.',
      'Offered a safe space for students to share personal struggles, academic stress, and interests.',
      'Empowered students to thrive both academically and personally during their college journey.',
    ],
  },
  {
    org: 'De Anza Student Government (DASG)',
    role: 'Intern — Environmental Science & Programs Committee',
    period: 'Jan 2023 – Jun 2024',
    type: 'Leadership',
    bullets: [
      'Environmental Science: Researched water conservation methods and sustainability practices; compiled findings into a detailed report supporting De Anza sustainability initiatives.',
      'Programs Committee: Organized HOCO 2024 and executed campus events; managed vendor collaborations including photobooth and DJ services.',
    ],
  },
  {
    org: 'California History Center, De Anza College',
    role: 'Humanities Mellon Scholar Intern',
    period: 'Jun – Dec 2023',
    type: 'Internship',
    bullets: [
      'Converted VHS and Cassette tape recordings spanning up to 50 years into digital format, improving public accessibility.',
      'Organized and cataloged files, books, and tapes using the Dewey Decimal archive system at the CHC Library.',
      'Conducted Digital Oral History Recordings analysis as part of the Humanities Mellon Scholar program.',
    ],
  },
  {
    org: 'Pianissimo',
    role: 'Intern',
    period: 'Sep 2022 – Mar 2023',
    type: 'Internship',
    bullets: [
      'Assisted in organizing meetings and managing virtual classes during Fall and Winter 2022.',
      'Developed and maintained the website platform using MyMusicStaff to streamline student and class management.',
      'Facilitated online team-building activities to strengthen connections within the virtual music community.',
    ],
  },
]
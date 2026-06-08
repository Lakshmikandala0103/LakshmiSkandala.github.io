export type CourseGroup = {
  category: string
  color: string
  courses: string[]
}

export const coursework: CourseGroup[] = [
  {
    category: 'Software Engineering',
    color: '#00b4d8',
    courses: [
      'Programming Methodology',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Advanced Algorithms',
      'Software Engineering',
      'Assembly Language Programming (x86)',
      'Computer Networks',
      'Compiler Design',
    ],
  },
  {
    category: 'Hardware & Embedded Systems',
    color: '#0096c7',
    courses: [
      'Digital Design I',
      'Digital Design II',
      'Microprocessor Design',
      'Electronics for Computing Systems',
      'Circuit Analysis',
      'Electrical Engineering Laboratory',
    ],
  },
  {
    category: 'Computer Architecture',
    color: '#0077a8',
    courses: [
      'Computer Architecture',
      'Assembly Language Programming (x86)',
      'Digital Logic Design',
      'Microprocessor Design',
    ],
  },
  {
    category: 'Mathematics',
    color: '#00c896',
    courses: [
      'Calculus I',
      'Calculus II',
      'Calculus III',
      'Discrete Mathematics',
      'Linear Algebra',
      'Differential Equations',
      'Probability & Statistics',
    ],
  },
  {
    category: 'Science',
    color: '#008b8b',
    courses: [
      'Physics: Mechanics',
      'Physics: Electricity & Magnetism',
    ],
  },
]
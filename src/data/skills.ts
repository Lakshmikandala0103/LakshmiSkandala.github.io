export type SkillGroup = {
  category: string
  color: string
  icon: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    color: '#00b4d8',
    icon: '{ }',
    items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'x86 Assembly', 'Verilog HDL'],
  },
  {
    category: 'Frontend',
    color: '#0096c7',
    icon: '⬡',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML', 'CSS', 'Figma'],
  },
  {
    category: 'Backend & Data',
    color: '#0077a8',
    icon: '⬢',
    items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'ETL Pipelines', 'Query Optimization', 'REST APIs'],
  },
  {
    category: 'AI & Machine Learning',
    color: '#00c896',
    icon: '◈',
    items: ['CNNs', 'Feature Engineering', 'Dimensionality Reduction', 'Multimodal Learning', 'Predictive Modeling', 'Prompt Engineering', 'IBM watsonx'],
  },
  {
    category: 'Embedded & Hardware',
    color: '#008b8b',
    icon: '⬟',
    items: ['ESP32', 'Raspberry Pi', 'BLE / RSSI', 'Signal Processing', 'Digital Logic', 'State Machines', 'Circuit Analysis', 'Verilog HDL'],
  },
  {
    category: 'Tools & Workflow',
    color: '#00b4d8',
    icon: '⚙',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'MATLAB', 'Agile / SDLC'],
  },
]
export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  status: 'completed' | 'in-progress'
  flagship: boolean
  challenge: string
  outcome: string
  tech: string[]
  github: string | null
  caseStudy: string | null
}

export const projects: Project[] = [
  {
    id: 'edge-ai',
    title: 'Edge AI Smart Entry Assistant',
    subtitle: 'Context-aware cyber-physical system with on-device AI inference',
    description:
      'A context-aware cyber-physical system that detects multi-user presence near a door, predicts departure intent, and triggers personalized reminders — all running on-device with no cloud dependency.',
    category: 'Embedded AI · Edge Computing',
    status: 'in-progress',
    flagship: true,
    challenge:
      'Running reliable ML inference on a microcontroller with tight memory and latency constraints while handling noisy BLE RSSI signals and multiple simultaneous users.',
    outcome:
      'Full system architecture designed with event-driven firmware, signal processing pipeline, and intent-classification model optimized for ESP32/Raspberry Pi deployment.',
    tech: ['C++', 'Python', 'ESP32', 'Raspberry Pi', 'BLE RSSI', 'Edge AI', 'Signal Processing', 'State Machines'],
    github: null,
    caseStudy: null,
  },
  {
    id: 'numina',
    title: 'Numina — AI Finance Assistant',
    subtitle: 'Conversational AI personal finance app powered by IBM watsonx',
    description:
      'A collaborative AI-powered personal finance assistant with multi-turn dialogue, budgeting guidance, and financial literacy coaching built on IBM watsonx Assistant.',
    category: 'Full-Stack · Conversational AI',
    status: 'in-progress',
    flagship: false,
    challenge:
      'Designing agentic conversational workflows that handle multi-turn financial guidance while maintaining context and staying accessible to non-technical users.',
    outcome:
      'Functional conversational AI app with intent recognition, context management, and structured financial dialogue flows.',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'IBM watsonx', 'Figma'],
    github: 'https://github.com/japath59/numina',
    caseStudy: null,
  },
  {
    id: 'real-estate-ml',
    title: 'Multimodal Real Estate Price Estimator',
    subtitle: 'CNN model fusing images and tabular data for property valuation',
    description:
      'CNN-based ML model combining property images with numerical tabular features to improve Southern California real estate price prediction accuracy.',
    category: 'Machine Learning · Computer Vision',
    status: 'completed',
    flagship: false,
    challenge:
      'Combining two fundamentally different data modalities — images and structured numerical features — into a unified model without one dominating the other.',
    outcome:
      'Applied dimensional reduction and feature selection to significantly enhance prediction outcomes.',
    tech: ['Python', 'CNNs', 'Feature Engineering', 'Dimensionality Reduction', 'Google Colab'],
    github: null,
    caseStudy: null,
  },
  {
    id: 'etl-migration',
    title: 'MongoDB → PostgreSQL ETL Migration',
    subtitle: 'Large-scale database migration with automated validation pipelines',
    description:
      'End-to-end migration of customer, product, and order data from MongoDB to PostgreSQL with automated validation, normalized schema design, and query performance optimization.',
    category: 'Data Engineering · Backend',
    status: 'completed',
    flagship: false,
    challenge:
      'Preserving referential integrity and data consistency while transforming unstructured NoSQL documents into a normalized relational schema at scale.',
    outcome:
      'Successfully migrated production data with automated validation and measurable query performance improvements.',
    tech: ['Python', 'SQL', 'PostgreSQL', 'MongoDB', 'ETL Pipelines', 'Git'],
    github: null,
    caseStudy: null,
  },
]

export const architectureLayers = [
  {
    id: 'sensor',
    label: 'Sensor Layer',
    color: '#00b4d8',
    items: ['BLE RSSI', 'Proximity Sensors', 'Motion Sensors', 'Door Events', 'Item Presence Detection'],
  },
  {
    id: 'signal',
    label: 'Signal Processing Layer',
    color: '#0096c7',
    items: ['RSSI Smoothing', 'Noise Reduction', 'Feature Extraction', 'Time-Series Logging'],
  },
  {
    id: 'decision',
    label: 'Decision Engine',
    color: '#00c896',
    items: ['Event-Driven State Machines', 'Multi-User Context', 'Departure Intent Logic', 'Edge-Case Handling'],
  },
  {
    id: 'inference',
    label: 'Inference Layer',
    color: '#0077a8',
    items: ['On-Device Classification', 'ESP32 / Raspberry Pi', 'Latency Optimization', 'Memory-Aware Model Design'],
  },
  {
    id: 'action',
    label: 'Action Layer',
    color: '#008b8b',
    items: ['Personalized Reminders', 'User-Specific Prompts', 'Real-Time Notifications', 'Reliable Triggering'],
  },
]
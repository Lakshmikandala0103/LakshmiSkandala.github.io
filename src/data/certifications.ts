export type Certification = {
  title: string
  issuer: string
  status: 'completed' | 'in-progress'
  category: string
  color: string
}

export const certifications: Certification[] = [
  {
    title: 'Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    status: 'completed',
    category: 'Full-Stack',
    color: '#00b4d8',
  },
  {
    title: '100 Days of Code: Python Pro Bootcamp',
    issuer: 'Udemy',
    status: 'completed',
    category: 'Python',
    color: '#0096c7',
  },
  {
    title: 'Digital Electronics & Circuits',
    issuer: 'Online',
    status: 'completed',
    category: 'Hardware',
    color: '#0077a8',
  },
  {
    title: 'Verilog HDL Fundamentals',
    issuer: 'Online',
    status: 'completed',
    category: 'Hardware',
    color: '#008b8b',
  },
  {
    title: 'Splunk SIEM',
    issuer: 'Splunk',
    status: 'completed',
    category: 'Security',
    color: '#00c896',
  },
  {
    title: 'ROS 2 for Beginners',
    issuer: 'Udemy',
    status: 'in-progress',
    category: 'Robotics',
    color: '#00b4d8',
  },
  {
    title: 'ROS2 C++ Robotics Developer',
    issuer: 'Udemy',
    status: 'in-progress',
    category: 'Robotics',
    color: '#0096c7',
  },
  {
    title: 'Arduino for Beginners',
    issuer: 'Online',
    status: 'in-progress',
    category: 'Embedded',
    color: '#008b8b',
  },
]
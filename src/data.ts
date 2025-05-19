import { ServiceType, ProjectType, HeroSlideType } from './types';

export const heroSlides: HeroSlideType[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    caption: 'Solar Energy Solutions',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    caption: 'Web Development',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    caption: 'Smart Home Automation',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
    caption: 'Renewable Energy',
  },
];

export const services: ServiceType[] = [
  {
    id: 1,
    title: 'General Electrical Design & Implementation',
    description: 'For homes, small businesses, and smart facilities.',
    icon: 'Lightbulb',
  },
  {
    id: 2,
    title: 'Smart Home Setup',
    description: 'Remote control, automation, security, and more.',
    icon: 'Home',
  },
  {
    id: 3,
    title: 'Data Analytics',
    description: 'Using data to optimize energy and business performance.',
    icon: 'BarChart',
  },
  {
    id: 4,
    title: 'Energy Audits',
    description: 'Identify wastage and recommend savings with ISO 50001:2018 principles.',
    icon: 'Gauge',
  },
  {
    id: 5,
    title: 'ELV Design & Implementation',
    description: 'CCTV, access control, structured cabling, fire alarms, and more.',
    icon: 'Cctv',
  },
  {
    id: 6,
    title: 'Renewable System Design & Installation',
    description: 'Standalone or hybrid solar power systems tailored for homes and SMEs.',
    icon: 'Sun',
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Ganiyah's Portfolio",
    description: 'A sleek personal website for a Civil Engineer & Data Analyst, built with React and Tailwind CSS.',
    link: 'https://ganiyah.com.ng',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
  },
  {
    id: 2,
    title: '250kWp Solar Farm Design',
    description: 'System design demonstration done during my graduate trainee program to simulate large-scale deployment.',
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
  },
  {
    id: 3,
    title: 'SolarMate',
    description: 'A custom-built solar sizing calculator to help users estimate the size of a solar system based on their energy needs.',
    link: 'https://solarmate.netlify.app',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
  },
  {
    id: 4,
    title: 'Campus Voting Platform',
    description: 'Developed an online voting system used by over 3,000 students — fast, secure, and easy to use.',
    image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg',
  }
];
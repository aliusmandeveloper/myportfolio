import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  redux,
  // nextjs,
  nodejs,
  mongodb,
  carrent,
  jobit,
  tripguide,
  it,
  cyb,
  softnixt,
  nj,
  java,
  mat,
  tail,
  boots,
  css,
  html,
  // shad,
  // docker,
  // figma,
  // git,
  // sql,
  firebase,
  vs,
  love,
  // next,
} from "../assets";
const technologies: TTechnology[] = [
   {
    name: 'Next js',
    icon: nj,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'JavaScript',
    icon: java,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Material UI',
    icon: mat,
  },
  // {
  //   name: 'Shadcn',
  //   icon: shad,
  // },
  {
    name: 'Tailwind Css',
    icon: tail,
  },
  {
    name: 'BOOTSTRAP 5',
    icon: boots,
  },
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  // {
  //   name: 'Docker',
  //   icon: docker,
  // },
  // {
  //   name: 'Figma',
  //   icon: figma,
  // },
  {
    name: 'Firebase',
    icon: firebase,
  },
  // {
  //   name: 'Git',
  //   icon: git,
  // },
  // {
  //   name: 'Sql',
  //   icon: sql,
  // },

  {
    name: 'VS',
    icon: vs,
  },
  {
    name: 'Loveable',
    icon: love,
  },
 
];

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'MERN Stack Developer',
    icon: web,
  },
  {
    title: 'Next.js Developer',
    icon: mobile,
  },
  {
    title: 'AI Developer',
    icon: backend,
  },
  {
    title: 'Experience in Python AI Integrations',
    icon: creator,
  },
];



const experiences: TExperience[] = [
  {
    title: 'Middle-level Next.js Developer',
    companyName: 'IT Brain',
    icon: it,
    iconBg: '#383E56',
    date: '06/2024-08/2024',
    points: [
      'Gained hands-on experience in developing modern web applications using React.js & Next.js.',
      'Learned to structure and build full-stack websites with server-side rendering and dynamic routing.',
      'Focused on creating responsive, SEO-friendly, and performance-optimized applications.',
      'Built a strong foundation in integrating APIs and managing state in Next.js projects.',
    ],
  },
  {
    title: 'Frontend & Backend Developer',
    companyName: 'Cyverix',
    icon: cyb,
    iconBg: '#E6DEDD',
    date: '08/2024 - Present',
    points: [
      'Started with frontend development, building responsive and user-friendly interfaces.',
      'Transitioned into backend development, gaining expertise in Node.js and API design.',
      'Developed and optimized databases, implementing RESTful APIs with MongoDB for reliable data management.',
      'Collaborated with cross-functional teams, contributing to both frontend and backend to deliver complete solutions.',
      'Actively involved in code reviews and knowledge sharing to enhance team efficiency and maintain best practices.',
    ],
  },
  {
    title: 'MERN Stack Developer',
    companyName: 'softnixt',
    icon: softnixt,
    iconBg: '#383E56',
    date: '06/2025 - present',
    points: [
      'Specialized in developing dynamic web applications using the MERN stack.',
      'Focused on creating scalable and efficient backends while ensuring smooth front-end integration.',
      'Collaborated with cross-functional teams to design and implement innovative solutions for seamless user experiences.',
      'Committed to delivering high-performance, user-centric applications that drive business growth.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Big Star',
    description:
      'Big Star is a high-performance MERN Stack Developer project that revolutionizes vehicle exploration.',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Express',
        color: 'blue-text-gradient',
      },
    ],
    image: carrent,
    sourceCodeLink: 'http://ec2-54-252-183-45.ap-southeast-2.compute.amazonaws.com:3000/home',
  },
  {
    name: 'Edexcel',
    description:
      ' Edexcel Academy & Educational Consultancy is a premier platform dedicated to empowering students through high-quality education and professional guidance. ',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    sourceCodeLink: 'https://edexceledu.com/',
  },
  {
    name: 'GlowArt',
    description:
      'GlowArt enables users to export their collection data to an Excel sheet, providing an easy way to organize and analyze their artwork',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'React.js',
        color: 'green-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'MongoDB ',
        color: 'blue-text-gradient',
      },
    ],
    image: tripguide,
    sourceCodeLink:
      'https://www.linkedin.com/in/abdulrafay-mernstack-developer/details/projects/753024815/multiple-media-viewer/?profileId=ACoAADgySDsBRX-J2KfEvU61c2mp22i6H9lyBM8&treasuryMediaId=1738067297611&type=DOCUMENT',
  },
];

export { services, technologies, experiences, testimonials, projects };

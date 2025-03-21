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
  vue,
  traf,
  flex,
  js,
  sch,
  sql,
  parag,
  creator,
  web,
  adz,
  hukul,
  // javascript,
  typescript,
  // html,
  // css,
  reactjs,
  redux,
  tailwind,
  pdfweb,
  nodejs,
  mongodb,
  git,
  figma,
  aws,
  pack,
  vs,
  cas,
  docker,
  meta,
  // starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cb,
  koponx,
  GS,
  // hukul,
} from '../assets';
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
    title: 'Python AI Integrations Expert',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  // {
  //   name: "MySql",
  //   icon: sql,
  // },
  // {
  //   name: "Vue Js",
  //   icon: vue,
  // },
  // {
  //   name: "JavaScript",
  //   icon: js,
  // },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
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
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'postgresql',
    icon: threejs,
  },
  {
    name: 'Firebase',
    icon: tailwind,
  },
  {
    name: 'shopify',
    icon: shopify,
  },
  {
    name: 'meta',
    icon: meta,
  },
  {
    name: 'hukul',
    icon: hukul,
  },
  {
    name: 'aw',
    icon: aws,
  },
  {
    name: 'vs',
    icon: vs,
  },
];

const experiences: TExperience[] = [
  {
    title: 'MERN Stack Developer',
    companyName: 'Dzone Technologies',
    icon: cb,
    iconBg: '#383E56',
    date: '2023-2024',
    points: [
      'Specialized in building scalable web applications using the MERN stack.',
      'Collaborated with cross-functional teams to design, develop, and deploy innovative solutions.',
      'Optimized backend performance and ensured seamless API integrations.',
      'Focused on delivering high-quality, user-centric solutions to enhance overall web experiences.',
    ],
  },
  {
    title: 'Middle-level Backend Developer',
    companyName: 'WebXpert',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: '2023 - Present',
    points: [
      'Experience in developing backend services using Node.js for efficient and scalable web applications.',
      'Collaborated with frontend teams to integrate APIs, ensuring smooth data flow and application performance.',
      'Designed and optimized databases, implementing RESTful APIs and working with MongoDB to ensure data integrity.',
      'Contributed to code reviews and team knowledge sharing, fostering a collaborative development environment.',
    ],
  },
  {
    title: 'MERN Stack Developer',
    companyName: 'Adziyo',
    icon: adz,
    iconBg: '#383E56',
    date: '2025 - present',
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
  {
    name: 'Pacedream',
    description:
      'PaceDream is a revolutionary platform developed by an expert MERN Stack Developer and AI Solutions Developer.',
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
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
    ],
    image: GS,
    sourceCodeLink:
      'https://www.linkedin.com/in/abdulrafay-mernstack-developer/details/projects/692385601/multiple-media-viewer/?profileId=ACoAADgySDsBRX-J2KfEvU61c2mp22i6H9lyBM8&treasuryMediaId=1738008407528&type=DOCUMENT',
  },
  {
    name: 'SEOHub',
    description:
      'SEOHub is a comprehensive MERN Stack solution designed to automate SEO processes, enabling businesses to generate keywords and optimize pages efficiently. ',
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
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
    ],
    image: koponx,
    sourceCodeLink: 'https://www.digitalsearchgroup.co.uk/',
  },
  {
    name: 'PDFify',
    description:
      'PDFify is an innovative web-based solution developed by a Full Stack Developer, utilizing HTML, CSS, Bootstrap, and JavaScript to provide a seamless user experience',
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
      {
        name: 'JavaScript ',
        color: 'blue-text-gradient',
      },
    ],
    image: pdfweb,
    sourceCodeLink: 'https://www.compresspdfonline.net/',
  },
  {
    name: 'Rentory',
    description:
      'Rentory is an innovative platform developed by an experienced MERN Stack Developer and AI Solutions Developer,',
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
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
    ],
    image: cas,
    sourceCodeLink: '',
  },
  {
    name: 'Rewordfiy',
    description:
      'This AI-based platform, developed by MERN Stack, is a cutting-edge Generative AI tool designed to help users rewrite paragraphs, sentences.',
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
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'green-text-gradient',
      },
    ],
    image: parag,
    sourceCodeLink: '',
  },
  {
    name: 'ScholarAI',
    description:
      'ScholarAI is an innovative web application development platform designed for academic research. It includes features such as pagination',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'pink-text-gradient',
      },
    ],
    image: sch,
    sourceCodeLink: '',
  },
  {
    name: 'ShipZen',
    description:
      'ShipZen is a full-stack application designed to provide a cost-effective shipping solution with significant savings when compared to agents like Panda Buy.',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB ',
        color: 'green-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
    ],
    image: pack,
    sourceCodeLink: '',
  },
  {
    name: 'TrafikBilder',
    description:
      'This project is a web application development platform built using the MERN Stack 💻 that allows users to access traffic-related images and videos. ',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB ',
        color: 'green-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
    ],
    image: traf,
    sourceCodeLink: '',
  },
  {
    name: 'Zorova Health',
    description:
      'Zorova is an innovative MERN Stack platform designed to offer a wide range of services such as massage 💆‍♂️, fitness 🏋️‍♀️, stretching 🧘‍♂️, weight loss programs',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'MongoDB ',
        color: 'green-text-gradient',
      },
      {
        name: 'Next.js',
        color: 'pink-text-gradient',
      },
      {
        name: 'Express.js',
        color: 'blue-text-gradient',
      },
    ],
    image: flex,
    sourceCodeLink: '',
  },
];

export { services, technologies, experiences, testimonials, projects };

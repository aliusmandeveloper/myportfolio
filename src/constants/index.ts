import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cb,
  koponx,
  GS
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Mobile Application Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "postgresql",
    icon: threejs,
  },
  {
    name: "Firebase",
    icon: tailwind,
  },
];

const experiences: TExperience[] = [
  {
    title: "Front-end Developer",
    companyName: "Crowdbotics",
    icon: cb,
    iconBg: "#383E56",
    date: "Sep 2023 - present",
    points: [
      "Expertise in frontend technologies and mobile app development frameworks.",
      "Collaborates with cross-functional teams on designing, developing, and deploying innovative solutions.",
      "Optimizes app performance and ensures seamless integration of features.",
      "Committed to delivering high-quality solutions that drive user engagement and enhance overall user experience.",
    ],
  },
  {
    title: "Sr. Mobile Application Developer",
    companyName: "V3 Solution",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - present",
    points: [
      "Expertise in React Native for mobile app development with proficiency in MongoDB, Express.js, and Node.js for backend technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end mobile app developer",
    companyName: "V3 Solution",
    icon: tesla,
    iconBg: "#383E56",
    date: "Dec 2021 - Aug 2022",
    points: [
      "Specialized in front-end design, particularly using React Native.",
      "Focused on crafting visually appealing and user-friendly mobile applications.",
      "Collaborated closely with UX/UI designers to translate design concepts into engaging and responsive user interfaces for iOS and Android platforms.",
    ],
  },
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Fundgazer",
    description:
      "Fundgazer now and revolutionize your stock trading experience for a brighter financial future!",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "react-native-reanimated",
        color: "pink-text-gradient",
      },
      {
        name: "Redux-Toolkit",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://vimeo.com/937245595?share=copy",
  },
  {
    name: "Yellowstone Boys & Girls Ranch",
    description:
      "Yellowstone Boys and Girls Ranch, a nonprofit organization, is trusted locally and nationally as a leader in the field of mental health care for children and their families.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://vimeo.com/937263159?share=copy",
  },
  {
    name: "Prestamode",
    description:
      "Prestamode is a mobile application facilitating appointment booking with barbers and in-app chat functionality.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://vimeo.com/937254531?share=copy",
  },
  {
    name: "GS Logistic",
    description:
      "We offer seamless international shipping services, allowing customers to order products from one country with secure payment options ensuring a smooth transaction process and have them delivered globally.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: GS,
    sourceCodeLink: "https://vimeo.com/937335928?share=copy",
  },
  {
    name: "KoponX",
    description:
      "KoponX simplifies coupon management for diverse product brands. Admins easily upload, update, and organize discounts, ensuring customers access the latest promotions seamlessly. Boost customer engagement and satisfaction with exclusive deals across a wide array of brands.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
     
    ],
    image: koponx,
    sourceCodeLink: "https://vimeo.com/937364413?share=copy",
  },
];

export { services, technologies, experiences, testimonials, projects };












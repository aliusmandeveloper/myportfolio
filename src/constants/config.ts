
type TSection = {
  p: string;
  h2: string;
  content?: string;
};
type TPersonalSection = TSection & {
  items: { label: string; value: string }[];
};

type TEducationSection = TSection & {
  items: { year: string; detail: string }[];
};
type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
    linkedIn: string;
    github: string;
  };
  contact: {
    form: {
      name: { span: string; placeholder: string };
      email: { span: string; placeholder: string };
      message: { span: string; placeholder: string };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    tech: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    personal: TPersonalSection;   // 👈 ab error solve
    education: TEducationSection; // 👈 ab error solve
  };
};

export const config: TConfig = {
  html: {
    title: "M.Ali Usman",
    fullName: "Muhammad Ali Usman",
    email: "aliusmanijaz143@gmail.com",
  },
  hero: {
    name: "Ali Usman",
    p: ["In the realm of programming,", "innovation knows no bounds."],
    linkedIn: "https://www.linkedin.com/in/muhammad-ali-usman-652061317/",
    github: "https://github.com/AliUsman143",
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: { span: "Your Name", placeholder: "What's your name?" },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: { span: "Your Message", placeholder: "What do you want to say?" },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a skilled MERN Stack Developer with hands-on expertise in MongoDB, MySQL, Firebase, and Supabase. I specialize in developing seamless, responsive, and user-friendly web applications while ensuring high-performance backend systems. My focus is on delivering innovative solutions that combine functionality with exceptional user experience. Let’s work together to transform ideas into impactful digital products.`,
    },
    personal: {
      p: "Personal Info",
      h2: "Details.",
      items: [
        { label: "Father Name", value: "Ijaz Ahmad" },
        { label: "Phone", value: "(+92) 305-1023906" },
        { label: "CNIC", value: "33101-8848463-9" },
        { label: "Date of Birth", value: "25-12-2003" },
        { label: "Age", value: "22" },
        { label: "Religion", value: "Islam" },
        { label: "Nationality", value: "Muslim" },
        { label: "Location", value: "k Jhumra, Faisal Town" },
        { label: "Degree", value: "BSCS" },
        { label: "Email", value: "aliusmanijaz143@gmail.com" },
        { label: "Job", value: "Open to work (remote, hybrid & onsite)" },
        { label: "Freelance", value: "Available" },
      ],
    },
    education: {
      p: "Education",
      h2: "Academic Background",
      items: [
        { year: "2022 - 2026", detail: "BS Computer Science from NTU, Faisalabad (GPA: 3.62/4.0)" },
        { year: "2020 - 2022", detail: "ICS from The City College (90%)" },
        { year: "2018 - 2020", detail: "Workers Welfare School (92.5%)" },
      ],
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    tech: {
      p: "My Skills",
      h2: "Technologies.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
      real-world examples of my work. Each project is briefly described with
      links to code repositories and live demos in it. It reflects my
      ability to solve complex problems, work with different technologies,
      and manage projects effectively.`,
    },
  },
};



// type TSection = {
//   p: string;
//   h2: string;
//   content?: string;
// };
// type TConfig = {
//   html: {
//     title: string;
//     fullName: string;
//     email: string;
//   };
//   hero: {
//     name: string;
//     p: string[];
//     linkedIn : string,
//     github:string,
//   };
//   contact: {
//     form: {
//       name: {
//         span: string;
//         placeholder: string;
//       };
//       email: {
//         span: string;
//         placeholder: string;
//       };
//       message: {
//         span: string;
//         placeholder: string;
//       };
//     };
//   } & TSection;
//   sections: {
//     about: Required<TSection>;
//     experience: TSection;
//     tech: TSection;
//     feedbacks: TSection;
//     works: Required<TSection>;
//   };
// };

// export const config: TConfig = {
//   html: {
//     title: 'M.Ali Usman',
//     fullName: 'Muhammad Ali Usman',
//     email: 'aliusmanijaz143@gmail.com',
//   },
//   hero: {
//     name: 'Ali Usman',
//     p: ['In the realm of programming,', 'innovation knows no bounds.'],
//     linkedIn:'https://www.linkedin.com/in/muhammad-ali-usman-652061317/',
//     github:'https://github.com/AliUsman143',
//   },
//   contact: {
//     p: 'Get in touch',
//     h2: 'Contact.',
//     form: {
//       name: {
//         span: 'Your Name',
//         placeholder: "What's your name?",
//       },
//       email: { span: 'Your Email', placeholder: "What's your email?" },
//       message: {
//         span: 'Your Message',
//         placeholder: 'What do you want to say?',
//       },
//     },
//   },
//   sections: {
//     about: {
//       p: 'Introduction',
//       h2: 'Overview.',
//       content: `I am a skilled MERN Stack Developer with hands-on expertise in MongoDB, MySQL, Firebase, and Supabase. I specialize in developing seamless, responsive, and user-friendly web applications while ensuring high-performance backend systems. My focus is on delivering innovative solutions that combine functionality with exceptional user experience. Let’s work together to transform ideas into impactful digital products.`,
//     },
//     experience: {
//       p: 'What I have done so far',
//       h2: 'Work Experience.',
//     },
//     tech: {
//       p: 'My Skills',
//       h2: 'Technologies.',
//     },
//     feedbacks: {
//       p: 'What others say',
//       h2: 'Testimonials.',
//     },
//     works: {
//       p: 'My work',
//       h2: 'Projects.',
   
//       content: `Following projects showcases my skills and experience through
//     real-world examples of my work. Each project is briefly described with
//     links to code repositories and live demos in it. It reflects my
//     ability to solve complex problems, work with different technologies,
//     and manage projects effectively.`,
//     },
//   },
// };

type TSection = {
  p: string;
  h2: string;
  content?: string;
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
    linkedIn : string,
    github:string,
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    tech: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Abdul Rafay',
    fullName: 'Abdul Rafay',
    email: 'amirrafay135@gmail.com',
  },
  hero: {
    name: 'Rafay',
    p: ['In the realm of programming,', 'innovation knows no bounds.'],
    linkedIn:'https://www.linkedin.com/in/abdulrafay-mernstack-developer',
    github:'https://github.com/AbdulRafayDeveloper',
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `As a skilled MERN stack developer with expertise in MongoDb, Mysql, Firebase, and Supabase, I specialize in crafting intuitive interfaces that enhance user experience. I excel in designing, optimizing, and delivering high-performance backend solutions alongside sleek, responsive web applications. Let's collaborate to turn your vision into reality, focusing on innovation and user satisfaction.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    tech: {
      p: 'My Skills',
      h2: 'Technologies.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

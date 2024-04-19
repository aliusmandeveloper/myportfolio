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
    title: 'Awais',
    fullName: 'Awais',
    email: 'razaaw3@mail.com',
  },
  hero: {
    name: 'Awais',
    p: ['In the realm of programming,', 'innovation knows no bounds.'],
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
      content: `As an experienced Mobile Application Developer, I specialize in creating user-friendly interfaces that enhance user experience. With expertise in MERN stack along with Firebase, I excel in designing, optimizing, and seamlessly providing high-performance backend solutions and elegant mobile app designs. Let's collaborate to bring your mobile app vision to life, focusing on technical excellence and user satisfaction.`,
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

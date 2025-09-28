

import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { TProject } from '../../types';
import { useEffect } from 'react';

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="card-img_hover absolute inset-1 m-3 flex justify-end">
              <section className="flex absolute top-0 w-[30px] h-[30px]">
                <button
                  className="group flex justify-center p-[5px] rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                  onClick={() => window.open(sourceCodeLink, '_blank')}
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-full w-full rounded-full"
                  />
                  <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-7 duration-700">
                    Demo
                  </span>
                </button>
              </section>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  useEffect(() => {
    console.log("projects: ", projects);
  }, []);

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects &&
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');

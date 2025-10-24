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
  liveDemoLink, // Add this prop for demo link
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)} className="w-full h-full">
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareColor="#aaa6c3"
        glareMaxOpacity={0.2}
        scale={1.02}
        transitionSpeed={2000}
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 h-full min-h-[500px] flex flex-col border border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl">
          {/* Image Container */}
          <div className="relative h-48 w-full mb-4 group overflow-hidden rounded-xl">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Action Buttons - Left and Right Sides */}
            <div className="absolute inset-0 flex justify-between items-start p-3">
              {/* View Code Button - Left Side */}
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-gray-600 hover:bg-gray-800 hover:border-gray-400 transition-all duration-300 transform hover:scale-110 group/btn"
                onClick={() => window.open(sourceCodeLink, '_blank')}
              >
                <img src={github} alt="github" className="w-5 h-5" />
                <span className="absolute -bottom-8 left-0 opacity-0 group-hover/btn:opacity-100 text-white text-xs bg-black/80 px-2 py-1 rounded transition-all duration-300 whitespace-nowrap">
                  View Code
                </span>
              </button>

              {/* Demo Button - Right Side - Only show if liveDemoLink exists */}
              {liveDemoLink && (
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/80 backdrop-blur-sm border border-blue-400 hover:bg-blue-700 hover:border-blue-300 transition-all duration-300 transform hover:scale-110 group/demo"
                  onClick={() => window.open(liveDemoLink, '_blank')}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span className="absolute -bottom-8 right-0 opacity-0 group-hover/demo:opacity-100 text-white text-xs bg-black/80 px-2 py-1 rounded transition-all duration-300 whitespace-nowrap">
                    Live Demo
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 leading-tight">{name}</h3>

            <p className="text-secondary mt-2 text-[14px] leading-relaxed flex-grow line-clamp-3 mb-4">
              {description}
            </p>

            {/* Tags */}
            <div className="mt-auto flex flex-wrap gap-2">
              {tags.map(tag => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  useEffect(() => {
    console.log('projects: ', projects);
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

      {/* Projects Grid - 3 cards per row */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
        {projects &&
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, 'projects');

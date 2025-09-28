import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { services } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="w-full sm:w-[250px]">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[250px] sm:min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-6 sm:px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
          />
          <h3 className="text-center text-[18px] sm:text-[20px] font-bold text-white mt-3">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = ({ ref }: any) => {
  return (
    <>
      {/* About Section */}
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      {/* Services Section */}
      <div
        ref={ref}
        className="mt-10 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-10"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    {/* Personal Info Section */}
<div className="mt-12 sm:mt-16">
  <Header useMotion={true} {...config.sections.personal} />

  <motion.div
    variants={fadeIn('', '', 0.1, 1)}
    className="mt-6 w-full"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {config.sections.personal.items.map(
        (item: { label: string; value: string }, index: number) => (
          <div
            key={index}
            className="flex flex-row items-center"
          >
            <span className="text-[#915EFF] font-medium text-[15px] md:text-[16px] whitespace-nowrap mr-2">
              {item.label}:
            </span>
            <span className="text-white text-[15px] md:text-[16px]">
              {item.value}
            </span>
          </div>
        )
      )}
    </div>
  </motion.div>
</div>

    


      {/* Education Section */}
      <div className="mt-12 sm:mt-16">
        <Header useMotion={true} {...config.sections.education} />

        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-6 w-full overflow-x-auto"
        >
          <table className="w-full border-collapse text-sm sm:text-base">
            <tbody>
              {config.sections.education.items.map((edu, index) => (
                <tr key={index} className="border-none">
                  <td className="py-2 pr-2 sm:pr-4 text-[#915EFF] font-medium whitespace-nowrap">
                    {edu.year}
                  </td>
                  <td className="py-2 text-white">{edu.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');



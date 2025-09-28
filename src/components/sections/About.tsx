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
  <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30} glareColor="#aaa6c3">
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img src={icon} alt="web-development" className="h-16 w-16 object-contain" />

          <h3 className="text-center text-[20px] font-bold text-white">{title}</h3>
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
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      <div ref={ref} className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* Personal Info Section */}
      <div className="mt-16">
        <Header useMotion={true} {...config.sections.personal} />

        <motion.div variants={fadeIn('', '', 0.1, 1)} className="mt-6 max-w-4xl">
          <table className="w-full border-collapse">
            <tbody>
              {config.sections.personal.items
                .reduce((rows: { label: string; value: string }[][], _item, index, array) => {
                  if (index % 2 === 0) {
                    rows.push(array.slice(index, index + 2));
                  }
                  return rows;
                }, [])
                .map((pair, rowIndex) => (
                  <tr key={rowIndex} className="border-none">
                    {pair.map((item: { label: string; value: string }, colIndex: number) => (
                      <React.Fragment key={colIndex}>
                        <td className="py-2 pr-4 text-[#915EFF] font-medium text-[16px] whitespace-nowrap">
                          {item.label}:
                        </td>
                        <td className="py-2 pr-8 text-[16px] text-white">{item.value}</td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* Education Section */}
      <div className="mt-16">
        <Header useMotion={true} {...config.sections.education} />

        <motion.div variants={fadeIn('', '', 0.1, 1)} className="mt-6 max-w-3xl">
          <table className="w-full border-collapse">
            <tbody>
              {config.sections.education.items.map((edu, index) => (
                <tr key={index} className="border-none">
                  <td className="py-2 pr-4 text-[#915EFF] font-medium text-[16px] whitespace-nowrap">
                    {edu.year}
                  </td>
                  <td className="py-2 text-[16px] text-white">{edu.detail}</td>
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

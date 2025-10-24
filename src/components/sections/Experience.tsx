import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { Header } from '../atoms/Header';
import { TExperience } from '../../types';
import { config } from '../../constants/config';

const ExperienceCard: React.FC<TExperience> = experience => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({refs}:any) => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#1d1836',
              color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            iconStyle={{ background: '#383E56' }}
            icon={
              <div ref={refs} className="flex h-full w-full items-center justify-center tracking-wider">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvUlEQVR4nO2dy0sVURzHjwnWqiyISHehLSzCRVC00B4WRO1koH+gFla6rE3ULjDJVq6K1qHZAyqDzJa1CMxemxZlYY9N2mOj0CcOjnGFdF73en/nnN8HZuc932E+zj0zv/O7M8YoiqIoiqIojgBsANqByNOtHVhvpANsBW4Cc/jPHDAENBuJAIeAH4THDNBhBJ4ZIcooldJkpAAM/9u1cBk0gibwEOaMJGZFTPTAvsRdDYd2CUI6q30UBNEpQYi9LlfmiartQ4UEIuQX8By4F2/vcQPvhDwDjgJrlpirppCNV0LOAasSslqAaeTijZCLGTP3AC+RhxdC3gJ1OXI3Ap+RhRdCugpk9yAL54X8sf/pBbI3xWNIwXkh78qQ/wE5OC/kURnynyIH54XcKkP+HeTgvJDRMuSPIgfnhXwDagrmTyEH54VYdhXI3oksnBfyHWgskN0orJTivJCxMuQ/yZF7La6L1S4z7mbgZMbmDeeFTJYh/2PGzKsZxz+Y4ebTeSGWAwWyO3LkteTIeROSkJ95mgOYb+e0n83K2hxZD0MSYhnIkTuQMytTlyGwGvgampDfWa62mL+6sp/JwwRQnzKnBricYWxvhFjuprlJjA+S/dsifAIuAMeW6XDvyXEF55UQS2+KvF7k4p2QVynyJC7dLqBChOGdkPEUeePIxTshZ1LknUUu3gixpYn+5WpLJXm1wBVk4rwQK+J+nhI8sBt4kLPJYRI4n3DZ2w08DknICNBahvzWDKUNywtgXcqx7T1Pn+9C5or0Yi0FcCrlL7kyFTNtE5/vpZPjFdyXEynytbhYwnClZCwA3E4QouX3ErabCgPsSBByPeN49ucR+PiVNbGC+zSRJAXYlrCE2wCczrjm4pSQEIiq7UOFLEaFCEOFCEOFCEOFCEOFCEOFCEOFCEOFCMM5IfZReF22s9wIh0C63w8bx8Dj7vfEniup+Nr9PmIcBU+737/keaZJtfG9+72v6K9uV5JQut/H4s7ySPjWo93v7uPkGeIzUbV9qJDFqBBhqBBhqBBhOClkNO4sj4Rv3SF0v19y8Mawz1chrpZO6nwtnWhxUZiQ18ZR8LT8bjliHAOPu9+Jl0PtsmiDEQ7a/e4Fzp0hvhNV24cKWYwKEYYKEYYKEYYIIfpiSWEvltxbskOh0yZBSH38Yt7QmRXxcmILMFTtoyGAG0YKQHPc2R4q08AWI4n4sd8zgcrYbyQCNAGDgcwps/ZrStyZ8T/s5GavOASsi0cV2trSPh1bURRFURRFMQL4C6b7/Ri1ZZoBAAAAAElFTkSuQmCC"
                  alt="my-resume"
                  className="h-[60%] w-[60%] object-contain"
                />
              </div>
            }
          >
            <a href='/ali_usman.pdf' download={'ali_usman.pdf'} className="w-[160px] bg-black h-[50px] my-3 flex items-center justify-center ml-auto mr-auto rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#7f6be3] before:to-[#5646aa] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g id="Interface / Download">
                    {' '}
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>{' '}
                  </g>{' '}
                </g>
              </svg>
              <span className="font-semibold">My Resume</span>
            </a>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');

import { motion } from 'framer-motion';

import { styles } from '../../constants/styles';
// import { ComputersCanvas } from "../canvas";
import { config } from '../../constants/config';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile } from '../../assets';

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
        <div className="mt-5 flex flex-col items-center justify-center ">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="h-auto">
          <p className={`${styles.heroHeadText}   text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <div className="lg:w-[40%] w-full">
            <h6 className={`${styles.heroSubText} text-white`}>
              I'm <span className="text-[#915EFF]">{config.hero.name}</span>, a skilled full-stack
              Mobile Application developer focusing on creating user-friendly and visually appealing
              UI designs, along with practical backend solutions to drive innovation
            </h6>
          </div>
          <div className="flex mt-4 items-center space-x-8">
            <a
              href={config.hero.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-purple-600"
            >
              <FaLinkedin className="text-white text-3xl" />
            </a>
            <a
              href={config.hero.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-purple-600"
            >
              <FaGithub className="text-white text-3xl" />
            </a>
            <a
              href="/Abdul_Rafay_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
            >
              <span className="text-black text-[12px]">View CV</span>
            </a>
          </div>
        </div>
        <div className="h-[700px] w-[700px] z-50 -mt-14 sm:block hidden">
          <img src={profile} alt="profilepic" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="bottom-1 absolute md:bottom-10 w-full items-center justify-center sm:flex hidden  ">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

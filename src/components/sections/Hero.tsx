import { motion } from 'framer-motion';
import { styles } from '../../constants/styles';
import { config } from '../../constants/config';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { profile } from '../../assets';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6  md:px-12 lg:px-20">
      {/* Wrapper with flex for responsiveness */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-7xl">
        
        {/* Left content */}
        <div className="flex-1 lg:mt-0 md:mt-20 mt-16">
          <div className="flex flex-row items-start gap-5">
            {/* Line */}
            <div className="mt-5 flex flex-col items-center">
              <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
              <div className="violet-gradient h-40 w-1 sm:h-80" />
            </div>

            {/* Text */}
            <div>
              <p className={`${styles.heroHeadText} text-white-100 mt-2`}>
                {config.hero.p[0]} <br className="hidden sm:block" />
                {config.hero.p[1]}
              </p>
              <div className="lg:w-[80%] w-full">
                <h6 className={`${styles.heroSubText} text-white`}>
                  I'm <span className="text-[#915EFF]">{config.hero.name}</span>, a skilled full-stack
                  Web Application developer focusing on creating user-friendly and visually appealing
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
                  href="/ali_usman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90"
                >
                  <span className="text-black text-[12px]">View CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={profile}
            alt="profilepic"
            className="w-[250px] h-[320px] md:w-[400px] md:h-[440px] lg:w-[500px] lg:h-[600px] lg:mt-10  object-top lg:object-cover "
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute lg:bottom-10 -bottom-20 w-full flex justify-center lg:mt-0 mt-20">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

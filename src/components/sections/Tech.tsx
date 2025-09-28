import { BallCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { Header } from '../atoms/Header';
import { config } from '../../constants/config';

const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.tech} />
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map(technology => (
          <div
            key={technology.name}
            className="relative group h-28 w-28 flex items-center justify-center"
          >
            <BallCanvas icon={technology.icon} />

            {/* Tooltip */}
            <span className="absolute -top-8 scale-0 transition-all rounded bg-gray-800 text-white text-sm px-2 py-1 group-hover:scale-100">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'tech');

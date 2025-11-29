import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { Suspense, lazy } from 'react';

import { styles } from "../styles";
const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#6CDAE0]' />
          <div className='w-1 sm:h-80 h-40 bg-[#6CDAE0]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white flex `}>
            Hi, I'm<span className='text-[#6CDAE0] ml-4'>Bijay</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              options={{
                strings: [
                  `I craft smooth, responsive <br className='sm:block hidden' /> web interfaces with React <br className='sm:block hidden' /> and modern UI tools.`,
                  `I build fast, reliable APIs <br className='sm:block hidden' /> powered by Node.js and <br className='sm:block hidden' /> Express.`,
                  `I manage data the smart way <br className='sm:block hidden' /> using MongoDB and clean <br className='sm:block hidden' /> backend logic.`,
                  `I deliver end-to-end web solutions <br className='sm:block hidden' /> that blend performance, <br className='sm:block hidden' /> clarity, and modern engineering.`
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ComputersCanvas />
      </Suspense>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

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
            <Typewriter
              options={{
                strings: ['Hi', 'नमस्ते', 'ਹੈਲੋ', 'ನಮಸ್ತೆ'],
                autoStart: true,
                loop: true,
              }}
            />, I'm<span className='text-[#6CDAE0] ml-4'>Bijay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate MERN developer <br className='sm:block hidden' />
            building fast, scalable, and <br className='sm:block hidden' />
            polished web solutions
          </p>
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

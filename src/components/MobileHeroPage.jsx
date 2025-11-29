import React from 'react'
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

import { styles } from "../styles";
import me1  from "../assets/me1.png";

const MobileHeroPage = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center flex justify-center items-center`}>
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <img src={me1} alt="Bijay" className="w-32 h-32 rounded-full border-4 border-[#6CDAE0] mb-4" />
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Hi, I'm <span className='text-[#6CDAE0]'>Bijay</span>
          </h1>
          <div className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
            <Typewriter
              options={{
                strings: [
                  `I craft smooth, responsive web interfaces with React and modern UI tools.`,
                  `I build fast, reliable APIs powered by Node.js and Express.`,
                  `I manage data the smart way using MongoDB and clean backend logic.`,
                  `I deliver end-to-end web solutions that blend performance, clarity, and modern engineering.`
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>

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

export default MobileHeroPage

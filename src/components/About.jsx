import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import me from "../assets/me1.png"

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-shadow duration-300 hover:shadow-[0_0_10px_10px_rgba(0,255,255,0.7)]'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-end">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>ABOUT ME</h2>
      </motion.div>

      <div className="flex justify-self-center gap-8 mt-4 max-w-4xl">
        <motion.img variants={fadeIn("", "", 0.1, 1)} src={me} alt="User" className="w-40 h-40 rounded-full object-cover" />
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] leading-[30px] flex-1'
        >
          Hi, I’m Bijay, a MERN stack developer who blends creativity with clean engineering.
          <br /> I build fast, responsive, and scalable web apps — from polished frontends to reliable backends — using modern JavaScript tools.
          <br /> I love transforming ideas into smooth digital experiences that people enjoy using.
          <br />
          <a
            href={me}
            download
            className="inline-flex items-center mt-3 mx-auto px-4 py-2 border-2 border-secondary rounded-md  text-white font-semibold transition-colors duration-300 ease-in-out hover:border-lime-400"
            aria-label="Download My Resume"
          >
            My Resume
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8" />
            </svg>
          </a>
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 justify-around'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <LazyLoadImage src={logo} alt='logo' className='h-12 object-contain'  />
          {/* <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Adrian &nbsp;
            <span className='sm:block hidden'> | JavaScript Mastery</span>
          </p> */}
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-lime-500" : "text-white"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-7 h-7 object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } fixed inset-0 bg-slate-950/50 backdrop-blur-lg z-50 transition-all duration-500 ease-in-out`}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
              onClick={() => setToggle(false)}
            >
              <img src={close} alt="close" className="w-6 h-6" />
            </button>
            <div className="flex flex-col items-center justify-center w-full h-full mt-10">
              <ul className='list-none flex flex-col gap-8'>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-semibold cursor-pointer text-2xl transition-all duration-300 transform ${
                      active === nav.title ? "text-lime-400 scale-110" : "text-white hover:text-lime-300 hover:scale-105"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`} className="block py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-lime-400/50">{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

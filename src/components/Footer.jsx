import React from 'react'
import { github, insta, linkedin, logo } from '../assets'


const Footer = () => {
  const year = new Date(2025, 10, 26, 15, 5, 0, 0).getFullYear();
  return (
    <footer className='bg-primary text-white py-4 border-t-[1px] border-white'>
      <img src={logo} alt='logo' className='h-16 justify-self-center mb-6 '/>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0 flex items-center space-x-3'>
            <a href='mailto:bjsah3277@gmail.com' className='flex items-center text-lg text-secondary hover:text-white transition-colors duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              bjsah3277@gmail.com
            </a>
          </div>
          <div className='flex space-x-6'>
            <a
              href='https://github.com/bjshah07/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-secondary transition-colors duration-300'
            >
              <img src={github} alt='GitHub' className='w-8 h-8' />
            </a>

            <a
              href='https://www.instagram.com/bj_shah_07/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-secondary transition-colors duration-300'
            >
              <img src={insta} alt='instagram' className='w-8 h-8' />
            </a>

            <a
              href='https://www.linkedin.com/in/bijaykrshah007/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-secondary transition-colors duration-300'
            >
              <img src={linkedin} alt='linkedin' className='w-8 h-8' />
            </a>

          </div>
        </div>
        <div className='mt-4 pt-4 text-center text-secondary text-sm border-t-[1px] border-white'>
          © {year} Bijay Kumar Shah. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
